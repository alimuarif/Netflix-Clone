import axios from "axios";
import React from "react";
import "./Banner.css";
import { useState, useEffect } from "react";
function Banner(props) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios
      .get(props.fetchUrl)
      .then((res) => {
        // console.log(res.data.results);
        setmovies(
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ]
        );
       
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  function truncate(str,n) {
    return str?.length>n?str.substr(0,n-1)+"...":str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
       
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{movies?.title || movies?.name || movies?.original_path}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_discription">
            {truncate(movies?.overview,150)}</h1>

      </div>
            <div className="banner_fadebutton"></div>
    </header>
  );
}

export default Banner;
