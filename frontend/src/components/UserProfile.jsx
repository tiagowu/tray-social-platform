import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const { auth } = useSelector((state) => state);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.user && auth.user._id === id) {
      setUserData([auth.user]);
    }
  }, [auth.user, id]);

  console.log(userData);
  return (
    <div>
      {userData.length > 0 && userData.map((user) => <div>{user.fullName}</div>)}
      <h1>Info - {id}</h1>
    </div>
  );
};

export default UserProfile;
