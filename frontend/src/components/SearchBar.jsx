import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getData } from "./../utils/fetchData";
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
      <form className="search-form">
        <input className={search && "filled"} value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className={search && "search-users"}>
          {search && users.length < 1 ? (
            <p className="search-message">No results found</p>
          ) : (
            search &&
            users.map((user) => (
              <Link className="search-link" to={`profile/${user._id}`} key={user._id}>
                {user._id}
              </Link>
            ))
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
