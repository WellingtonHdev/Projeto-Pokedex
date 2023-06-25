import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/globalContext'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard'
import { PokedexListPageStyle, Title } from './PokedexPageStyle'
import { LoadingPokedex } from '../../LoadingImg'

export const PokedexPage = () => {
  const { pokedexList } = useContext(GlobalContext)
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false)
  }, 2800)
  if (loading) {
    return <LoadingPokedex />;
  }



  return (
    <>
      <Title>
        <h1>Meus Pokémons</h1>
      </Title>
      <PokedexListPageStyle>

        {pokedexList.map((pokemon) => {
          return (<PokemonCard
            pokemon={pokemon}
            id={pokemon.id}
            key={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />)
        })}
      </PokedexListPageStyle>
    </>
  )
}
