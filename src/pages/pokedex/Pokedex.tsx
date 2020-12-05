import React from 'react';
import PokemonCard from '../../components/pokemon-card/PokemonCard';
import SearchBar from '../../components/search-bar/SearchBar';
import PokemonContext from '../../context/pokemon-context';
import Paginator from '../../components/paginator/Paginator';

const Pokedex: React.FC = () => {
  const capitalize = (name: string) => {
    return name[0].toUpperCase() + name.slice(1);
  };

  return (
    <>
      <SearchBar />
      <PokemonContext.Consumer>
        {
          ({ currentPokemon }) => (
            <>
              <div className="container mx-auto xl:px-20 grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
                {
                  currentPokemon.slice(0, 20).map(({ name, url }) => {
                    return <PokemonCard key={name} name={capitalize(name)} url={url} />
                  })
                }
              </div>
              <Paginator pokemon={currentPokemon} />
            </>
          )
        }
      </PokemonContext.Consumer>
    </>
  );
};

export default Pokedex;