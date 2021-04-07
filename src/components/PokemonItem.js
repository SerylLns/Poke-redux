import React from "react";

const PokemonItem = ({ pokemon }) => {
  const imgCatch =
    pokemon.isCatch ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png' : pokemon.img
  return (
    <li className="pokemon-item">
      <img
        alt={pokemon.name}
        src={
          imgCatch
        }
      />
      {pokemon.name}
    </li>
  );
};

export default PokemonItem;
