interface IEpisodes {
    all?: IEpisode[]
    character1?: IEpisode[]
    character2?: IEpisode[]
    shared?: IEpisode[]
}

interface IEpisode {
    episode: string
    name: string
    air_date: string
}