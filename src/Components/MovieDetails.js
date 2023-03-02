import { NavBar } from "./NavBar";
import { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";

const MovieDetails = () => {
    const [details, setDetails] = useState([]);
    const [searchParam] = useSearchParams();
    const idd = searchParam.get('id');
    const id = 315162;

    const getDetails = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}}/credits?api_key=a971131533ecd1f4d0cb562ab92a94ef`, requestOptions)
            .then(response => response.json())
            .then(details => setDetails(details.results))
            .catch(error => console.log('error', error));

    }
    useEffect(() => {
        getDetails()
    }, [])
    console.log(details);

    return (
        <>
            <NavBar />
            <div className="mainMovieDetailsContainer">
                <img className="backgroundImg"></img>
                <div className="rowMovieDetails">
                    <img className="moviePosterImg"></img>
                    <div>
                        <h1 className="movieName">Home</h1>
                        <div className="movieTypeAndReleaseDate">
                            <p>{id} . {id} . {id} . {id}</p>  
                        </div>
                        <div className="popularity">17.3</div>
                        <p className="tagline">Tagline</p>
                        <div>
                            <h3 className="movieOverviewTitle">Overview</h3>
                            <p className="movieOverviewDescription">This is an overview and something about the movie.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default MovieDetails;