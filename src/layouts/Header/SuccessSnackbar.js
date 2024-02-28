import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SuccessSnackbar = ({ openSnackbar, setOpenSnackbar }) => {
  const handleClose = () => setOpenSnackbar(false);

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
    >
      <Alert
        sx={{width: 400, wordWrap: "break-word"}}
        onClose={handleClose}
        severity="success"
        variant="filled"
      >
        All good! You&#39;ve successfully signed out of the system.
      </Alert>
    </Snackbar>
  );
}

export default SuccessSnackbar;