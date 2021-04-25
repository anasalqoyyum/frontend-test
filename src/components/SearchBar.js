import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../assets/css/SearchBar.css";

const SearchBar = () => {
  let history = useHistory();
  const [tags, setTags] = useState("");

  const handleChange = (e) => setTags(e.target.value);

  const handleSearch = (e) => {
    let searchInput = tags;
    let path = `/${searchInput}`;

    //Clear input field
    searchInput = "";

    //Redirect page by pushing url path into history
    history.push({
      pathname: path,
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="search-box d-flex justify-content-center">
          <form
            onSubmit={handleSearch}
            className="d-flex flex-row flex-wrap justify-content-center"
          >
            <div className="form-group col-md-10">
              <input
                id="tags"
                type="text"
                name="tags"
                placeholder="What are you looking for?"
                className="form-control form-control-underlined"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-10">
              <button
                type="submit"
                className="search btn btn-primary rounded-pill btn-block shadow-sm"
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
