import React from "react";
import { Avatar, Button, StyledEngineProvider, Typography } from "@mui/material";

import "./ProfileInfo.css";

const ProfileInfo = ({ user }) => {
  return (
    <StyledEngineProvider injectFirst>
      <div className="profile-info">
        <div className="profile-info-left">
          <Avatar className="profile-avatar" src={user.avatar} />
        </div>
        <div className="profile-info-right">
          <div className="profile-info-top">
            <Typography variant="h6">{user.username}</Typography>
            <Button>Follow</Button>
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default ProfileInfo;
