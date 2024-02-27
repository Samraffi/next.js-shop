import updateStatusToBuyed from "@/services/ordersRequests/updateStatusToBuyed";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/navigation";

const AgreeModal = ({ orderedProducts, openAgreeModal, setOpenAgreeModal }) => {
  const { push } = useRouter();

  const handleClose = () => {
    let idArrays = orderedProducts.map(({id}) => id);
    updateStatusToBuyed(idArrays)
      .then((data) => setOpenAgreeModal(false))
      .then((data) => push('/'))
      .catch((err) => console.log(err));
  }

  return (
    <Dialog
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
      open={openAgreeModal}
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
        <DialogContentText id="alert-dialog-description">
          Your order has been successfully placed!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant="contained" onClick={() => handleClose()}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AgreeModal;