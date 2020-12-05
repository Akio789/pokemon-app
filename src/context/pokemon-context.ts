import React from 'react';
import { GlobalPokemonContext } from './types';

const PokemonContext = React.createContext<GlobalPokemonContext>(
  {
    allPokemon: [],
    currentPokemon: [],
    perPage: 20,
    currentPage: 1
  }
);

export default PokemonContext;