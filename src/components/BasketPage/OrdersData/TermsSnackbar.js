import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const TermsSnackbar = ({ openSnackbar, setOpenSnackbar }) => {
  const handleClose = () => setOpenSnackbar(false);

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
    >
      <Alert
        sx={{width: 400, wordWrap: "break-word"}}
        onClose={handleClose}
        severity="info"
        variant="filled"
      >
        You must read and agree to the trading platform&#39;s terms of use and returns
      </Alert>
    </Snackbar>
  );
}

export default TermsSnackbar;