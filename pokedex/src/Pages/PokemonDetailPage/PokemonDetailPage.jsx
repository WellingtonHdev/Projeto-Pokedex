import { useContext, useEffect, useState } from "react"
import theme from "../../themes";
import {
  BackImg,
  BoxInfo,
  BoxStyledImg,
  IdStyled,
  ImgBox,
  MovesBox,
  MovesStyled,
  PokemonImg,
  PokemonNameStyled,
  StatsBox,
  StatsStyled,
  Title,
  TypeStyled
} from "./PokemonDetailStyle"
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { LoadingImg } from "../../LoadingImg";
import pokemonTypes from "../../pokemonTypes";
import { GlobalContext } from "../../context/globalContext";
import { Flex, Progress, Text } from "@chakra-ui/react";




export const PokemonDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  let moveCount = 0;
  let total = 0;
  if (!loading) {
    for (const stat of pokemon.stats) {
      total += stat.base_stat;
    }
  }
  const { setPokemonGlobal } = useContext(GlobalContext);
  const id = useParams()
  useEffect(() => {
    api.get(`/pokemon/${id.id}`).then((res) => {
      setPokemon(res.data);
      setPokemonGlobal(res.data)
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  if (loading) {
    return <LoadingImg />;
  }

  let totalValue = 0;

  if (!loading) {
    for (const stats of pokemon.stats) {
      totalValue += stats.base_stat;
    }
  }


  return (
    <BackImg>
      <Title>
        <h1>Detalhes</h1>
        <BoxInfo types={pokemon.types}>
          <IdStyled><p>#{pokemon.id}</p></IdStyled>
          <PokemonNameStyled><h1>{pokemon.name} </h1></PokemonNameStyled>
          <PokemonImg src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon" />

          <BoxStyledImg>
            <ImgBox src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.id} />
            <ImgBox src={pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default} alt={pokemon.id} />
          </BoxStyledImg>
          <TypeStyled>
            {pokemon.types.map((type) => {
              return (
                <img
                  src={pokemonTypes[type.type.name]}
                  key={type.type.name}
                />
              );
            })}</TypeStyled>
          <StatsBox>
            <h2>Base stats:</h2>

            {pokemon.stats.map((stat) => (
              <StatsStyled key={stat.stat.name}>
                <Flex w={'35%'} justifyContent={'flex-end'} ><Text>{stat.stat.name}</Text></Flex>
                <Flex><Text>{stat.base_stat}</Text></Flex>
                <Progress value={stat.base_stat} colorScheme={`hsl(${stat.base_stat * 0.8}, 80%, 50%)}`} w={100} borderRadius={5} bgColor={'#00000024'} />
              </StatsStyled>
            ))}
            <Text marginLeft={120} marginTop={2}>Total: {totalValue} </Text>
          </StatsBox>

          <MovesBox>
            <h2>Moves:</h2>
            {pokemon.moves.map((move, index) => {
              if (moveCount < 5) {
                moveCount += 1;
                return <MovesStyled key={index}>{move.move.name}</MovesStyled>;
              }
            })}
          </MovesBox>
        </BoxInfo>
      </Title>
    </BackImg>
  )
}
