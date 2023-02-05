import React from "react";
import { Avatar, Button, StyledEngineProvider, Typography } from "@mui/material";

import "./ProfileInfo.css";

const ProfileInfo = ({ user }) => {
  return (
    <StyledEngineProvider injectFirst>
      <div className="profileinfo-container">
        <div className="profileinfo-top">
          <img style={{ width: "100%" }} src="https://wallpaperaccess.com/full/1493766.jpg" />
        </div>
        <div className="profileinfo-center">
          <Avatar className="profile-avatar" src={user.avatar} />
          <Button>Follow</Button>
        </div>
        <div className="profileinfo-bottom">
          <div className="profile-stats">
            <Typography variant="h6">0 Posts</Typography>
            <Typography variant="h6">0 Followings</Typography>
            <Typography variant="h6">0 Folowers</Typography>
          </div>
        </div>
        <div className="profileinfo-bottomcenter">
          <div className="profileinfo-username">Username</div>
          <div className="profileinfo-fullname">Fullname</div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default ProfileInfo;
