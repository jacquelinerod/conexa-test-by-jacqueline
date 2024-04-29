"use client";

import CharacterSection from "./ui/molecules/CharacterSection";
import EpisodesSection from "./ui/molecules/EpisodesSection";
import ProviderContextCharacter from "./lib/contexts/contextCharacter";
import Image from "next/image";
import image from "../public/Rick_and_Morty.svg";

export default function Page() {
  return (
    <>
      <header className="sticky top-0 flex justify-center z-10 bg-gray-800 pt-3">
        <Image
          src={image}
          alt="Logo Rick and Morty"
          height={45}
          className="rounded"
        />
      </header>
      <main>
        <ProviderContextCharacter>
          <CharacterSection />
          <EpisodesSection />
        </ProviderContextCharacter>
      </main>
    </>
  );
}
