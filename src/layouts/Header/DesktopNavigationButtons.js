"use client";

import Grid from "@mui/material/Grid";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import { PAGES } from "@/constants";

const DesktopNavigationButtons = ({ handleCloseNavMenu }) => {
  return (
    <Grid
      item
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {PAGES.map(({ link, content }) => (
        <Link
          style={{
            textDecoration: "none",
            color: "#1976d2",
            textTransform: "capitalize",
          }}
          href={`/${link}`}
          key={uuidv4()}
        >
          <Typography textAlign="center">{content}</Typography>
        </Link>
      ))}
    </Grid>
  );
};

export default DesktopNavigationButtons;
