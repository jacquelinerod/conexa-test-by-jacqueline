import { IData } from "../definitions/character";

export async function fetchCharacters(
  url?: string,
): Promise<IData | undefined> {
  try {
    return (
      await fetch(url || "https://rickandmortyapi.com/api/character")
    ).json();
  } catch (error) {
    console.error("¡Error!", error);
  }
}
