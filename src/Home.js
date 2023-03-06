import "./App.css";
import { Header } from './Components/Header'
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { GetMovies } from "./Components/GetMovies";
import { MoviesHeader } from "./Components/MoviesHeader";

export function Home({setQuery}) {
    return (
        <>

            <NavBar />
            <Header setQuery={setQuery} />
            <MoviesHeader />
            <GetMovies />
            <Footer />

        </>
    );
}