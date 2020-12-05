import api from '../index';
import { PokemonDataListResponse, PokemonDetailDataResponse } from './types';

export const getPokemonList = async () => {
  const pokemonDataList: PokemonDataListResponse = await api.get('pokemon');
  return pokemonDataList;
}

export const getPokemonDetail = async (path: string) => {
  const pokemonDetail: PokemonDetailDataResponse = await api.get(path);
  return pokemonDetail;
}