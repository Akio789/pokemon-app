import React from 'react';
import { Props } from './types';
import { capitalize } from '../../../util/index';

const PokemonStat: React.FC<Props> = ({ stat }) => {
  return (
    <div>
      <p className="text-lg underline">{capitalize(stat.stat.name)}</p>
      <p>{stat.base_stat}</p>
    </div>
  )
}

export default PokemonStat;
