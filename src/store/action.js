export const CLICK = "CLICK";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const SHOW_POKEMON = "SHOW_POKEMON"

export const fetchPokemonSuccess = (pokemons) => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemons
})

export const showPokemonAction = (pokemons) => {
  const filterPokemon = pokemons.filter(pokemon => !pokemon.isCatch)
  const max = filterPokemon.length
  const random = Math.floor(Math.random() * max)
  const onScreen = pokemons[random]
  return dispatch => {
    dispatch({
      type: SHOW_POKEMON,
      onScreen
    })
  }
} 