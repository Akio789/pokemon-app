import api from '../index';
import { PokemonDataListResponse } from './types';

const getPokemonList = async () => {
  const pokemon: PokemonDataListResponse = await api.get('pokemon');
  return pokemon;
}

export { getPokemonList };