import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserProfile } from "../redux/actions/profileActions";

const UserProfile = () => {
  const { id } = useParams();
  const { auth, profile } = useSelector((state) => state);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth && auth.user && auth.user._id === id) {
      setUserData([auth.user]);
    } else {
      dispatch(getUserProfile({ users: profile.users, id, auth }));
    }
  }, [auth.user, id, auth]);

  return (
    <div>
      {userData.length > 0 && userData.map((user) => <div key={user._id}>{user.fullName}</div>)}
      <h1>Info - {id}</h1>
    </div>
  );
};

export default UserProfile;
