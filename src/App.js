import "./App.css";
import { React, useState } from "react";
import { Home } from "./Home";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { GetSearchData } from "./Components/GetSearchData";
import MovieDetails from "./Components/MovieDetails";

function App() {  

const [query,setQuery] = useState();
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home setQuery={setQuery}/>} />
      <Route path="/search" element={<GetSearchData query={query}/>} />  
      <Route path="/details/:movieId" element={<MovieDetails/>} />  

    </Routes>
    </BrowserRouter>
    
  )
}

export default App;