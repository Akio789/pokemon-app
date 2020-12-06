import React from 'react';
import { Props } from './types';
import { capitalize } from '../../../util/index';
import { LinearProgress } from '@material-ui/core';

const PokemonStat: React.FC<Props> = ({ stat }) => {
  return (
    <div className="my-2 mx-4">
      <p className="text-lg font-semibold">{capitalize(stat.stat.name)}</p>
      <LinearProgress variant="determinate" value={Math.floor(stat.base_stat / 2)} />
    </div>
  )
}

export default PokemonStat;
