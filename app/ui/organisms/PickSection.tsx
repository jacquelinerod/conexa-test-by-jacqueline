import { fetchCharacters } from "@/app/lib/data/character";
import CharacterList from "../CharacterList";
import Pagination from "../Pagination";
import { useEffect } from "react";
import { useContextCharacter } from "@/app/lib/contexts/global";



export default function PickSection() {
    const { dataCharacter, setDataCharacter } = useContextCharacter();

    const getCharacteres = async () => {
        const data = await fetchCharacters()
        if (data) {
            const { info, results } = data
            setDataCharacter?.({ ...dataCharacter, characters: results, prev: info.prev, next: info.next })
        }
    }

    useEffect(() => {
        getCharacteres()
    }, [])

    return (
        <section className='grid grid-cols-2  gap-2 px-2 py-2' >
            <section className='w-full grid grid-cols-2 gap-2'>
                <CharacterList id='character1' />
            </section>
            <section className='w-full grid grid-cols-2 gap-2'>
                <CharacterList id='character2' />
            </section>
            <Pagination />
        </section>
    )
}