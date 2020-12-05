import React, { useEffect } from 'react';
import { getPokemon } from '../api/pokemon';

const Pokedex: React.FC = () => {
  useEffect(() => {
    getPokemon().then(console.log);
  }, []);

  return <>Pokedex</>;
};

export default Pokedex;