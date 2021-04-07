import React from "react";
import { connect } from "react-redux";

import PokemonItem from "./PokemonItem";

const PokeList = ({ click, pokemons }) => {
  return (
    <div className="list-container">
      <h2>Try : { click }</h2>
      <h2>{pokemons.filter( pok => pok.isCatch).length} / { pokemons.length }</h2>
      <ul>
        {pokemons.map(pokemon => {
          return <PokemonItem key={pokemon.id} pokemon={pokemon} />
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = ({ click, pokemons }) => {
  return {
    click,
    pokemons
  }
}

export default connect(mapStateToProps)(PokeList);
