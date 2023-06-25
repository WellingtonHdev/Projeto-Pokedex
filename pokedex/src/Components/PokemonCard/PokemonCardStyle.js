import styled from "styled-components";
import theme from "../../themes";


const getBackgroundColor = (types) => {
    if (types.length > 0) {
      if (types[0].type.name === 'normal' && types[1]) {
        return theme.colors.backgroundCard[types[1].type.name] || '#ffffff';
      }
      return theme.colors.backgroundCard[types[0].type.name] || '#ffffff';
    }
  console.log()
    return '#ffffff';
  };

export const PokemonCardStyled = styled.div`
    background: ${({types}) => getBackgroundColor(types)};
    width: 100%;
    height: 80%;
    border-radius: 0.6vw;
    display: flex;
    justify-content: space-between;

`
export const BtnContainer = styled.button`
    display: flex;
    justify-content: space-between;
    background: none;
    border: none;
`
export const TypesOnCard = styled.div`
    display: flex;
    gap: 3%;
    width: 70%;
    img {
        width: 48%;
    }
`
export const InfoBox = styled.div`
    color: #ffffff;
    font-family: "Inter Tight", sans-serif;
    height: 60%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 3%;
`


export const BtnDetalhesStyled = styled.button`
    width: 30%;
    height: 15%;
    margin-bottom: 4%;
    font-family: "Poppins";
    font-weight: 700;
    font-size: 1vw;
    background: transparent;
    border: none;
    text-decoration-line: underline;
    cursor: pointer;
    color: #ffffff;
    margin-left: 6%;  
    left: 0;
    bottom: 0;
    position: absolute;

`

export const BtnCapturarStyled = styled.button`
    width: 25%;
    height: 15%;
    font-size: 1vw;
    background: #ffffff;
    border-radius: 0.4vw;
    border: none;
    margin-right: 4%;
    position: absolute;
    bottom: 5%;
    right: 3%;
    z-index: 20;
    cursor: url("https://cur.cursors-4u.net/games/gam-13/gam1282.cur"), pointer;
`
export const BtnRemoveStyled = styled.button`
    width: 25%;
    height: 15%;
    font-size: 1vw;
    background: #FF6262;
    border-radius: 0.4vw;
    border: none;
    margin-right: 4%;
    position: absolute;
    bottom: 5%;
    right: 3%;
    z-index: 20;
    cursor: url("https://cur.cursors-4u.net/games/gam-13/gam1282.cur"), pointer;
`



export const BoxCard = styled.div`
    width: 440px;
    height: 266px;
    margin-bottom: 0.5vh;
    display: flex;
    align-items: flex-end;
    position: relative;

`

export const CardInfos = styled.div`
    height: 50%;
    left: 20px;
    margin-top: 45px;
    position: absolute;
    text-align: left;
    h2{
        text-transform: capitalize;
    }
    font-family: 'poppins';
    
`

export const TipoStyled = styled.img`
    display: flex;
    justify-content: start;
    margin-top: 80px;
    width: 99px;
    height: 31px;

`

export const PokemonImg = styled.img`
     width: 193px;
     height: 193px;
     position: absolute;
     top: 0;
     right: 0;
    
`