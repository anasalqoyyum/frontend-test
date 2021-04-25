import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound"

import "../assets/css/ImageGallery.css";

const ImageGallery = () => {
  let { tags } = useParams();
  if (tags === undefined) {
    tags = " ";
  }

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/feeds?tags=${tags}`).then((res) => {
      setData(res.data.items);
      console.log("ini query " + tags);
    });
    setLoading(false);
  }, []);

  let photosExist = data.length;

  return (
    <>
      <div className="container">
        <h2 className="result">
          {photosExist ? tags + " Pictures" : ""}
        </h2>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {loading && <div>Loading...</div>}
          {!loading && photosExist ? (
            data.map((x, index) => (
              <div className="d-flex flex-column media-gallery" key={index}>
                <a href={x.link} target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src={x.media.m}
                    alt={x.title}
                    className="img-gallery img-fluid"
                  />
                </a>
              </div>
            ))
          ) : (
            <NotFound query={tags} />
          )}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
