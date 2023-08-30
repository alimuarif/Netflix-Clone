// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from './axios';

// function Row({title,fetchUrl}) {
//     const [movies, setmovies] = useState([]);

//     // useEffect(() => {
//     //   async function fetchData() {
//     //      const req=await axios.post(fetchUrl);
//     //      setmovies(req.data.results);
//     //      return req;
//     //   }
//     //   fetchData();
//     // }, [fetchUrl])
//     useEffect(()=>{
//       axios.get(fetchUrl).then((res)=>{
//         console.log("my data",res)
//       })
//     },[])

//     return (
//       <div className='row'>
//         <h2>{title}</h2>
//     </div>
//   )
// }

// export default Row

import axios from "axios";
import "./Row.css";
import React, { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("")

  useEffect(() => {
    // console.log("my url",props.fetchUrl);

    axios
      .get(props.fetchUrl)
      .then((res) => {
        // console.log(res)
        // console.log("my data",res.data.results);
        setmovies(res.data.results);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const handleClick=(movie)=>{
    if (trailerUrl) {
      settrailerUrl('');
    }
    else{
      movieTrailer(movie?.name||"")
      .then((url)=>{
        //https://www.youtube.com/watch?v=2g811Eo7K8U
         const urlParams=new URLSearchParams(new URL(url).search);
        settrailerUrl(urlParams.get("v"));
      }).catch((err)=>{
        console.log("Error",err);
      })
    }
  }

  return (
    <div className="row">
      <h1>{props.title}</h1>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={props.isLargeRow ? "row_posterLarge" : "row_poster"}
            src={`${baseURL}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
     {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
};

export default Row;
