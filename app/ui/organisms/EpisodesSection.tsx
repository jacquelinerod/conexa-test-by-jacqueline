import { useContextCharacter } from '@/app/lib/contexts/global';
import EpisodesList from '../atoms/EpisodesList'
import { fetchEpisodes } from '@/app/lib/data/episodes';
import { useEffect } from 'react';

export default function EpisodesSection() {

    const { dataCharacter, setDataCharacter } = useContextCharacter()
    const episodesCharacter1: string[] | undefined = dataCharacter?.character1?.episode
    const episodesCharacter2: string[] | undefined = dataCharacter?.character2?.episode
    const episodesCharacter1and2: string[] | undefined = episodesCharacter1?.filter((value) => episodesCharacter2?.includes(value));

    const episodesCharacter1Ids = episodesCharacter1?.map((episode) => episode.split('/').pop()).join(',')
    const episodesCharacter2Ids = episodesCharacter2?.map((episode) => episode.split('/').pop()).join(',')
    const sharedEpisodesCharacterIds = episodesCharacter1and2?.map((episode) => episode.split('/').pop()).join(',')
    const allEpisodesForCharactersSelected: string[] | undefined = [...episodesCharacter1 || [], ...episodesCharacter2 || []].filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    const allEpisodesForCharactersSelectedIds: Set<string> = new Set([
        ...(episodesCharacter1Ids ? episodesCharacter1Ids.split(',') : []),
        ...(episodesCharacter2Ids ? episodesCharacter2Ids.split(',') : [])
    ]); console.log("🚀 ~ EpisodesSection ~ allEpisodesForCharactersSelectedIds:", allEpisodesForCharactersSelectedIds)

    // hacer los listados segun los ids de cada character


    const getEpisodes = async () => {
        const data = await fetchEpisodes([...allEpisodesForCharactersSelectedIds])
        if (data) {
            console.log("🚀 ~ getEpisodes ~ data:", data)
            // const { info, results } = data
            // const a = data.reduce((acc, curr,   i) => {
            //     console.log("🚀 ~ a ~ i:", i)
            //     console.log("🚀 ~ a ~ curr:", curr)
            //     console.log("🚀 ~ a ~ acc:", acc)
            //     if (episodesCharacter1Ids?.includes(curr.id)) acc.character1 = acc.character1.push(curr)
            //     if (episodesCharacter2Ids?.includes(curr.id)) acc.character2 = acc.character2.push(curr)
            //     if (sharedEpisodesCharacterIds?.includes(curr.id)) acc.shared = acc.shared.push(curr)
            //     return acc
            // }, { character1: [], character2: [], shared: [] })
            // console.log("🚀 ~ a ~ a:", a)
            // const { episode, name, air_date } =
            // setDataCharacter?.({ ...dataCharacter, episodies: {episode: episode, name: name, air_date: air_date} })
        }
    }

    useEffect(() => {
        getEpisodes()
    }, [])

    console.log("🚀 ~ getEpisodes:", getEpisodes())


    return (episodesCharacter1 && episodesCharacter2 ?
        <section className='grid grid-cols-3  gap-5 sticky left-0 right-0 bottom-0 bg-gray-700 p-5 max-h-[35vh]'>
            <EpisodesList title='Character #1 - Only Episode' list={episodesCharacter1} />
            <EpisodesList title='Character #1 y #2 - Shared Episodes' list={episodesCharacter1and2} />
            <EpisodesList title='Character #2 - Only Episode' list={episodesCharacter2} />
        </section>
        : null
    )
}
