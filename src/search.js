import { useState, useContext } from "react";
import { UsersData } from "./App";

function Search() {
  const listUser = useContext(UsersData);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchItem = (e) => {
    let value = e.toLowerCase();
    let result = [];
    result = listUser[0].filter((data) => {
      return data.name.search(value) != -1;
    });

    listUser[1](result);
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={searchInput}
        onChange={(e) => handleSearchItem(e.target.value)}
        placeholder="Search item name"
      />
    </div>
  );
}

export default Search;
