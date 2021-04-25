import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/ImageGallery.css";

const ImageGallery = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect((query) => {
    setLoading(true);
    query = " "
    axios.get(`http://localhost:8080/feeds?tags=${query}`).then((res) => {
      setData(res.data.items);
      // console.log("ini query " + query);
    });
    setLoading(false);
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {loading && <div>Loading...</div>}
          {!loading &&
            data.map((x, index) => (
              <div className="d-flex flex-column media-gallery" key={index}>
                <a href={x.link}>
                  {" "}
                  <img
                    src={x.media.m}
                    alt={x.title}
                    className="img-gallery img-fluid"
                  />
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
