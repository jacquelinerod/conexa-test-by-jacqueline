import { render, screen } from "@testing-library/react";
import useFetchData from "@/app/lib/hooks/useFetchData";
import EpisodeContainer from "@/app/ui/organisms/EpisodeContainer";
import useFetchDataUrl from "@/__mocks__/useFetchdata.json";

jest.mock("../../app/lib/hooks/useFetchData", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("EpisodeContainer component", () => {
  it("should return an unordered list", () => {
    (useFetchData as jest.Mock).mockImplementation(() => useFetchDataUrl);
    render(<EpisodeContainer title="My title" episodeIds="1,2,3,4,5" />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  it("should return that the characters do not share episodes", () => {
    (useFetchData as jest.Mock).mockImplementation(() => ({
      ...useFetchDataUrl,
      data: null,
    }));
    render(<EpisodeContainer title="My title" episodeIds="1,2,3,4,5" />);
    expect(
      screen.getByText("Characters do not share episodes")
    ).toBeInTheDocument();
  });
  it("should return loading", () => {
    (useFetchData as jest.Mock).mockImplementation(() => ({
      ...useFetchDataUrl,
      loading: true,
    }));
    render(<EpisodeContainer title="My title" episodeIds="1,2,3,4,5" />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
  it("should return error", () => {
    (useFetchData as jest.Mock).mockImplementation(() => ({
      ...useFetchDataUrl,
      error: { message: "¡An error has occurred!" },
    }));
    render(<EpisodeContainer title="My title" episodeIds="1,2,3,4,5" />);
    expect(screen.getByText("An error has occurred")).toBeInTheDocument();
  });
});
