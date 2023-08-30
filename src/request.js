const API_KEY="a5f73350d9196ecd71486f064b5bbe6b";

const requests={
    // fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    // fetchHorrorMovies:`/discover/movies?api_key=${API_KEY}&with_genres=27`,
    // fetchNetflixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    // fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movies?api_key=${API_KEY}&with_genres=27`,
    // fetchActionMovies:`/discover/movies?api_key=${API_KEY}&with_genres=28`,
    // fetchCommedyMovies:`/discover/movies?api_key=${API_KEY}&with_genres=35`,
    // fetchDocumentaryMovies:`/discover/movies?api_key=${API_KEY}&with_genres=99`,
    // fetchRomanceMovies:`/discover/movies?api_key=${API_KEY}&with_genres=10749`,

    fetchNetflixOriginals:"https://api.themoviedb.org/3/discover/tv?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_networks=213",
    fetchHorrorMovies:"https://api.themoviedb.org/3/discover/movies?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_genres=27", //not working 404 error
    fetchActionMovies:`/discover/movies?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_genres=28`,
    fetchCommedyMovies:`/discover/movies?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_genres=35`,
    fetchDocumentaryMovies:`/discover/movies?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_genres=99`,
    fetchRomanceMovies:`/discover/movies?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_genres=10749`,

    // fetchTv:'discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
}
export default requests