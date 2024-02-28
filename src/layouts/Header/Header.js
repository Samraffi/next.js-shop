"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MobileNavigationButtons from "./MobileNavigationButtons";
import DesktopNavigationButtons from "./DesktopNavigationButtons";
import HideOnScroll from "./HideOnScroll";
import UserMenu from "./UserMenu";

import "./Header.css";
import Link from "next/link";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#f4fbf3", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Grid
              container
              spacing={2}
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              >
                <Link href="/">
                  <img className="logo" src="/image/logo.png" alt="Logo" />
                </Link>
              </Grid>

              <Grid
                item
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              ></Grid>
              <DesktopNavigationButtons />

              <UserMenu
                anchorElUser={anchorElUser}
                setAnchorElUser={setAnchorElUser}
              />
              <MobileNavigationButtons
                anchorElNav={anchorElNav}
                setAnchorElNav={setAnchorElNav}
              />
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
