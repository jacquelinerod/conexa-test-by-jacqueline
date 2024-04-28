import { render, screen } from "@testing-library/react";
import useContextCharacter from "../../app/lib/contexts/helperContext";
import EpisodesSection from "@/app/ui/organisms/EpisodesSection";
import dataCharacter from "@/__mocks__/dataCharacter.json";
import EpisodesList from "../../app/ui/atoms/EpisodesList";

jest.mock("../../app/ui/atoms/EpisodesList", () => "mockEpisodesList");
jest.mock("../../app/lib/contexts/helperContext", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("EpisodesSection component", () => {
  it("should return to the episodes section", () => {
    useContextCharacter.mockImplementation(() => ({ dataCharacter }));
    const { container } = render(<EpisodesSection />);
    expect(screen.findByTitle("Character #1 - Only Episode")).toBeTruthy();
    expect(
      screen.findByTitle("Character #1 y #2 - Shared Episodes")
    ).toBeTruthy();
    expect(screen.findByTitle("Character #2 - Only Episode")).toBeTruthy();
  });
  it("should return null", () => {
    useContextCharacter.mockImplementation(() => ({}));
    const { container } = render(<EpisodesSection />);
    expect(container).toMatchInlineSnapshot(`<div />`);
  });
});
