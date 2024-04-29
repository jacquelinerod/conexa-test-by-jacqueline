import { IEpisodeContainer } from "@/app/lib/definitions/episodes";
import EpisodeList from "./EpisodeList";

export default function EpisodeContainer({
  title,
  episodeIds,
}: IEpisodeContainer) {
  const url = episodeIds?.length
    ? `https://rickandmortyapi.com/api/episode/${episodeIds}`
    : undefined;

  return url ? (
    <EpisodeList title={title} url={url} />
  ) : (
    <section className="w-full max-h-[20vh] h-max-content overflow-y-auto custom-scrollbar gap-4 flex flex-col bg-gray-700 rounded-xl p-5">
      <h2 className="text-center text-sm">{title}</h2>
      <p className="text-center text-sm">Characters do not share episodes</p>
    </section>
  );
}
