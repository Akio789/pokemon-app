import React, { useEffect, useState } from 'react';
import { getPokemonList } from '../../api/pokemon/pokemon';
import { PokemonData } from '../../api/pokemon/types';
import PokemonCard from '../../components/pokemon-card/PokemonCard';
import SearchBar from '../../components/search-bar/SearchBar';

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
    <>
      <SearchBar search={() => { }} />
      <div className="container mx-auto xl:px-20 grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
        {
          pokemonList.map(({ name, url }) => {
            return <PokemonCard key={name} name={capitalize(name)} url={url} />
          })
        }
      </div>
    </>
  );
};

export default Pokedex;