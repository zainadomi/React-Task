import "./App.css";
import { Header } from './Components/Header'
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { Movies } from "./Components/Movies";

export function Home({setQuery}) {
    return (
        <>

            <NavBar />
            <Header setQuery={setQuery} />
            <Movies />
            <Footer />

        </>
    );
}