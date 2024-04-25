import { createContext, useContext, useState } from 'react'
import { IContextCharacter, IDataCharacter } from '../definitions/context'

const defaultValue: IDataCharacter = {
    prev: '',
    next: '',
    characters: [],
    character1: null,
    character2: null,
    episodies: null
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
