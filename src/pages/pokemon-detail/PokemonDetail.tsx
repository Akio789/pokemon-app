import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Params } from './types';
import { getPokemonDetail } from '../../api/pokemon/pokemon';
import { PokemonDetailData } from '../../api/pokemon/types';
import { capitalize } from '../../util';

const PokemonDetail: React.FC = () => {
  const { name } = useParams<Params>();
  const [pokemonData, setPokemonData] = useState<PokemonDetailData | null>(null);

  useEffect(() => {
    getPokemonDetail(`pokemon/${name.toLowerCase()}`)
      .then(({ data }) => {
        setPokemonData(data);
      });
  }, [name]);

  return (
    pokemonData && (
      <div className="container xl:px-20">
        <p>{capitalize(pokemonData?.species.name)}</p>
        <div>
          <img src={pokemonData?.sprites.front_default} alt={`${pokemonData?.species.name} front default`} />
          <img src={pokemonData?.sprites.back_default} alt={`${pokemonData?.species.name} back default`} />
        </div>
      </div>
    )
  );
};

export default PokemonDetail;