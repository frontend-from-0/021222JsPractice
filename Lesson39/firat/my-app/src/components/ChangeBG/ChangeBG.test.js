import { render, fireEvent } from "@testing-library/react";
import ChangeBG from "./ChangeBG";

describe("ChangeBG component", function () {
  it("should render correctly", function () {
    const { getByTestId } = render(<ChangeBG />);
    const greenButton = getByTestId("change-green-button");
    const redButton = getByTestId("change-red-button");

    expect(greenButton).toBeInTheDocument();
    expect(redButton).toBeInTheDocument();
  });

  it("should have green background color if 'Change to Green' button is clicked", function () {
    const { getByTestId, container } = render(<ChangeBG />);

    const greenButton = getByTestId("change-green-button");

    fireEvent.click(greenButton);

    expect(container.firstChild).toHaveClass("bg--green");
  });

  it("should have red background color if 'Change to Red' button is clicked", function () {
    const { getByTestId, container } = render(<ChangeBG />);

    const redButton = getByTestId("change-red-button");

    fireEvent.click(redButton);

    expect(container.firstChild).toHaveClass("bg--red");
  });
});
