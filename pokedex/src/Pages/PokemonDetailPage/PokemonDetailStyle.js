import { color } from "framer-motion";
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


export const BoxInfo = styled.div`
    width: 1389.14;
    height: 663px;
    border: 2px solid black;
    background: ${({ types }) => getBackgroundColor(types)};
    border-radius: 37px;
    display: flex;
    align-items: flex-end;
    margin-top: 115px;
    margin-right: 25px;
    
`

export const BackImg = styled.div`
    background: #5e5e5e ;
    padding-left: 25px;
    padding-bottom: 163px;
`
export const Title = styled.text`
    h1{
        color: #fff;
        font-size: 48px;
        font-weight: bold;
    }
    h2{
        font-size: 20px;
        font-weight: bold;
        margin: 15px;
    }
`

export const PokemonImg = styled.img`
    position: absolute;
    width: 270px;
    height: 270px;
    left: 1109px;
    top: 216px;
`

export const ImgBox = styled.img`
    height: 282px;
    width: 282px;
    border-radius: 8px;
    background: #FFF;
    margin-bottom: 47px;
    padding: 65px;
`
export const BoxStyledImg = styled.div`
    
    height: 282px;
    width: 282px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 374px;
    left: 69px;
`
export const StatsBox = styled.div`
    background: #FFF;
    width: 343px;
    height: 613px;
    left: 385px;
    top: 372px;
    bottom: 189px;
    border-radius: 8px;
    position: absolute;
`

export const MovesBox = styled.div`
    background: #FFF;
    width: 292px;
    height: 453px;
    border-radius: 8px;
    position: absolute;
    top: 532px;
    left: 796px;
    
`
export const PokemonNameStyled = styled.div`
    position: absolute;
    left: 796px;
    top: 387px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 58px;
    h1{
        text-transform: capitalize;
    }
    font-family: 'poppins';
`
export const IdStyled = styled.div`
    color: #fff;
    top: 372px;
    left: 799px;
    position: absolute;
    font-size: 16px;

`
export const TypeStyled = styled.div`
    position: absolute;
    top: 454px;
    left: 799px;
    display: flex;
    gap: 17px;
`

export const StatsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    
`

export const MovesStyled = styled.div`
width: 50%;
height: 37px;
padding: 5px;
border-radius: 12px;
margin: 10px;
border: 1px dashed #00000024;
background: linear-gradient(0deg, #ECECEC, #ECECEC);

`

