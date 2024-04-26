import { Dispatch, SetStateAction } from "react";
import { IDataCharacter } from "./character";

export interface IContextCharacter {
  dataCharacter: IDataCharacter;
  setDataCharacter?: Dispatch<SetStateAction<IDataCharacter>>;
}
