import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <Link className="user-card" to={`/user/${user._id}`} key={user._id}>
      <Avatar className="card-avatar" src={user.avatar} />
      <div className="card-info">
        <span className="card-username">{user.username}</span>
        <span className="card-fullname">{user.fullName}</span>
      </div>
    </Link>
  );
};

export default UserCard;
