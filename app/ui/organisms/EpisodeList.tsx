import { IEpisode } from "@/app/lib/definitions/episodes";
import useFetchData from "@/app/lib/hooks/useFetchData";
import Episode from "../atoms/Espisode";
import Message from "../atoms/Message";

export default function EpisodeList({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const { data, loading, error } = useFetchData(url);

  return loading ? (
    <Message text="Loading" />
  ) : error ? (
    <Message text="An error has occurred" />
  ) : (
    <section className="w-full max-h-[20vh] h-max-content overflow-y-auto custom-scrollbar gap-4 flex flex-col bg-gray-700 rounded-xl p-5">
      <h2 className="text-center text-sm">{title}</h2>
      {data ? (
        <ul className="overflow-y-auto">
          {data.length ? (
            data.map((item: IEpisode, index: number) => (
              <Episode
                key={index}
                episode={item.episode}
                name={item.name}
                air_date={item.air_date}
              />
            ))
          ) : (
            <Episode
              episode={data.episode}
              name={data.name}
              air_date={data.air_date}
            />
          )}
        </ul>
      ) : (
        <p className="text-center text-sm">Characters do not share episodes</p>
      )}
    </section>
  );
}
