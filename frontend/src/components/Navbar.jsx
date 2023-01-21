import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppBar, IconButton, Toolbar, Typography, Stack } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";

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
      <AppBar className="appBar">
        <Toolbar className="toolBar">
          <Stack direction="row">
            <IconButton className="logo" disableRipple onClick={() => navigate("/")}>
              <RoomServiceOutlinedIcon className="buttonIcon" />
              <Typography className="logoName" variant="h4">
                Tray
              </Typography>
            </IconButton>
            <SearchBar />
          </Stack>
          <Stack direction="row">
            <Link className="profileLink" to={`/profile/${auth.user._id}`}>
              <Avatar />
              <Typography className="profileName" variant="h7">
                {auth.user.fullname}
              </Typography>
            </Link>
            <IconButton className="button">
              <HomeIcon className="buttonIcon" />
            </IconButton>
            <IconButton className="button" onClick={handleLogout}>
              <LogoutIcon className="buttonIcon" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </StyledEngineProvider>
  );
};

export default Navbar;
