import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../assets/css/SearchBar.css";

const SearchBar = (props) => {
  let history = useHistory();
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    let searchInput = query;
    let path = `/${searchInput}`;

    //Clear input field
    searchInput = "";

    //Redirect page by pushing url path into history
    history.push(path);
    history.push({
      pathname: path,
    });
  };

  return (
    <>
      {console.log("Nama:" + query)}
      <div className="container-fluid">
        <div className="search-box d-flex justify-content-center">
          <form
            onSubmit={handleSearch}
            className="d-flex flex-row flex-wrap justify-content-center"
          >
            <div className="form-group col-md-10">
              <input
                id="query"
                type="text"
                placeholder="What are you looking for?"
                className="form-control form-control-underlined"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-10">
              <button
                type="submit"
                className="btn btn-primary rounded-pill btn-block shadow-sm"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
