import { useEffect, useState } from "react";
import {createSearchParams ,useNavigate } from "react-router-dom";
// import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
// import 'react-circular-progressbar/dist/styles.css';


export function GetMovies() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const moveTo = (id)=>{
        navigate({
        pathname:'/details',
        search: createSearchParams({
            id:data.id
        }).toString()   
        
        });

    }       

    const  getMovies = ()=> {
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
        <div className="mainDiv" onClick={()=> moveTo()}>
                {data.map(item =>
                    <div className="postContainer" key={item.id}>
                        <img className="posterImage" src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                        {/* <div className="circularProgressBar">
                        <CircularProgressbar
                            value={item.vote_average}
                            text={item.vote_average}
                            styles={buildStyles({
                                strokeLinecap: 'butt',
                                textSize: '30px',
                                // pathTransitionDuration: 0.5,
                                textColor: '#f88',
                                backgroundColor: '#101010',
                                trailColor: '#339933',
                                
                            })}
                            />
                        </div> */}
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
