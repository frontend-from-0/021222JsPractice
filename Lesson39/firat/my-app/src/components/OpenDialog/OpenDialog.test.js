import { render, fireEvent, screen } from "@testing-library/react";
import OpenDialog from "./OpenDialog";

describe("OpenDialog component", function () {
  it("should render correctly", function () {
    const { getByTestId } = render(<OpenDialog />);
    const showDialogButton = getByTestId("show-dialog-button");
    expect(showDialogButton).toBeInTheDocument();
  });

  it("should display dialog content when the button is clicked", function () {
    const { getByTestId, getByText } = render(<OpenDialog />);

    const showDialogButton = getByTestId("show-dialog-button");
    fireEvent.click(showDialogButton);

    const dialogText = getByText("Dialog");
    expect(dialogText).toBeInTheDocument();

    const dialogContentText = screen.getByText(
      "Click outside of the dialog to close the Dialog box."
    );
    expect(dialogContentText).toBeInTheDocument();
  });

  it("should close the dialog when 'Close Dialog' button is clicked", function () {
    const { getByTestId, getByText, queryByText } = render(<OpenDialog />);
    const showDialogButton = getByTestId("show-dialog-button");

    fireEvent.click(showDialogButton);

    const closeButton = getByText("Close Dialog");
    fireEvent.click(closeButton);

    const dialogText = queryByText("Dialog");
    expect(dialogText).not.toBeInTheDocument();

    const dialogContentText = queryByText(
      "Click outside of the dialog to close the Dialog box."
    );
    expect(dialogContentText).not.toBeInTheDocument();
  });
});
