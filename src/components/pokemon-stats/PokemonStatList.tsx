import React from 'react';
import { Props } from './types';
import PokemonStat from './pokemon-stat/PokemonStat';

const PokemonStatList: React.FC<Props> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2">
      {stats.map(stat => {
        return <PokemonStat key={stat.stat.name} stat={stat} />;
      })}
    </div>
  )
}

export default PokemonStatList;
