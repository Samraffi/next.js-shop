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
import selectBasketItemsToDb from "@/services/old/selectBasketItems";

export default function AgreeModal({ handelCloseAgree, product }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    handelCloseAgree();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const buyItems = (product) => {
    // selectBasketItemsToDb({
    //   buy: false,
    //   productsId: product.id,
    //   quantity: product && product.quantity ? product.quantity: 1,
    //   usersTocken: uuidv4()
    // });
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
            <Button autoFocus variant="contained" onClick={() => buyItems(product)}>
              OK
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
