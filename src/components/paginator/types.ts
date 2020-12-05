import { PokemonData } from '../../api/pokemon/types';

export interface Props {
  pokemon: PokemonData[];
  perPage: number;
  currentPage: number;
  updateCurrentPage: (page: number) => void;
}