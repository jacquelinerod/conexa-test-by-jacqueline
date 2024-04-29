import useContextCharacter from "@/app/lib/contexts/helperContext";
import {
  CHARACTER_STATUS,
  ICharacterItem,
  IDataCharacter,
} from "@/app/lib/definitions/character";
import Image from "next/image";

export default function Character({ id, character }: ICharacterItem) {
  const { dataCharacter, setDataCharacter } = useContextCharacter();

  const getEpisodeIds = (episodes: string[]) => {
    return episodes?.map((episode) => episode.split("/").pop()).join(",");
  };

  const selectedCharacters = [
    dataCharacter?.character1?.characterSelected?.id,
    dataCharacter?.character2?.characterSelected?.id,
  ];

  const statusColor = {
    [CHARACTER_STATUS.ALIVE]: "bg-green-700",
    [CHARACTER_STATUS.DEAD]: "bg-red-600",
    [CHARACTER_STATUS.UNKNOWN]: "bg-gray-500",
  };

  const isSelected =
    dataCharacter?.[id]?.characterSelected?.id === character?.id;

  const handleClick = () => {
    setDataCharacter?.((prevDataCharacter: IDataCharacter) => ({
      ...prevDataCharacter,
      [id]: {
        ...prevDataCharacter?.[id],
        characterSelected: character,
        episodeIds: getEpisodeIds(character.episode),
      },
    }));
  };

  return (
    <div
      onClick={handleClick}
      className={`hover:border-white flex items-center content-center w-full rounded-xl border border-transparent ${
        isSelected ? "border-white" : ""
      } ${
        !isSelected && selectedCharacters.includes(character.id)
          ? "pointer-events-none opacity-50"
          : ""
      }`}
    >
      <div className="  p-2 w-full h-full cursor-pointer">
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
            <div className="flex flex-col w-3/5 p-2 gap-2">
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
  );
}
