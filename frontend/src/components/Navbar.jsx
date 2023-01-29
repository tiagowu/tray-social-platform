import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppBar, Avatar, IconButton, Toolbar, Typography, Stack } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

import SearchBar from "./SearchBar";
import { logout } from "../redux/actions/authActions";
import "./Navbar.css";

const Navbar = () => {
  const { auth } = useSelector((state) => state);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <StyledEngineProvider injectFirst>
      <AppBar className="app-bar">
        <Toolbar className="tool-bar">
          <Stack direction="row">
            <IconButton className="logo" disableRipple onClick={() => navigate("/")}>
              <RoomServiceOutlinedIcon className="button-icon" />
              <Typography className="logo-name" variant="h4">
                Tray
              </Typography>
            </IconButton>
            <SearchBar />
          </Stack>
          <Stack direction="row">
            <Link className="profile-link" to={`/user/${auth.user._id}`}>
              <Avatar />
              <Typography className="profile-name" variant="h7">
                {auth.user.fullName}
              </Typography>
            </Link>
            <IconButton className="button">
              <HomeIcon className="button-icon" />
            </IconButton>
            <IconButton className="button" onClick={handleLogout}>
              <LogoutIcon className="button-icon" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </StyledEngineProvider>
  );
};

export default Navbar;
