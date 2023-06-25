import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage";
import { PokemonsListPage } from "../Pages/PokemonsListPage/PokemonsListPage";
import '../App.css'
import { Header } from "../Components/Header/Header";
import { PokemonCard } from "../Components/PokemonCard/PokemonCard";


export const Router = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PokemonsListPage />} />
                <Route path="/Pokedex" element={<PokedexPage />} />
                <Route path='/PokemonDetail/:id?' element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

