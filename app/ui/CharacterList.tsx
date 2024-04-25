import Image from 'next/image'
import { useContextCharacter } from '../lib/contexts/global'
import { CHARACTER_STATUS, ICharacter } from '../lib/definitions/character'


export default function CharacterList({ id }: { id: String }) {
    const { dataCharacter, setDataCharacter } = useContextCharacter();

    const statusColor = {
        [CHARACTER_STATUS.ALIVE]: 'bg-green-700',
        [CHARACTER_STATUS.DEAD]: 'bg-red-600',
        [CHARACTER_STATUS.UNKNOWN]: 'bg-gray-500',
    }

    const selectedCharacters = [dataCharacter?.character1?.id,dataCharacter?.character2?.id]

    return dataCharacter?.characters?.map((character: ICharacter) => (

        <div
            key={character.id}
            onClick={() => {
                setDataCharacter?.({ ...dataCharacter, [id]: character })
            }}
            className={`flex items-center content-center w-full rounded-xl border border-transparent ${dataCharacter[id]?.id === character?.id ? 'border-white' : ''} ${!(dataCharacter[id]?.id === character?.id) && selectedCharacters.includes(character.id)? 'pointer-events-none opacity-50' : '' }`}>
            <div className='  px-2 py-2 w-full h-full'>
                <div className=' bg-gray-700 rounded-xl shadow-md overflow-hidden h-full'>
                    <div className='md:flex'>
                        <div className='md:flex-shrink-0 w-2/5'>
                            <Image
                                src={character.image}
                                alt='Character'
                                className='character image '
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className='flex flex-col w-3/5 px-2 py-2 gap-2' >
                            <h3 className='text-green-400 uppercase text-base' >{character.name}</h3>
                            <div className='text-blue-300 flex flex-row gap-2'>
                                <div className={`w-5 h-5 gap-2 rounded-full items-start ${statusColor[character.status]} `}></div>
                                <p className='content-center capitalize leading-normal text-sm'>{character.status} - {character.species}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    )
}
