import React from 'react';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';



export function SearchField (){
  const navigate = useNavigate();
    const [searchInput, setSearch] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`You search about: ${searchInput}`);
        
        navigate('/search');
      }

      // const navigateFunction = () =>{
      //   const navigate = useNavigate();
      //   navigate('search')
      // }

      //  wrapperFunction = () =>{
      //     handleSubmit();
      //     navigateFunction();
      // }


    return (
        <form onSubmit={handleSubmit} >
        <div className="search">
             <input className="searchField"
              type='text'
              value={searchInput}
              onChange  ={(e) => setSearch(e.target.value)}
              placeholder="Search for a movie, tv show, person......" >
            </input>
            <button type='submit'  className="searchButton" >Search</button>
        </div>
        </form> 
    )
}


