import { render, screen } from "@testing-library/react";
import Pagination from "@/app/ui/molecules/Pagination";

describe("Pagination component", () => {
  it("should return the button section if there is pagination", () => {
    render(
      <Pagination
        prev="https://rickandmortyapi.com/api/character?page=3"
        next="https://rickandmortyapi.com/api/character?page=5"
        onClick={() => jest.fn()}
      />
    );
    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
  it("should not return the button section if there is pagination.", () => {
    render(<Pagination prev={null} next={null} onClick={() => jest.fn()} />);
    expect(screen.queryByTestId("pagination")).not.toBeInTheDocument();
  });
});
