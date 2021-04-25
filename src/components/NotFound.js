import React from "react";

const NotFound = ({ query }) => {
  return (
    <div className="title">
      <h2>No Results Found for {query} </h2>
      <p>You search did not return any results. Please try again.</p>
    </div>
  );
};

export default NotFound;
