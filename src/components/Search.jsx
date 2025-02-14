import React from "react";
import { useState } from "react";
import { Divider, Input, Button, Row } from "antd";

function Search({ search, setSearch }) {
  // const [search, setSearch] = useState("");

  // const handleSearch = (event) => {
  //   setSearch(event.target.value);
  //   return handleSearchResult(search);
  // };

  return (
    <>
      <form>
        <Input
          type="text"
          id="search"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
}

export default Search;
