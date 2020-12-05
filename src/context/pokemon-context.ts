import React from 'react';
import { PokemonData } from '../api/pokemon/types';

const PokemonContext = React.createContext<PokemonData[]>([]);

export default PokemonContext;