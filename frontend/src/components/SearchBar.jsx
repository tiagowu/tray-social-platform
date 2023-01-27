import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "./../utils/fetchData";
import UserCard from "./UserCard";
import "./SearchBar.css";

const SearchBar = () => {
  const { auth } = useSelector((state) => state);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  let dispatch = useDispatch();

  useEffect(() => {
    if (search && auth.token) {
      getData(`search?username=${search}`, auth.token)
        .then((res) => setUsers(res.data.users))
        .catch((err) => {
          dispatch({
            type: "ALERT",
            payload: {
              error: err.response.data.msg,
            },
          });
        });
    }
  }, [auth.token, dispatch, search]);

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input className={search && "filled"} value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className={search && "search-users"} onClick={() => setSearch("")} onMouseDown={(event) => event.preventDefault()}>
          {search && users.length < 1 ? (
            <p className="search-message">No results found</p>
          ) : (
            search && users.map((user) => <UserCard user={user} key={user._id} />)
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
