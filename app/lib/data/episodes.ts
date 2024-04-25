export async function fetchEpisodes(episodes?: string) {
    try {
        return (await fetch( `https://rickandmortyapi.com/api/episode/${episodes}`)).json()
    } catch (error) {
        console.error('¡Error!', error)
    }
}