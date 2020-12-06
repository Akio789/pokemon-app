import React, { useEffect, useState } from 'react';
import { Props } from './types';
import { getPokemonDetail } from '../../api/pokemon/pokemon';
import { useHistory } from 'react-router-dom';

const PokemonCard: React.FC<Props> = ({ name, url }) => {
  const [spritesUrl, setSpritesUrl] = useState('');
  const history = useHistory();

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
    <div
      onClick={() => { history.push(name) }}
      className="border m-2 max-w-2xs rounded shadow-md bg-gray-200 cursor-pointer">
      <p className="text-lg font-semibold text-center">{name}</p>
      <img className="mx-auto w-60" src={spritesUrl} alt={name} />
    </div>
  );
};

export default PokemonCard;