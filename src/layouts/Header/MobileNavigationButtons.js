"use client";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import { PAGES } from "@/constants";

const MobileNavigationButtons = ({ anchorElNav, handleCloseNavMenu }) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      {PAGES.map(({ link, content }) => (
        <MenuItem key={uuidv4()} onClick={handleCloseNavMenu}>
          <Link
            style={{ textDecoration: "none", color: "#1976d2" }}
            href={`/${link}`}
          >
            <Typography textAlign="center">{content}</Typography>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MobileNavigationButtons;
