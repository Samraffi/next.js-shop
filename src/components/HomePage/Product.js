import Link from "next/link";
import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonOrNotistack from "./ButtonOrNotistack";
import { Item, theme } from "./Product.style";

import "./Product.css";

const Product = ({
  id,
  images,
  title,
  price,
  inBasket,
  addToCart,
  spacingValue,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
        <Item>
        <Grid className="box">
          <img className="image1" src={images && images[0]} />
          <img className="image2" src={images && images[2]} />
        </Grid>
        <Grid>
          <Grid sx={{ p: 1 }} container>
            <Grid sx={{ pb: spacingValue }} align="left" item xs={10}>
              <Typography variant="h6" noWrap>
                {title}
              </Typography>
            </Grid>
            <Grid sx={{ pb: spacingValue }} align="end" item xs={2}>
              <Typography variant="h6">${price}</Typography>
            </Grid>
            <Grid item xs={12}>
              {inBasket ? (
                <Link href="/basket">
                  <Button fullWidth variant="outlined">
                    Go to cart
                  </Button>
                </Link>
              ) : (
                <ButtonOrNotistack
                  id={id}
                  addToCart={addToCart}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
        </Item>
      </Grid>
    </ThemeProvider>
  );
};

export default Product;
