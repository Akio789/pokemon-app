export interface Response {
  config: Object;
  headers: Object;
  request: Object;
  status: number;
  statusText: string;
}

export interface PokemonData {
  name: string;
  url: string;
}

export interface PokemonDataList {
  count: number;
  next: string;
  previous: string;
  results: Array<PokemonData>;
}

export interface PokemonDataListResponse extends Response {
  data: PokemonDataList;
}

export interface PokemonDetailDataSprites {
  front_default: string;
  back_default: string;
}

export interface PokemonDetailDataStat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface PokemonDetailData {
  sprites: PokemonDetailDataSprites;
  species: PokemonData;
  stats: PokemonDetailDataStat[];
}

export interface PokemonDetailDataResponse extends Response {
  data: PokemonDetailData;
}

export interface FlavorText {
  flavor_text: string;
}

export interface PokemonSpeciesData {
  flavor_text_entries: FlavorText[];
}

export interface PokemonSpeciesDataResponse {
  data: PokemonSpeciesData;
}