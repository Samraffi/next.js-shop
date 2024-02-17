import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { selectBasketItems } from "@/store/basketItems/selectReducer";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function AlertDialog({ handelCloseAgree }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    handelCloseAgree();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const buyItems = () => {
    dispatch(selectBasketItems([]));
    handleClose();
  };

  return (
    <React.Fragment>
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
        // onClose={handleClose}
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
            <Button autoFocus variant="contained" onClick={() => buyItems()}>
              OK
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
