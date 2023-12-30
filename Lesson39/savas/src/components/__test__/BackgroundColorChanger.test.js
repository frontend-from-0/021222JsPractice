import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BackgroundColorChanger from "../BackgroundColorChanger";

test("Background color changes on button click", () => {
  const { getByTestId, container } = render(<BackgroundColorChanger />);

  const greenButton = getByTestId("green");
  const redButton = getByTestId("red");

  const backgroundColorChangerDiv = container.firstChild;

  expect(backgroundColorChangerDiv).toHaveStyle({ backgroundColor: "" });

  fireEvent.click(greenButton);
  expect(backgroundColorChangerDiv).toHaveStyle({ backgroundColor: "green" });

  fireEvent.click(redButton);
  expect(backgroundColorChangerDiv).toHaveStyle({ backgroundColor: "red" });
});
