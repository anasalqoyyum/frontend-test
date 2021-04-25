import React from "react";
import { Switch, Route } from "react-router-dom";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Title />
          <SearchBar />
          <ImageGallery />
        </Route>
        <Route path="/:tags">
          <Title />
          <SearchBar />
          <ImageGallery />
        </Route>
      </Switch>
    </>
  );
}

export default App;
