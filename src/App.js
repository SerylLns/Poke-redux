import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import { CLICK, showPokemonAction, catchPokemonAction } from './store/action'
import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import fetchPokemons from "./store/fetchPokemons";

const App = ({ handleClick, fetchPokemons, showPokemon, pokemons, catchPokemon  }) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  useEffect(() => {
    console.log(pokemons);
  }, [pokemons])

  return (
    <div className="App">
      <GameBoy handleClick={handleClick} showPokemon={() => showPokemon(pokemons)} catchPokemon={ catchPokemon }/>
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
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons)),
    catchPokemon:() => dispatch(catchPokemonAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App );
