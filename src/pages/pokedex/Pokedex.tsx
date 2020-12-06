import React from 'react';
import PokemonCard from '../../components/pokemon-card/PokemonCard';
import SearchBar from '../../components/search-bar/SearchBar';
import PokemonContext from '../../context/pokemon-context';
import Paginator from '../../components/paginator/Paginator';
import { capitalize } from '../../util';

const Pokedex: React.FC = () => {
  const getStart = (page: number, perPage: number) => {
    return (page - 1) * perPage;
  };
  const getEnd = (page: number, perPage: number) => {
    return page * perPage;
  };

  return (
    <>
      <SearchBar />
      <PokemonContext.Consumer>
        {
          ({ currentPokemon, perPage, currentPage, updateCurrentPage }) => (
            <>
              <div className="container mx-auto xl:px-20 grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
                {
                  currentPokemon.slice(getStart(currentPage, perPage), getEnd(currentPage, perPage))
                    .map(({ name, url }) => {
                      return <PokemonCard key={name} name={capitalize(name)} url={url} />
                    })
                }
              </div>
              <Paginator pokemon={currentPokemon} perPage={perPage} currentPage={currentPage} updateCurrentPage={updateCurrentPage!} />
            </>
          )
        }
      </PokemonContext.Consumer>
    </>
  );
};

export default Pokedex;