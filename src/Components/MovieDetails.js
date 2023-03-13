import { NavBar } from "./NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const [details, setDetails] = useState({});
    const {movieId} = useParams();

    useEffect(() => {
        getDetails()
    })

    const getDetails = () => {


        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a971131533ecd1f4d0cb562ab92a94ef&language=en-US
        `)
            .then(response => response.json())
            .then(data => setDetails(data))
            .catch(error => console.log('error', error));

    }
   
    // console.log(details);

    return (
        <>
            <NavBar />
            <div className="mainMovieDetailsContainer">
                <img className="backgroundImg"></img>
                <div className="rowMovieDetails">
                    <img className="moviePosterImg" src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`} alt=''></img>
                    <div>
                        <h1 className="movieName">{details.original_title}</h1>
                        <div className="movieTypeAndReleaseDate">
                            <p></p>  
                        </div>
                        <div className="popularity">{details.vote_average}</div>
                        <p className="tagline">Tagline</p>
                        <div>
                            <h3 className="movieOverviewTitle">Overview</h3>
                            <div className="movieOverviewDescription">{details.overview}</div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default MovieDetails;