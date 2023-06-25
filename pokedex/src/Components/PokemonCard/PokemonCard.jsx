import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BoxCard,
  BtnCapturarStyled,
  BtnContainer,
  BtnDetalhesStyled,
  BtnRemoveStyled,
  CardInfos, InfoBox,
  PokemonCardStyled,
  PokemonImg,
  TipoStyled,
  TypesOnCard
} from "./PokemonCardStyle";
import { goToPokedex, goToPokemonDetail } from '../../Routes/Navigators';
import pokeball from "../../assets/pngwing 2.svg";
import PokemonTypes from "../../pokemonTypes";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/globalContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from '@chakra-ui/react'


export const PokemonCard = ({ id, name, image, types, pokemon }) => {
  const navigator = useNavigate();
  const { addPokemons, pokedexList, removePokemon } = useContext(GlobalContext);
  console.log(addPokemons)
  const location = useLocation()

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='10%'
      backdropBlur='20px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayTwo />)

  const onCloseModal = () => {
    onClose()
    if (location.pathname === '/Pokedex') {
      removePokemon(pokemon)
    }
  }

  return (
    <BoxCard>
      <PokemonCardStyled types={types} >
        <InfoBox>
          <CardInfos>
            <p>#{id}</p>
            <h2>{name}</h2>
          </CardInfos>
          <TypesOnCard key={id}>
            {
              types.map((type) => (
                <TipoStyled src={PokemonTypes[type.type.name]} alt={type.type.name} />

              ))
            }
          </TypesOnCard>
        </InfoBox>

        <PokemonImg src={pokeball} alt="" />
        <PokemonImg src={image} alt="" />

        <BtnContainer>
          <BtnDetalhesStyled onClick={() => goToPokemonDetail(navigator, id)} >Detalhes</BtnDetalhesStyled>
          {!pokedexList.find((pokemonFind) => pokemonFind.id === pokemon.id) &&
            <BtnCapturarStyled onClick={() => (onOpen(), addPokemons(pokemon))} >Capturar!</BtnCapturarStyled>}
          {location.pathname === '/Pokedex' && <BtnRemoveStyled onClick={() => (onOpen())} >remover!</BtnRemoveStyled>}
        </BtnContainer>
      </PokemonCardStyled>
      <Modal isCentered isOpen={isOpen} onClose={onCloseModal}>
        {overlay}
        <ModalContent>
          <ModalHeader>{location.pathname === '/' ? 'Gotcha!' : 'Ho não!'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{location.pathname === '/' ? 'O Pokémon foi adicionado a sua Pokédex' : 'O Pokémon foi removido da sua Pokedéx'}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </BoxCard>
  )
}
