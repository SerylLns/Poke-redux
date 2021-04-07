import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import { CLICK } from './store/action'
import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import fetchPokemons from "./store/fetchPokemons";

const App = ({ handleClick, fetchPokemons }) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])
  
  return (
    <div className="App">
      <button onClick={()=>{ handleClick()}}>click</button>
      <GameBoy />
      <PokeList />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch({ type: CLICK }),
    fetchPokemons: () => dispatch(fetchPokemons())
  }
}

export default connect(null, mapDispatchToProps)(App );
