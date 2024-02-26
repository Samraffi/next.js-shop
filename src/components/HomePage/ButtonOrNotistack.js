import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useAuthUserAndSignOut } from "@/hooks/useAuthUserAndSignOut";

const MySnackbarButton = ({ id, addToCart }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { authUser: { uid } } = useAuthUserAndSignOut();

  return (
    <Button
      color={uid ? "primary" : "secondary"}
      fullWidth
      variant="contained"
      onClick={() =>
        uid
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
