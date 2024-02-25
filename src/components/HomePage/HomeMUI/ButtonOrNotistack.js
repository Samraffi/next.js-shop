import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useAuthUserAndSignOut } from "@/hooks/useAuthUserAndSignOut";

const MySnackbarButton = ({ id, addToCart }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { authUser } = useAuthUserAndSignOut();

  return (
    <Button
      color={authUser?.uid ? "primary" : "secondary"}
      fullWidth
      variant="contained"
      onClick={() =>
        authUser?.uid
          ? addToCart(id)
          : enqueueSnackbar("Register to use the full version of the site")
      }
    >
      Add to cart
    </Button>
  );
};

const ButtonOrNotistack = ({ id, addToCart }) => {
  return (
    <SnackbarProvider maxSnack={5}>
      <MySnackbarButton id={id} addToCart={addToCart} />
    </SnackbarProvider>
  );
};

export default ButtonOrNotistack;
