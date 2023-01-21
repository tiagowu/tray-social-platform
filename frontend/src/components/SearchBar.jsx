import React, { useState } from "react";

import "./SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <form className="search-form">
      <div className="search-container">
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <label className={search && "filled"}>Search</label>
      </div>
    </form>
  );
};

export default SearchBar;
