import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    const [pokedexList, setPokedexList] = useState([])
    const addPokemons = (pokemon) => {
        setPokedexList([...pokedexList, pokemon])
    }
    const removePokemon = (pokemon) => {
        setPokedexList(pokedexList.filter((pokemonFilter)=>pokemon.id !== pokemonFilter.id))
    }
    const [pokemonGlobal, setPokemonGlobal ] = useState({})

    return (

        <GlobalContext.Provider value={{pokedexList, setPokedexList, addPokemons, removePokemon, pokemonGlobal, setPokemonGlobal}} >{children}</GlobalContext.Provider>

    )
}
