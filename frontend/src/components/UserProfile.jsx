import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserProfile } from "../redux/actions/profileActions";

import ProfileInfo from "./ProfileInfo";
import "./UserProfile.css";

const UserProfile = () => {
  const { id } = useParams();
  const { auth, profile } = useSelector((state) => state);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth && auth.user && auth.user._id === id) {
      setUserData([auth.user]);
    } else if (auth && auth.user) {
      dispatch(getUserProfile({ users: profile.users, id, auth }));
      const newData = profile.users.filter((user) => user._id === id);
      setUserData(newData);
    }
  }, [auth, id, dispatch, profile.users, auth.user]);

  return (
    <div>
      {userData.length > 0 &&
        userData.map((user) => (
          <div className="user-profile" key={user._id}>
            <ProfileInfo user={user} />
          </div>
        ))}
    </div>
  );
};

export default UserProfile;
