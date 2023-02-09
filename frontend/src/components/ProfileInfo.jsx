import React from "react";
import { Avatar, Button, StyledEngineProvider, Typography } from "@mui/material";

import "./ProfileInfo.css";

const ProfileInfo = ({ auth, id, user, profile }) => {
  return (
    <StyledEngineProvider injectFirst>
      <div className="profileinfo-container">
        <div className="profileinfo-top">
          <img src="https://wallpaperaccess.com/full/1493766.jpg" alt="" />
        </div>
        <div className="profileinfo-bottomcontainer">
          <Avatar className="profileinfo-avatar" src={user.avatar} />
          <div className="profileinfo-bottom">
            <div className="profileinfo-bottomtop">
              <div className="profileinfo-names">
                <Typography className="profileinfo-name" variant="h4">
                  {user.fullName}
                </Typography>
                <Typography variant="h6">@{user.username}</Typography>
              </div>

              <div className="profileinfo-button">
                {auth.user._id !== id ? (
                  <Button className="follow-button">Follow</Button>
                ) : (
                  <Button className="editprofile-button">Edit Profile</Button>
                )}
              </div>
            </div>
            <div className="profileinfo-stats">
              <Typography className="profileinfo-stat" variant="h6">
                {profile.posts.length} Posts
              </Typography>
              <Typography className="profileinfo-stat" variant="h6">
                {user.followings.length} Followings
              </Typography>
              <Typography className="profileinfo-stat" variant="h6">
                {user.friends.length} Folowers
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default ProfileInfo;
