import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  queryAllByTestId,
} from "@testing-library/react";
import DialogTest from "../DialogTest";

test("When a button is clicked, a dialog should show up on a screen", () => {
  const { getByTestId, queryByTestId } = render(<DialogTest />);

  expect(queryByTestId("testdialog")).toBeNull();

  const DialogButton = getByTestId("opendialog");
  fireEvent.click(DialogButton);

  expect(getByTestId("testdialog")).toBeInTheDocument();

  fireEvent.click(document.body);

  waitFor(() => {
    expect(queryAllByTestId("testdialog")).toBeNull();
  });
});
