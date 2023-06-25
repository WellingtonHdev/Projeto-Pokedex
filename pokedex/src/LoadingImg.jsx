import styled from "styled-components"
import loadingPokeball from './assets/loadingPokeball.gif'
import loadingPokedex from './assets/loadingPokedex.gif'

const LoadingStyled = styled.div`
    height: 100vh;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const LoadingImg = () => {
    return (
        <LoadingStyled>
            <img src={loadingPokeball} />
        </LoadingStyled>
    )
}

export const LoadingPokedex = () => {
    return (
        <LoadingStyled>
            <img src={loadingPokedex} />
        </LoadingStyled>
    )
}

