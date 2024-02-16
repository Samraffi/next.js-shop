"use client";

import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import { selectBasketItems } from "@/store/basketItems/selectReducer";
import getUpdatedBasketItems from "@/helpers/getUpdatedBasketItems";
import getColumnsCount from "@/helpers/getColumnsCount";
import useBasketItems from "@/hooks/useBasketItems";
import useWidth from "@/hooks/useWidth";
import "./QuiltedImageList.css";

export default function QuiltedImageList() {
  const theme = createTheme();
  const dispatch = useDispatch();
  const { allBasketElems, selectBasketElems } = useBasketItems();
  const breakPoint = useWidth(theme);
  let gridTemplateColumns = getColumnsCount(breakPoint);

  
  const onClickAdd = (product) => {
    const updatedBasketItems = getUpdatedBasketItems(
      selectBasketElems,
      product
    );
    dispatch(selectBasketItems(updatedBasketItems));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <ImageList
          sx={{
            width: "70%",
            mt: "80px",
          }}
          variant="quilted"
          cols={gridTemplateColumns}
          gap={40}
        >
          {allBasketElems.map(({ title, images, id, price }) => (
            <ImageListItem className="image-box" key={uuidv4()}>
              <img src={images[0]} alt={images[0]} className="image1" loading="lazy" />
              <img src={images[2]} alt={images[2]} className="image2" loading="lazy" />
              <ImageListItemBar
                title={title}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </ThemeProvider>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];
