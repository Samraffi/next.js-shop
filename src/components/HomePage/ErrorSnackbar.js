import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ErrorSnackbar = ({ openSnackbar, handleCloseSnackbar }) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
    >
      <Alert
        sx={{width: 400, wordWrap: "break-word"}}
        onClose={handleCloseSnackbar}
        severity="error"
        variant="filled"
      >
        There is a problem with the program. If possible, contact the
        technical department. Call +374(**) ** ** **
      </Alert>
    </Snackbar>
  );
}

export default ErrorSnackbar;