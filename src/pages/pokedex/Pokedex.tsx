import React, { useEffect, useState } from 'react';
import { getPokemonList } from '../../api/pokemon/pokemon';
import { PokemonData } from '../../api/pokemon/types';
import PokemonCard from '../../components/pokemon-card/PokemonCard';

const Pokedex: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Array<PokemonData>>([]);
  const capitalize = (name: string) => {
    return name[0].toUpperCase() + name.slice(1);
  };

  useEffect(() => {
    getPokemonList()
      .then(({ data }) => setPokemonList(data.results));
  }, []);

  return (
    <div className="container mx-auto grid xl:grid-cols-9 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
      {
        pokemonList.map(({ name, url }) => {
          return <PokemonCard key={name} name={capitalize(name)} url={url} />
        })
      }
    </div>
  );
};

export default Pokedex;