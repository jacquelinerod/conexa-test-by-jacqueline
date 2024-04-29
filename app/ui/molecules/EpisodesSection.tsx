import useContextCharacter from "@/app/lib/contexts/helperContext";
import EpisodeContainer from "../organisms/EpisodeContainer";

export default function EpisodesSection() {
  const { dataCharacter } = useContextCharacter();
  const episodeIdshCharacter1 = dataCharacter?.character1.episodeIds;
  const episodeIdshCharacter2 = dataCharacter?.character2.episodeIds;
  const episodeIdshCharacter1and2 = episodeIdshCharacter1
    ?.split(",")
    .filter((value) => episodeIdshCharacter2?.split(",").includes(value))
    .join();

  return dataCharacter &&
    dataCharacter?.character1.characterSelected &&
    dataCharacter?.character2.characterSelected ? (
    <section className="grid grid-cols-3  gap-5 sticky left-0 right-0 bottom-0 bg-gray-800 p-5 max-h-[25vh] min-h-[25vh]">
      <EpisodeContainer
        episodeIds={episodeIdshCharacter1}
        title="Character #1 - Only Episode"
      />
      <EpisodeContainer
        episodeIds={episodeIdshCharacter1and2}
        title="Character #1 y #2 - Shared Episodes"
      />
      <EpisodeContainer
        episodeIds={episodeIdshCharacter2}
        title="Character #2 - Only Episode"
      />
    </section>
  ) : null;
}
