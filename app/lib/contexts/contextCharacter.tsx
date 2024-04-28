import { useState } from "react";
import { IDataCharacter } from "../definitions/character";
import { ContextCharacter, defaultValue } from "./helperContext";

export default function ProviderContextCharacter({ children }: any) {
  const [dataCharacter, setDataCharacter] =
    useState<IDataCharacter>(defaultValue);

  return (
    <ContextCharacter.Provider value={{ dataCharacter, setDataCharacter }}>
      {children}
    </ContextCharacter.Provider>
  );
}
