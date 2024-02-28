import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useAuthUserAndSignOut } from "@/hooks/useAuthUserAndSignOut";

const MySnackbarButton = ({ id, addToCart }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { authUser: { uid } } = useAuthUserAndSignOut();

  return (
    <Button
      sx={{
        color: "#1976d2",
        backgroundColor: "#f4fbf3",
        fontFamily: "'__Roboto_42e952', '__Roboto_Fallback_42e952'",
        fontWeight: 400,
        transition: "all 0.4s ease-in-out",
        '&:hover': {
          backgroundColor: "#1976d2",
          color: '#f4fbf3',
        },
      }}
      color="primary"
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
