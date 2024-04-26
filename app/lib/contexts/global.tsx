import { createContext, useContext, useState } from 'react'
import { IContextCharacter } from '../definitions/context'
import { IDataCharacter } from '../definitions/character'

const defaultValue: IDataCharacter = {
    character1: {
        characterList: [],
        characterSelected: null,
        episodes: null,
        prev: '',
        next: ''
    }, 
    character2: {
        characterList: [],
        characterSelected: null,
        episodes: null,
        prev: '',
        next: ''
    }
}

const ContextCharacter = createContext<IContextCharacter>({ dataCharacter: defaultValue })

export function ProviderContextCharacter({ children }: any) {
    const [dataCharacter, setDataCharacter] = useState<IDataCharacter>(defaultValue)

    return (
        <ContextCharacter.Provider value={{ dataCharacter, setDataCharacter }}>
            {children}
        </ContextCharacter.Provider>
    )
}

export function useContextCharacter() {
    const context = useContext(ContextCharacter)
    console.log("🚀 ~ useContextCharacter ~ context:", context)
    if (!context) {
        throw new Error('useContextCharacter must be used inside a ProviderContextCharacter')
    }
    return context
}
