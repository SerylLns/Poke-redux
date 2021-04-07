import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import { CLICK, showPokemonAction } from './store/action'
import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import fetchPokemons from "./store/fetchPokemons";

const App = ({ handleClick, fetchPokemons, showPokemon, pokemons  }) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  return (
    <div className="App">
      <button onClick={()=>{ handleClick()}}>click</button>
      <GameBoy showPokemon={ () => showPokemon(pokemons)} />
      <PokeList />
    </div>
  );
};
const mapStateToProps = ({pokemons}) => {
  return {
    pokemons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch({ type: CLICK }),
    fetchPokemons: () => dispatch(fetchPokemons()),
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App );
