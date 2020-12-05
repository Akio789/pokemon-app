import React, { useEffect, useState } from 'react';
import { Props } from './types';
import { getPokemonDetail } from '../../api/pokemon/pokemon';

const PokemonCard: React.FC<Props> = ({ name, url }) => {
  const [spritesUrl, setSpritesUrl] = useState('');

  const getPath = (url: string) => {
    return url.split('/v2/')[1];
  }

  useEffect(() => {
    getPokemonDetail(getPath(url))
      .then(({ data }) => {
        setSpritesUrl(data.sprites.front_default);
      });
  }, [url]);

  return (
    <div className="border m-2 max-w-2xs rounded shadow-md bg-gray-200">
      <p className="text-lg font-semibold text-center">{name}</p>
      <img className="mx-auto w-60" src={spritesUrl} alt={name} />
    </div>
  );
};

export default PokemonCard;