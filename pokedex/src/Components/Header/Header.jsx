import React, { useContext, useState } from 'react'
import { BtnListPage, BtnRemoveStyled, BtnStyled, HeaderStyle, Logo } from './HeaderStyle';
import { goToPokedex, goToPokemonsList } from '../../Routes/Navigators';
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/LogoPokemon.svg'
import menorque from '../../assets/MenorQue.svg'
import { GlobalContext } from '../../context/globalContext';
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



export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addPokemons, removePokemon, pokemonGlobal, pokedexList } = useContext(GlobalContext)

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
  const [botaoFunction, setBotaoFunction] = useState('')

  const onCloseModal = () => {
    onClose()
    if (botaoFunction === 'remove') {
      removePokemon(pokemonGlobal)
    }
  }

  return (
    <HeaderStyle>
      {location.pathname !== '/' && <BtnListPage onClick={() => goToPokemonsList(navigate)}>
        {/* <img src={menorque} alt='' /> */}
        <u> Todos os Pokémons</u>
      </BtnListPage>}
      <div></div>
      <Logo src={logo} alt='logo do pokemon' />
      {location.pathname === '/' && <BtnStyled onClick={() => goToPokedex(navigate)} >Pokedex</BtnStyled>}
      {location.pathname.includes('PokemonDetail') && (!pokedexList.find((pokemon) => pokemon.id === pokemonGlobal.id) ? <BtnStyled onClick={() => (setBotaoFunction(''), onOpen(), addPokemons(pokemonGlobal))} >Capturar!</BtnStyled> : <BtnRemoveStyled onClick={() => (setBotaoFunction('remove'), onOpen())}>Excluir da pokedex</BtnRemoveStyled>)}
      <Modal isCentered isOpen={isOpen} onClose={onCloseModal}>
        {overlay}
        <ModalContent>
          <ModalHeader>{botaoFunction !== 'remove' ? 'Gotcha!' : 'Ho não!'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{botaoFunction !== 'remove' ? 'O Pokémon foi adicionado a sua Pokédex' : 'O Pokémon foi removido da sua Pokedéx'}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HeaderStyle>
  );
}

