import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export default function DialogTest() {
  const [openDialog, handleDisplay] = React.useState(false);

  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };
  const dialogStyle = {
    padding: "20px",
  };
  const buttonStyle = {
    width: "10rem",
    fontsize: "1.5rem",
    height: "2rem",
    padding: "5px",
    borderRadius: "10px",
    backgroundColor: "green",
    color: "White",
    border: "2px solid yellow",
  };
  return (
    <>
      <h1>When you click the button, a dialog show up on the screen.</h1>
      <button style={buttonStyle} onClick={openDialogBox}>
        Open Dialog
      </button>
      <Dialog onClose={handleClose} open={openDialog}>
        <DialogTitle> Test Dialog </DialogTitle>
        <h3 style={dialogStyle}>Click outside to close the Dialog box.</h3>
      </Dialog>
    </>
  );
}
