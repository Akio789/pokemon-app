import api from './index';

const getPokemon = async () => {
  const pokemon = await api.get('pokemon');
  return pokemon;
}

export { getPokemon };