"use client";

import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MobileNavigationButtons from "./MobileNavigationButtons";
import DesktopNavigationButtons from "./DesktopNavigationButtons";
import UserMenu from "./UserMenu";
import "./Header.css";
import HideOnScroll from "./HideOnScroll";

function Header() {
  const [auth, setAuth] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    if(localStorage.getItem("tocken") !== 'undefined') {
      setAuth(!!(localStorage.getItem("tocken")))
    }
  }, [])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAuth(false);
    setAnchorElUser(null);
  };

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#9a999933", boxShadow: "none" }}
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
                <img className="logo" src="/image/shop4.png" alt="Logo" />
              </Grid>

              <Grid
                item
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              ></Grid>
              <DesktopNavigationButtons handleCloseNavMenu={handleCloseNavMenu} />

              <UserMenu
                auth={auth}
                anchorElUser={anchorElUser}
                handleOpenUserMenu={handleOpenUserMenu}
                handleCloseUserMenu={handleCloseUserMenu}
              />
              <MobileNavigationButtons
                anchorElNav={anchorElNav}
                handleCloseNavMenu={handleCloseNavMenu}
              />
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
