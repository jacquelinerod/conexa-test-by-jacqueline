import { createContext, useContext } from "react";
import { IDataCharacter } from "../definitions/character";
import { IContextCharacter } from "../definitions/context";

export const defaultValue: IDataCharacter = {
  character1: {
    characterList: [],
    characterSelected: null,
    episodeIds: null,
    prev: "",
    next: "",
  },
  character2: {
    characterList: [],
    characterSelected: null,
    episodeIds: null,
    prev: "",
    next: "",
  },
};

export const ContextCharacter = createContext<IContextCharacter>({
  dataCharacter: defaultValue,
});

export default function useContextCharacter() {
  const context = useContext(ContextCharacter);
  if (!context) {
    throw new Error(
      "useContextCharacter must be used inside a ProviderContextCharacter"
    );
  }
  return context;
}
