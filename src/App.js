import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Title />
      <SearchBar />
      <ImageGallery />
    </div>
  );
}

export default App;
