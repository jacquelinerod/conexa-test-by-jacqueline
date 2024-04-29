import CharacterList from "../organisms/CharacterList";

export default function CharacterSection() {
  return (
    <section className="pick-section-container grid grid-cols-2  gap-7 py-2 pt-0 pb-2 relative px-4">
      <section className="w-full">
        <CharacterList id="character1" />
      </section>
      <section className="w-full">
        <CharacterList id="character2" />
      </section>
    </section>
  );
}
