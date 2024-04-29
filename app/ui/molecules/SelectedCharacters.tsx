import useContextCharacter from "@/app/lib/contexts/helperContext";
import { ISelectedCharacters } from "@/app/lib/definitions/character";
import Image from "next/image";

export default function SelectedCharacters({ id }: ISelectedCharacters) {
  const { dataCharacter } = useContextCharacter();

  return (
    <div className="sticky top-14 bg-gray-800 z-10 p-4 ">
      {dataCharacter?.[id]?.characterSelected ? (
        <div className="flex flex-row justify-center bg-gray-700 rounded-xl mx-auto max-w-80 min-h-14 h-14 items-center">
          <div className="flex flex-col rounded mx-2">
            <Image
              src={dataCharacter?.[id]?.characterSelected?.image || ""}
              alt="CharacterSelected"
              width={50}
              height={50}
              className="rounded"
            />
          </div>
          <div className="flex flex-col w-full mx-1">
            <p>{dataCharacter?.[id]?.characterSelected?.name}</p>
            <p>{dataCharacter?.[id]?.characterSelected?.species}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-center bg-gray-700 rounded-xl mx-auto max-w-80 min-h-14 h-14 items-center">
          <p>Select a character</p>
        </div>
      )}
    </div>
  );
}
