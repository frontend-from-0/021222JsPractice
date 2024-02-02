import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OpenDialog from "./OpenDialog";

test("OpenDialog component test", () => {
  const { getByTestId, getByText, queryByText } = render(<OpenDialog />);
  const showDialogButton = getByTestId("show-dialog-button");

  expect(showDialogButton).toBeInTheDocument();

  fireEvent.click(showDialogButton);

  const dialogText = getByText("Dialog");
  expect(dialogText).toBeInTheDocument();

  const dialogContentText = screen.getByText(
    "Click outside of the dialog to close the Dialog box."
  );
  expect(dialogContentText).toBeInTheDocument();

  const closeButton = getByText("Close Dialog");
  fireEvent.click(closeButton);

  expect(dialogText).not.toBeInTheDocument();
  expect(
    queryByText("Click outside of the dialog to close the Dialog box.")
  ).not.toBeInTheDocument();
});
