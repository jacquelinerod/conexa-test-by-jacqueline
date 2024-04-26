import useFetchData from "@/app/lib/hooks/useFetchData";

interface IEpisodesList {
  title: string;
  episodeIds: string;
}

export default function EpisodesList({ title, episodeIds }: IEpisodesList) {
  const url = episodeIds.length
    ? `https://rickandmortyapi.com/api/episode/${episodeIds}`
    : undefined;

  if (!url)
    return (
      <section className="w-full max-h-[20vh] h-max-content overflow-y-auto custom-scrollbar gap-4 flex flex-col">
        <h2 className="text-center text-sm">{title}</h2>
        <p className="text-center text-sm">Characters do not share episodes</p>
      </section>
    );

  const { data, loading, error } = useFetchData(url);

  return loading ? (
    "Loading"
  ) : error ? (
    <strong>{error.message}</strong>
  ) : (
    <section className="w-full max-h-[20vh] h-max-content overflow-y-auto custom-scrollbar gap-4 flex flex-col">
      <h2 className="text-center text-sm">{title}</h2>
      {data ? (
        <ul>
          {data.length ? (
            data.map((item, index) => (
              <li className="text-sm" key={index}>
                <strong>{item.episode}</strong> - {item.name} - {item.air_date}
              </li>
            ))
          ) : (
            <li className="text-sm" key="1">
              <strong>{data.episode}</strong> - {data.name} - {data.air_date}
            </li>
          )}
        </ul>
      ) : (
        <p className="text-center text-sm">Characters do not share episodes</p>
      )}
    </section>
  );
}
