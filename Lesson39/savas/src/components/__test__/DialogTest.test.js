import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DialogTest from "../DialogTest";

test("When a button is clicked, a dialog should show up on a screen", () => {
  const { getByText, queryByText } = render(<DialogTest />);

  expect(queryByText("Test Dialog")).toBeNull();

  const DialogButton = getByText("Open Dialog");
  fireEvent.click(DialogButton);

  expect(getByText("Test Dialog")).toBeInTheDocument();
});
