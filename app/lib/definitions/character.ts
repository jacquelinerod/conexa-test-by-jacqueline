export enum CHARACTER_STATUS {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}

export type IData = {
  info: IInfo;
  results: ICharacter[];
};

export type IInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type IOrigin = {
  name: string;
  url: string;
};

type ILocation = {
  name: string;
  url: string;
};

export interface ICharacter {
  id: number;
  name: string;
  status: CHARACTER_STATUS;
  species: string;
  type: string;
  gender: string;
  IOrigin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IDataCharacter {
  character1: ICharacterDefinition;
  character2: ICharacterDefinition;
}

export interface ICharacterDefinition {
  characterList: ICharacter[];
  characterSelected: ICharacter | null;
  episodeIds: string | null;
  prev: IInfo["prev"];
  next: IInfo["next"];
}

export interface ICharacterItem {
  id: keyof IDataCharacter;
  character: ICharacter;
}

export interface ISelectedCharacters {
  id: keyof IDataCharacter;
}
