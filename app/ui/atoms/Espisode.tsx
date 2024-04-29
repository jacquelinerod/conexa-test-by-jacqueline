import { IEpisode } from "@/app/lib/definitions/episodes";

export default function Episode({ episode, name, air_date }: IEpisode) {
  return (
    <li className="text-sm">
      <strong>{episode}</strong> - {name} - {air_date}
    </li>
  );
}
