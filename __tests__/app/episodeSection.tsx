import { render, screen } from "@testing-library/react";
import useContextCharacter from "../../app/lib/contexts/helperContext";
import EpisodesSection from "@/app/ui/molecules/EpisodesSection";
import dataCharacter from "@/__mocks__/dataCharacter.json";

jest.mock("../../app/ui/organisms/EpisodeContainer", () => "mock-episode-list");
jest.mock("../../app/lib/contexts/helperContext", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("EpisodesSection component", () => {
  it("should return to the episodes section", async () => {
    (useContextCharacter as jest.Mock).mockImplementation(() => ({
      dataCharacter,
    }));
    render(<EpisodesSection />);
    expect(
      await screen.findByTitle("Character #1 - Only Episode")
    ).toBeInTheDocument();
    expect(
      await screen.findByTitle("Character #1 y #2 - Shared Episodes")
    ).toBeInTheDocument();
    expect(
      await screen.findByTitle("Character #2 - Only Episode")
    ).toBeInTheDocument();
  });
  it("should return null", () => {
    (useContextCharacter as jest.Mock).mockImplementation(() => ({}));
    const { container } = render(<EpisodesSection />);
    expect(container).toMatchInlineSnapshot(`<div />`);
  });
});
