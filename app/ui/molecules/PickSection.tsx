import CharacterList from "../organisms/CharacterList";

export default function PickSection() {
  return (
    <section className="grid grid-cols-2  gap-2 px-2 py-2">
      <section className="w-full">
        <CharacterList id="character1" />
      </section>
      <section className="w-full">
        <CharacterList id="character2" />
      </section>
    </section>
  );
}
