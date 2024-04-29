import useContextCharacter from "../../lib/contexts/helperContext";
import { ICharacter, IDataCharacter } from "../../lib/definitions/character";
import { useEffect, useState } from "react";
import useFetchData from "../../lib/hooks/useFetchData";
import Pagination from "../molecules/Pagination";
import Message from "../atoms/Message";
import SelectedCharacters from "../molecules/SelectedCharacters";
import Character from "../molecules/Character";

export default function CharacterList({ id }: { id: keyof IDataCharacter }) {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const { data, loading, error } = useFetchData(url);
  const { dataCharacter, setDataCharacter } = useContextCharacter();

  useEffect(() => {
    if (data) {
      const { results, info } = data;
      setDataCharacter?.((prevDataCharacter) => ({
        ...prevDataCharacter,
        [id]: {
          ...prevDataCharacter[id],
          characterList: results,
          prev: info?.prev,
          next: info?.next,
        },
      }));
    }
  }, [data, id, setDataCharacter]);

  return loading ? (
    <Message text="Loading" />
  ) : error ? (
    <Message text="An error has occurred" />
  ) : (
    <>
      <SelectedCharacters id={id} />
      <div className="grid grid-cols-2 gap-2">
        {dataCharacter?.[id]?.characterList?.map((character: ICharacter) => (
          <Character key={character.id} id={id} character={character} />
        ))}
        <Pagination
          prev={dataCharacter?.[id].prev}
          next={dataCharacter?.[id].next}
          onClick={setUrl}
        />
      </div>
    </>
  );
}
