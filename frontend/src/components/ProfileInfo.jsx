import React from "react";
import { Avatar, Button, StyledEngineProvider, Typography } from "@mui/material";

import "./ProfileInfo.css";

const ProfileInfo = ({ user }) => {
  return (
    <StyledEngineProvider injectFirst>
      <div className="profileinfo-container">
        <div className="profileinfo-top">
          <img src="https://wallpaperaccess.com/full/1493766.jpg" />
        </div>
        <div className="profileinfo-bottomcontainer">
          <Avatar className="profileinfo-avatar" src={user.avatar} />
          <div className="profileinfo-bottom">
            <div className="profileinfo-bottomtop">
              <div className="profileinfo-names">
                <Typography variant="h5">Fullnameeeeeeeeeeeee</Typography>
                <Typography variant="h6">Usernameeeeeeeeeeeeeeee</Typography>
              </div>
              <div className="profileinfo-follow">
                <Button className="follow-button">Follow</Button>
              </div>
            </div>
            <div className="profileinfo-stats">
              <Typography variant="h6">0 Posts</Typography>
              <Typography variant="h6">0 Followings</Typography>
              <Typography variant="h6">0 Folowers</Typography>
            </div>
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default ProfileInfo;
