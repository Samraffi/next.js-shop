import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

const MySnackbarButton = ({ userId, addToCart, id }) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Button
      color={userId ? "primary" : "secondary"}
      fullWidth
      variant="contained"
      onClick={() =>
        userId
          ? addToCart(id)
          : enqueueSnackbar("Register to use the full version of the site")
      }
    >
      Add to cart
    </Button>
  );
};

const ButtonOrNotistack = ({ userId, addToCart, id }) => {
  return (
    <SnackbarProvider maxSnack={5}>
      <MySnackbarButton id={id} userId={userId} addToCart={addToCart} />
    </SnackbarProvider>
  );
};

export default ButtonOrNotistack;
