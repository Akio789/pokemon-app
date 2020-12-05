import { PokemonData } from '../api/pokemon/types';

export interface GlobalPokemonContext {
  allPokemon: PokemonData[];
  currentPokemon: PokemonData[];
  updateCurrentPokemon?: (pokemon: PokemonData[]) => void;
}