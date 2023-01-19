import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { AppBar, IconButton, Toolbar, Typography, Stack } from "@mui/material";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const { auth } = useSelector((state) => state);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const customizeToolbar = {
    minHeight: 50,
  };

  return (
    <AppBar sx={{ background: "#6f81a5" }}>
      <Toolbar style={customizeToolbar} sx={{ justifyContent: "space-between", minHeight: 50 }}>
        <IconButton
          disableRipple
          onClick={() => navigate("/")}
          sx={{ color: "white", borderRadius: 0, "&:hover": { backgroundColor: "transparent" } }}
        >
          <RoomServiceOutlinedIcon sx={{ fontSize: 40, color: "white" }} />
          <Typography variant="h4" sx={{ ml: 1 }}>
            Tray
          </Typography>
        </IconButton>

        <Stack direction="row" component="div" spacing={0}>
          <Avatar sx={{ alignSelf: "center" }} />
          <Typography variant="h7" alignSelf="center" margin="0px 12px 0px 8px">
            {auth.user.fullname}
          </Typography>
          <IconButton sx={{ bgcolor: "#5b6d8f", "&:hover": { bgcolor: "#4b5c7d" } }}>
            <HomeIcon sx={{ fontSize: 30, color: "white" }} />
          </IconButton>
          <IconButton sx={{ bgcolor: "#5b6d8f", "&:hover": { bgcolor: "#4b5c7d" } }} onClick={handleLogout}>
            <LogoutIcon sx={{ fontSize: 30, color: "white" }} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
