
export const goToPokemonsList = (navigator) => {
    navigator('/')
}

export const goToPokedex = (navigator) => {
    navigator('/Pokedex')
}

export const goToPokemonDetail = (navigator, id) => {
    navigator(`/PokemonDetail/${id}`)
}
