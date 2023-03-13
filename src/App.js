import "./App.css";
import { React, useState } from "react";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetSearchData } from "./Components/GetSearchData";
import MovieDetails from "./Components/MovieDetails";
import WatchList from "./Components/WatchList"
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {
  
  const [query, setQuery] = useState();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setQuery={setQuery} />} />
          <Route path="/search" element={<GetSearchData query={query} />} />
          <Route path="/details/:movieId" element={<MovieDetails />} />
          <Route path="watchList/:movieId" element={<WatchList query={query} />} />

        </Routes>
      </BrowserRouter></Provider>


  )
}

export default App;