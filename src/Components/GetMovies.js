import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";
// import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
// import 'react-circular-progressbar/dist/styles.css';


export function GetMovies() {
    const [data, setData] = useState([]);

    // const moveTo = () => {
    //     navigate({
    //         pathname: '/details/:movieId',

    //     });

    // }

    const getMovies = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.themoviedb.org/3/movie/popular?api_key=a971131533ecd1f4d0cb562ab92a94ef", requestOptions)
            .then(response => response.json())
            .then(data => setData(data.results))
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        getMovies();

    }, [])
    console.log(data)
    return (
        <>
            <div className="mainDiv">
                {data.map(item =>
                    <div className="postContainer" key={item.id}>
                        <Link to={`/details/${item.id}`}> 
                        <img className="posterImage" src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                        </Link>

                        <div className="movieDescreption">
                            <h4 className="movieTitle">{item.title}</h4>
                            <p className="pubDate">{item.release_date}</p>

                        </div>
                    </div>

                )}
            </div>
        </>

    );
}
