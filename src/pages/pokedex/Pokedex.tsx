import React, { useEffect, useState } from 'react';
import { getPokemonList } from '../../api/pokemon/pokemon';
import { PokemonData } from '../../api/pokemon/types';

const Pokedex: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Array<PokemonData>>([])

  useEffect(() => {
    getPokemonList()
      .then(({ data }) => setPokemonList(data.results));
  }, []);

  return (
    <div>
      {pokemonList.map((pokemon) => {
        return <p>{pokemon.name}</p>
      })}
    </div>
  );
};

export default Pokedex;