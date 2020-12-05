import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokedex from './pages/pokedex/Pokedex';
import PokemonDetail from './pages/pokemon-detail/PokemonDetail';
import { PokemonData } from './api/pokemon/types';
import { getAllPokemon } from './api/pokemon/pokemon';
import PokemonContext from './context/pokemon-context';


const App: React.FC = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonData[]>([]);
  const [currentPokemon, setCurrentPokemon] = useState<PokemonData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const updateCurrentPokemon = (pokemon: PokemonData[]) => {
    setCurrentPokemon(pokemon);
  };

  const updateCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getAllPokemon()
      .then(({ data }) => {
        setAllPokemon(data.results);
        setCurrentPokemon(data.results);
      });
  }, []);

  return (
    <PokemonContext.Provider value={{ allPokemon, currentPokemon, updateCurrentPokemon, perPage: 20, currentPage, updateCurrentPage }}>
      <Switch>
        <Route exact path="/">
          <Pokedex />
        </Route>
        <Route path="/:name">
          <PokemonDetail />
        </Route>
      </Switch>
    </PokemonContext.Provider>
  );
}

export default App;
