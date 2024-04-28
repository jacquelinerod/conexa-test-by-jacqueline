import { render } from "@testing-library/react";
import Button from "@/app/ui/atoms/Button";

const mock = {
  disabled: true,
  onClick: jest.fn(),
  className: "myClass",
  text: "myText",
};

describe("Button Component", () => {
  it("should be disabled if the disabled property is true", () => {
    const button = (
      <Button
        disabled={true}
        onClick={mock.onClick}
        className={mock.className}
        text={mock.text}
      />
    );
    const { container } = render(button);
    expect(container).toMatchSnapshot();
  });

  it("should not be disabled if the disabled property is false", () => {
    const button = (
      <Button
        disabled={false}
        onClick={mock.onClick}
        className={mock.className}
        text={mock.text}
      />
    );
    const { container } = render(button);
    expect(container).toMatchSnapshot();
  });
});
