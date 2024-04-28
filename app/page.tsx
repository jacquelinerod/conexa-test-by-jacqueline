"use client";

import PickSection from "./ui/molecules/PickSection";
import EpisodesSection from "./ui/organisms/EpisodesSection";
import ProviderContextCharacter from "./lib/contexts/contextCharacter";

export default function Page() {
  return (
    <main>
      <ProviderContextCharacter>
        <PickSection />
        <EpisodesSection />
      </ProviderContextCharacter>
    </main>
  );
}
