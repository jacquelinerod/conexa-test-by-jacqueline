import Image from "next/image";
import useContextCharacter from "../../lib/contexts/helperContext";
import { CHARACTER_STATUS, ICharacter } from "../../lib/definitions/character";
import { useEffect, useState } from "react";
import useFetchData from "../../lib/hooks/useFetchData";
import Pagination from "../molecules/Pagination";

export const getEpisodeIds = (episodes) => {
  return episodes?.map((episode) => episode.split("/").pop()).join(",");
};

export default function CharacterList({ id }: { id: String }) {
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
  }, [data]);

  const statusColor = {
    [CHARACTER_STATUS.ALIVE]: "bg-green-700",
    [CHARACTER_STATUS.DEAD]: "bg-red-600",
    [CHARACTER_STATUS.UNKNOWN]: "bg-gray-500",
  };

  const selectedCharacters = [
    dataCharacter?.character1?.characterSelected?.id,
    dataCharacter?.character2?.characterSelected?.id,
  ];

  return loading ? (
    "Loading"
  ) : error ? (
    <strong>{error.message}</strong>
  ) : (
    <div className="grid grid-cols-2 gap-2">
      {dataCharacter?.[id]?.characterList?.map((character: ICharacter) => (
        <div
          key={character.id}
          onClick={() => {
            setDataCharacter?.((prevDataCharacter) => ({
              ...prevDataCharacter,
              [id]: {
                ...prevDataCharacter?.[id],
                characterSelected: character,
                episodeIds: getEpisodeIds(character.episode),
              },
            }));
          }}
          className={`flex items-center content-center w-full rounded-xl border border-transparent ${
            dataCharacter?.[id]?.characterSelected?.id === character?.id
              ? "border-white"
              : ""
          } ${
            !(dataCharacter?.[id]?.characterSelected?.id === character?.id) &&
            selectedCharacters.includes(character.id)
              ? "pointer-events-none opacity-50"
              : ""
          }`}
        >
          <div className="  px-2 py-2 w-full h-full">
            <div className=" bg-gray-700 rounded-xl shadow-md overflow-hidden h-full">
              <div className="md:flex">
                <div className="md:flex-shrink-0 w-2/5">
                  <Image
                    src={character.image}
                    alt="Character"
                    className="character image "
                    width={120}
                    height={120}
                  />
                </div>
                <div className="flex flex-col w-3/5 px-2 py-2 gap-2">
                  <h3 className="text-green-400 uppercase text-base">
                    {character.name}
                  </h3>
                  <div className="text-blue-300 flex flex-row gap-2">
                    <div
                      className={`w-5 h-5 gap-2 rounded-full items-start ${
                        statusColor[character.status]
                      } `}
                    ></div>
                    <p className="content-center capitalize leading-normal text-sm">
                      {character.status} - {character.species}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination
        prev={dataCharacter?.[id].prev}
        next={dataCharacter?.[id].next}
        onClick={setUrl}
      />
    </div>
  );
}
