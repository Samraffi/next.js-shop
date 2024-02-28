import { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalForDecisionMaking = ({ openModalForDecision, setOpenModalForDecision, setOpenAgreeModal }) => {
  const handleClose = () => {
    setOpenModalForDecision(false);
  };

  const handleOpen = () => {
    handleClose();
    setOpenAgreeModal(true);
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "30px",
          opacity: 0.9,
          backgroundColor: "#f5f5f5",
        },
      }}
      open={openModalForDecision}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle>
        Purchase Process and Order Confirmation
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 1 }}>
          You&#39;re almost done! Before proceeding, please make sure you&#39;ve checked all the items in your cart and are satisfied with your selection.
        </DialogContentText>
        <DialogContentText sx={{ mb: 1 }}>
          If you&#39;re ready to continue, click the &#34;Complete Order&#34; button. You will then be redirected to the payment page where you can enter your payment and delivery details.
        </DialogContentText>
        <DialogContentText sx={{ mb: 1 }}>
          Please remember that by confirming your order, you agree to our terms of service and privacy policy.
        </DialogContentText>
        <DialogContentText>
          Thank you for shopping with us!
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: "flex" }}>
        <Button variant="secondary" onClick={handleClose}>
          Disagree
        </Button>
        <Button variant="contained" onClick={handleOpen}>
          Complete Order
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalForDecisionMaking;
