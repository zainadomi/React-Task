import "./App.css";
import { Header } from './Components/Header'
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { GetMovies } from "./Components/GetMovies";

export function Home({setQuery}) {
    return (
        <>

            <NavBar />
            <Header setQuery={setQuery} />
            <GetMovies />
            <Footer />

        </>
    );
}