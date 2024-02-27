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
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending
          anonymous location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Button
          onClick={handleClose}
          sx={{
            backgroundColor: "#f5f5f5",
            color: "black",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          Disagree
        </Button>
        <Button variant="contained" onClick={handleOpen}>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalForDecisionMaking;
