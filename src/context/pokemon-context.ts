import React from 'react';
import { GlobalPokemonContext } from './types';

const PokemonContext = React.createContext<GlobalPokemonContext>(
  {
    allPokemon: [],
    currentPokemon: []
  }
);

export default PokemonContext;