import "./App.css";
import { React } from "react";
import { Home } from "./Home";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { GetSearchData } from "./Components/GetSearchData";
import MovieDetails from "./Components/MovieDetails";

function App() {  


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<GetSearchData/>} />  
      <Route path="/details" element={<MovieDetails/>} />  

    </Routes>
    </BrowserRouter>
    
  )
}

export default App;