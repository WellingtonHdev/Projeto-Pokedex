import { useState } from "react"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { BtnFooter, PokemonListPageStyle } from "./PokemonsListPageStyle"
import { useEffect } from "react"
import { api } from "../../services/api"

export const PokemonsListPage = () => {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [nextPage, setNextPage] = useState(false)
  const [previous, setPrevious] = useState(true)

  useEffect(() => {
    api.get("/pokemon", {
      params: {
        limit: 21,
        offset: 21 * page
      },
    }).then((response) => {
      const { results, nextPage, previous } = response.data
      setNextPage(!nextPage)
      setPrevious(!previous)
      const promises = results.map((result) => api.get(result.url))
      Promise.all(promises).then((responses) => {
        const pokemonInfo = responses.map((res) => res.data)
        setPokemons(pokemonInfo)
      })
    })
  }, [page])

  return (

      <PokemonListPageStyle>
        {
          pokemons.map((pokemon) => {
            return (<PokemonCard
              pokemon={pokemon}
              id={pokemon.id}
              key={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            />)
          })
        }
        <footer>
          <BtnFooter onClick={() => setPage(page - 1)} >voltar</BtnFooter>
          <BtnFooter onClick={() => setPage(page + 1)} >avançar</BtnFooter>
        </footer>

      </PokemonListPageStyle>
  )
}
