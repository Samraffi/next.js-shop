import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledBasket = styled(Container)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(10),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
}));

export const StyledBasketProductItem = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: theme.spacing(2),
  alignItems: "top",
}));

export const StyledBasketTotal = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: `2px solid ${theme.palette.primary.main}`,
}));

export const StyledProductName = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontFamily: "'Quicksand', sans-serif",
  marginBottom: theme.spacing(1),
}));

export const StyledQuantityContainer = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "flex-end",
}));

export const StyledQuantityButtons = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  fontWeight: "bold",
  fontSize: "1rem",
  marginRight: theme.spacing(1),
  borderColor: theme.palette.grey[500],
  color: theme.palette.grey[500],
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));

export const StyledAgryButtons = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  fontWeight: "bold",
  fontSize: "1rem",
  marginRight: theme.spacing(1),
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
}));

export const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  "&:hover": {
    color: theme.palette.error.light,
  },
  cursor: "pointer",
}));

export const StyledDeleteContainer = styled(Grid)(({ theme }) => ({
  alignItems: "top",
  justifyContent: "flex-end",
  paddingRight: theme.spacing(2),
}));

export const StyledDeleteButton = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: "#d32f2f40",
  color: theme.palette.error.main,
  transitionDelay: "0.5s",
  "&:hover": {
    color: theme.palette.error.main,
    backgroundColor: "#d32f2f40",
  },
}));

export const StyledBasketBuyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  marginTop: theme.spacing(2),
}));
