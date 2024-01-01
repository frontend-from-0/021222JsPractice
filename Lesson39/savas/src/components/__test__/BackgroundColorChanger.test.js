import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackgroundColorChanger from "../BackgroundColorChanger";

test("Background color changes on button click", async () => {
  render(<BackgroundColorChanger />);

  const greenButton = screen.getByTestId("green");
  const redButton = screen.getByTestId("red");

  const backgroundColorChangerDiv = screen.getByTestId("background");

  expect(backgroundColorChangerDiv).toHaveStyle({ backgroundColor: "" });

  await userEvent.click(greenButton);
  expect(backgroundColorChangerDiv).toHaveStyle({ backgroundColor: "green" });

  await userEvent.click(redButton);
  expect(backgroundColorChangerDiv).toHaveStyle({ backgroundColor: "red" });
});
