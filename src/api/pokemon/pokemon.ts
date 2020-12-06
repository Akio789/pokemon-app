import api from '../index';
import { PokemonDataListResponse, PokemonDetailDataResponse, PokemonSpeciesDataResponse } from './types';

export const getPokemonList = async (limit: number = 20, offset: number = 0) => {
  const pokemonDataList: PokemonDataListResponse = await api.get(`pokemon/?limit=${limit}&offset=${offset}`);
  return pokemonDataList;
};

export const getPokemonDetail = async (path: string) => {
  const pokemonDetail: PokemonDetailDataResponse = await api.get(path);
  return pokemonDetail;
};

export const getAllPokemon = async () => {
  const { data: { count } }: PokemonDataListResponse = await getPokemonList();
  const allPokemonDataList = await getPokemonList(count);
  return allPokemonDataList;
};

export const getPokemonSpecies = async (name: string) => {
  const pokemonSpeciesData: PokemonSpeciesDataResponse = await api.get(`pokemon-species/${name}`);
  return pokemonSpeciesData;
};