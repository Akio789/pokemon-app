import React from 'react';
import { Props } from './types';

const Paginator: React.FC<Props> = ({ pokemon }) => {
  return (
    <div>
      {pokemon.length}
    </div>
  );
};

export default Paginator;