interface IEpisodes {
  results: IEpisode[];
  info: IEpisode[];
}

interface IEpisode {
  episode: string;
  name: string;
  air_date: string;
}
