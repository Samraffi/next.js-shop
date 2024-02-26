import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "next/link";

export default function AgreeModal({ handelCloseAgree }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    handelCloseAgree();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Agree
      </Button>
      <Dialog
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleClose(event, reason);
          }
        }}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "30px",
            opacity: 0.9,
            backgroundColor: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontSize: "30px",
          }}
        >
          Thanks
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{}}>
            Your order has been successfully placed!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            <Button autoFocus variant="contained" onClick={() => 5}>
              OK
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  );
}
