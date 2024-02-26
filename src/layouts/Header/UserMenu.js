"use client";

import Link from "next/link";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { AVATAR, SETTINGS } from "@/constants";
import { blueGrey } from "@mui/material/colors";
import { useAuthUserAndSignOut } from "@/hooks/useAuthUserAndSignOut";

const UserMenu = ({
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu,
}) => {
  const { authUser: { uid } } = useAuthUserAndSignOut();

  return (
    <Grid item>
      {uid && (
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: blueGrey[500] }}>{AVATAR[0]}</Avatar>
        </IconButton>
      )}
      {!uid && (
        <Tooltip title="Login to...">
          <Link href="/login">
            <IconButton>
              <LoginIcon color="primary" />
            </IconButton>
          </Link>
        </Tooltip>
      )}
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {SETTINGS.map((setting) => (
          <MenuItem sx={{ m: 0 }} key={setting} onClick={handleCloseUserMenu}>
            <LogoutIcon />
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};

export default UserMenu;
