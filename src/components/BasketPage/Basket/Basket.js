"use client";

import { Grid, Tooltip, Typography } from "@mui/material";
import {
  StyledBasketProductItem,
  StyledQuantityContainer,
  StyledProductName,
  StyledQuantityButtons,
  StyledDeleteContainer,
  StyledDeleteButton,
} from "./Basket.style";
import DeleteIcon from "@mui/icons-material/Delete";

function Basket({ disabled, changeCountOrderedProduct, warnAboutDeletion, id, count, images, title, price }) {
  return (
    <StyledBasketProductItem container spacing={2}>
      <Grid item xs={3} md={3}>
        <img
          src={images[0]}
          alt="Image"
          width="100%"
          style={{ borderRadius: "8px" }}
        />
      </Grid>
      <Grid sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} item xs={5} md={4}>
        <Tooltip title={title}>
          <StyledProductName variant="h6" noWrap>{title}</StyledProductName>
        </Tooltip>
        <Typography>${price}</Typography>
      </Grid>
      <StyledQuantityContainer item xs={4} md={5} container>
        <StyledQuantityButtons
          variant="outlined"
          color="primary"
          disabled={disabled || count === 1}
          onClick={() => {
            (disabled || count === 1) ? false : changeCountOrderedProduct(id, --count);
          }}
        >
          -
        </StyledQuantityButtons>
        <Typography
          variant="body1"
          fontWeight="bold"
          fontSize="1.2rem"
          marginRight="8px"
        >
          {count}
        </Typography>
        <StyledQuantityButtons
          variant="outlined"
          color="primary"
          onClick={() => {
            disabled ? false : changeCountOrderedProduct(id, ++count);
          }}
        >
          +
        </StyledQuantityButtons>
        <StyledDeleteContainer item xs={3} container>
          <StyledDeleteButton
            onClick={() => {
              warnAboutDeletion(id);
            }}
          >
            <DeleteIcon />
          </StyledDeleteButton>
        </StyledDeleteContainer>
      </StyledQuantityContainer>
    </StyledBasketProductItem>
  );
}

export default Basket;
