'use client'

import { fetchCharacters } from '../lib/data/character'
import { useContextCharacter } from '../lib/contexts/global';
import Button from './atoms/Button';

const defaultClassName = 'bg-gray-700 py-3 px-8 rounded-xl'
const disabledClassName = 'disabled:opacity-50 cursor-not-allowed'

export default function Pagination() {
    const { dataCharacter, setDataCharacter } = useContextCharacter();

    const handleClick = async (url: string | null) => {
        if (url) {
            const data = await fetchCharacters(url)
            const { info, results } = data
            setDataCharacter?.({ ...dataCharacter, characters: results, prev: info.prev, next: info.next })
        }
    }

    const prevUrl = dataCharacter?.prev
    const nextUrl = dataCharacter?.next

    const prevUrlClassName =`${defaultClassName} ${!prevUrl ? disabledClassName : ''}`
    const nextUrlClassName =`${defaultClassName} ${!nextUrl ? disabledClassName : ''}`

    return (
        <section className='col-span-2 flex justify-center'>
            <div className='gap-10 flex p-4'>
                <Button 
                disabled= {!prevUrl} 
                onClick={() => handleClick(prevUrl)}
                className={prevUrlClassName}
                children='Prev'
                />
                <Button 
                disabled= {!nextUrl} 
                onClick={() => handleClick(nextUrl)}
                className={nextUrlClassName}
                children='Prev'
                />
            </div >
        </section>
    )
}