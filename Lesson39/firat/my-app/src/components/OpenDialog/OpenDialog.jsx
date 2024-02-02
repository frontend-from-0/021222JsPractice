import { useState } from "react";
import React from "react";

const OpenDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  const openDialogBox = () => {
    setShowDialog(true);
  };
  const handleClose = () => {
    setShowDialog(false);
  };
  return (
    <div>
      <button
        style={{
          width: "10rem",
          height: "2rem",
          padding: "5px",
          borderRadius: "10px",
          backgroundColor: "green",
          color: "White",
          border: "2px solid lightgrey",
        }}
        onClick={openDialogBox}
        data-testid="show-dialog-button"
      >
        Show Dialog
      </button>
      {showDialog && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
            data-testid="test-dialog-text"
          >
            Dialog
          </div>
          <h3 style={{ margin: "10px" }}>
            Click outside of the dialog to close the Dialog box.
          </h3>
          <button onClick={handleClose} style={{ marginTop: "10px" }}>
            Close Dialog
          </button>
        </div>
      )}
    </div>
  );
};
export default OpenDialog;
