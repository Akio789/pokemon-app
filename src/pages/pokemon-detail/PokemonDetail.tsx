import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Params } from './types';
import { getPokemonDetail } from '../../api/pokemon/pokemon';

const PokemonDetail: React.FC = () => {
  const { name } = useParams<Params>();

  useEffect(() => {
    getPokemonDetail(`pokemon/${name}`)
      .then(console.log);
  });

  return (
    <div>Detail</div>
  );
};

export default PokemonDetail;