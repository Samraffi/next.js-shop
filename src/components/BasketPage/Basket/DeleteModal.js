import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "next/link";
import { StyledAgryButtons, StyledDeleteButton } from "./Basket.style";

const DeleteModal = ({ open, cancelDeletion, removeOrder }) => {
  return (
    <Dialog

      sx={{
        "& .MuiDialog-paper": {
          width: "50%",
          borderRadius: "10px",
          backgroundColor: "#f5f5f5",
        },
      }}
      open={open}
      onClose={() => cancelDeletion()}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          color: "red",
          fontSize: "30px",
        }}
      >
        Warning
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You are trying to delete your order. Are you sure?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <DialogActions>
          <StyledAgryButtons
            item
            xs={3}
            container
            onClick={() => cancelDeletion()}
          >
            Disagree
          </StyledAgryButtons>
          <StyledDeleteButton
            item
            xs={3}
            container
            onClick={removeOrder}
          >
            Agree
          </StyledDeleteButton>
        </DialogActions>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
