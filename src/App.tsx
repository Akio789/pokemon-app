import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokedex from './pages/pokedex/Pokedex';
import PokemonDetail from './pages/pokemon-detail/PokemonDetail';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Pokedex />
      </Route>
      <Route path="/:name">
        <PokemonDetail />
      </Route>
    </Switch>
  );
}

export default App;
