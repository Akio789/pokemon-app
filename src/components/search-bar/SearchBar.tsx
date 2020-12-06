import React, { useState } from 'react';
import PokemonContext from '../../context/pokemon-context';
import { PokemonData } from '../../api/pokemon/types';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const handleClick = (
    allPokemon: PokemonData[],
    updateCurrentPokemon: (pokemon: PokemonData[]) => void,
    updateCurrentPage: (page: number) => void
  ) => {
    const searchResults = allPokemon.filter(({ name }) => {
      return name.includes(query.toLowerCase());
    });
    updateCurrentPage(1);
    updateCurrentPokemon(searchResults);
  }

  return (
    <PokemonContext.Consumer>
      {
        ({ allPokemon, updateCurrentPokemon, updateCurrentPage }) => (
          < div className="text-center">
            <input
              className="border-2 border-gray-400 rounded p-2 m-2 text-lg font-semibold"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              name="search"
              id="search"
              placeholder="Pokemon name" />
            <button
              onClick={() => handleClick(allPokemon, updateCurrentPokemon!, updateCurrentPage!)}
              className="border-2 bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-1 text-lg font-semibold text-white"
            >Search</button>
          </div>
        )
      }
    </PokemonContext.Consumer >
  );
};

export default SearchBar;