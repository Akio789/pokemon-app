import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Params } from './types';
import { getPokemonDetail, getPokemonSpecies } from '../../api/pokemon/pokemon';
import { PokemonDetailData } from '../../api/pokemon/types';
import { capitalize } from '../../util';

const PokemonDetail: React.FC = () => {
  const { name } = useParams<Params>();
  const [pokemonData, setPokemonData] = useState<PokemonDetailData | null>(null);
  const [pokemonDescription, setPokemonDescription] = useState<string>('');

  useEffect(() => {
    getPokemonDetail(`pokemon/${name.toLowerCase()}`)
      .then(({ data }) => {
        setPokemonData(data);
      });
    getPokemonSpecies(name.toLowerCase())
      .then(({ data }) => {
        setPokemonDescription(data.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z0-9]/g, ' '));
      })
  }, [name]);

  return (
    pokemonData && (
      <div className="container mx-auto xl:px-20">
        <p className="text-3xl font-semibold text-center my-4">{capitalize(pokemonData?.species.name)}</p>
        <div className="flex shadow-md rounded bg-gray-200">
          <img
            className="mx-auto w-60"
            src={pokemonData?.sprites.front_default}
            alt={`${pokemonData?.species.name} front default`} />
          <img
            className="mx-auto w-60"
            src={pokemonData?.sprites.back_default}
            alt={`${pokemonData?.species.name} back default`} />
        </div>
        <p className="text-lg my-2">{pokemonDescription}</p>
      </div>
    )
  );
};

export default PokemonDetail;