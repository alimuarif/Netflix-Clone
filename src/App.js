
import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import Row from './Row';
import requests from './request';
// import Test from './Test';
// import Row from './Row';
// import request from './request';

let fetchHorrorMovies=requests.fetchHorrorMovies;
let fetchNetflixOriginals=requests.fetchNetflixOriginals;

function App() {
  return (
    <div className="App" style={{
      backgroundColor:"#111",
      color:"white"
    }}>
    <Navbar/>
    <Banner fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_networks=213"}/>

    <Row title="Netflix Originals" fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_networks=213"} isLargeRow={true}/>
    <Row title="Top Rated" fetchUrl={"https://api.themoviedb.org/3/trending/all/day?api_key=a5f73350d9196ecd71486f064b5bbe6b"}/>
    <Row title="TV" fetchUrl={"https://api.themoviedb.org/3/trending/tv/day?api_key=a5f73350d9196ecd71486f064b5bbe6b"}/>
    <Row title="Now Playing" fetchUrl={"https://api.themoviedb.org/3/movie/now_playing?api_key=a5f73350d9196ecd71486f064b5bbe6b"}/>
    <Row title="Upcoming" fetchUrl={"https://api.themoviedb.org/3/movie/upcoming?api_key=a5f73350d9196ecd71486f064b5bbe6b"}/>

    {/* <Row title="Commedy" fetchUrl={"https://api.themoviedb.org/3/discover/movies?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_genres=35"}/>
    <Row title="Documentaries" fetchUrl={"https://api.themoviedb.org/3/discover/movies?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_genres=99"}/>
    <Row title="Romance" fetchUrl={"https://api.themoviedb.org/3/discover/movies?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_genres=10749"}/> */}
    
    {/* <Row title="Top Rated" fetchUrl={fetchHorrorMovies}/>
    <Row title="Trending Now" fetchUrl={"https://api.themoviedb.org/3"}/>
    <Row title="Horror" fetchUrl={fetchHorrorMovies}/>
    <Row title="Romance" fetchUrl={fetchHorrorMovies}/>
    <Row title="Documentaies" fetchUrl={fetchHorrorMovies}/>
    <Row title="Commedy" fetchUrl={fetchHorrorMovies}/> */}
     
     {/* <Row title="Netflix Originals" fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_networks=213"}/>
     <Row title="Trending Now" fetchUrl={request.fetchHorrorMovies}/> */}
    </div>
  );
}

export default App;
