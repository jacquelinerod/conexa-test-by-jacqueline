'use client'

// Components 
import PickSection from './ui/organisms/PickSection';
import EpisodesSection from './ui/organisms/EpisodesSection';

// Context
import { ProviderContextCharacter } from "./lib/contexts/global";

export default function Page() {
  return (
    <main >
      <ProviderContextCharacter>
        <PickSection />
        {/* <EpisodesSection /> */}
      </ProviderContextCharacter>
    </main>
  )
}