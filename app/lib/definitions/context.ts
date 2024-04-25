import { Dispatch, SetStateAction } from 'react';
import { ICharacter, IInfo } from './character';

export interface IDataCharacter {
    prev: IInfo['prev']
    next: IInfo['next']
    characters: ICharacter[]
    character1: ICharacter | null
    character2: ICharacter | null
    episodies: IEpisodes | null
}

export interface IContextCharacter {
    dataCharacter: IDataCharacter,
    setDataCharacter?: Dispatch<SetStateAction<IDataCharacter>>
}
