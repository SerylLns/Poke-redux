import { fetchPokemonSuccess } from './action'

const numberOfPokemon = 15

const urls = []

for (let i = 1; i <= numberOfPokemon; i++) {
  urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`)  
}

const requests = urls.map(url => fetch(url))

export default () => {
  return dispatch => {
    Promise.all(requests)
      .then(response => Promise.all(response.map(res => res.json())))
      .then(pokemons => pokemons
        .map(pokemon => ({
          id: pokemon.id,
          name: pokemon.name,
          captureRate: pokemon.capture_rate,
          isCatch: false,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png` 
        })))
    .then(pokemons => dispatch(fetchPokemonSuccess(pokemons)))
  }
}