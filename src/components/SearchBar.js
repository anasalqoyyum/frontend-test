import React from "react";
import "../assets/css/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container-fluid">
      <div className="search-box d-flex justify-content-center">
        <div className="form-group col-md-10">
          <input
            id="exampleFormControlInput5"
            type="text"
            placeholder="What're you searching for?"
            className="form-control form-control-underlined"
          />
        </div>
        <div className="form-group col-md-2">
          <button
            type="submit"
            className="btn btn-primary rounded-pill btn-block shadow-sm"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
