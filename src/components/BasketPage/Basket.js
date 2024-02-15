 "use client";
 import { Box, Button, Checkbox, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import { useSelector} from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectBasketItems } from "@/store/basketItems/selectReducer";
import getUpdatedBasketItems from "@/helpers/getUpdatedBasketItems";
import { useDispatch } from 'react-redux';
import useBasketItems from '@/hooks/useBasketItems';
import deleteBasketItem from "../../helpers/deleteBasketItem"
import minusUptadeBasketItem from "../../helpers/minusUptadeBasketItem"


const StyledBasket = styled(Container)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
}));

const StyledBasketProductItem = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: theme.spacing(2),
  alignItems: 'center',
}));

const StyledBasketTotal = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: `2px solid ${theme.palette.primary.main}`,
}));

const StyledProductName = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontFamily: "'Quicksand', sans-serif",
  marginBottom: theme.spacing(1),
}));

const StyledQuantityContainer = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

const StyledQuantityButtons = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1rem',
  marginRight: theme.spacing(1),
  borderColor: theme.palette.grey[500],
  color: theme.palette.grey[500],
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
}));

const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  '&:hover': {
    color: theme.palette.error.light,
  },
  cursor: 'pointer',
}));

const StyledBasketBuyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  marginTop: theme.spacing(2),
}));




function Basket() {

  const selectBasketItemsAll = useSelector((state) => state.selectBasketItems.selectBasketItems);
  
  
  const dispatch = useDispatch();
  const { selectBasketElems} = useBasketItems();

  const onClickAdd = (product) => {
    const updatedBasketItems = getUpdatedBasketItems(selectBasketElems, product);
    dispatch(selectBasketItems(updatedBasketItems));
  };

const deleteItem =(product) => {
  const updatedBasketItems = deleteBasketItem(selectBasketElems, product);
  dispatch(selectBasketItems(updatedBasketItems));
};

const minusItem =(product) => {
  const updatedBasketItems = minusUptadeBasketItem(selectBasketElems, product);
  dispatch(selectBasketItems(updatedBasketItems));
};



  return (
    <StyledBasket>
      <Typography variant="h4" align="center" gutterBottom>
        Basket
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {selectBasketItemsAll.map((item, index) => (
            <StyledBasketProductItem key={index} container spacing={2}>
              <Grid item xs={3}>
                <img src={item.images[0]} alt="Image" width="100%" style={{ borderRadius: '8px' }} />
              </Grid>
              <Grid item xs={6}>
                <StyledProductName variant="h6">{item.title}</StyledProductName>
                <Typography>${item.price}</Typography>
              </Grid>
              <StyledQuantityContainer item xs={3} container>
                <StyledQuantityButtons variant="outlined" color="primary" onClick={() => {minusItem(item)}}>-</StyledQuantityButtons>
                <Typography variant="body1" fontWeight="bold" fontSize="1.2rem" marginRight="8px">{item.quantity}</Typography>
                <StyledQuantityButtons variant="outlined" color="primary"  onClick={() => {
                    onClickAdd(item);
                  }}>+</StyledQuantityButtons>
                <StyledDeleteIcon onClick={() => {deleteItem(item)}}/>
              </StyledQuantityContainer>
            </StyledBasketProductItem>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" align="center" gutterBottom>
            Product {selectBasketItemsAll.reduce((acc, item) => acc + item.quantity, 0)} pieces
          </Typography>
          <StyledBasketTotal>
            <Typography variant="h6">Total</Typography>
            <Typography>{selectBasketItemsAll.reduce((acc, item) => acc + item.quantity * item.price, 0)}  $</Typography>
          </StyledBasketTotal>
          <StyledBasketBuyButton variant="contained" fullWidth>
            Buy Now
          </StyledBasketBuyButton>
          <Box mt={2} textAlign="center">
            <Checkbox name="convention" />
            <Typography>I agree with the rules for using the trading platform and returning</Typography>
          </Box>
        </Grid>
      </Grid>
    </StyledBasket>
  );
}

export default Basket;


