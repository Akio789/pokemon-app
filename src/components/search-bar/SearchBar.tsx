import React, { useState } from 'react';
import { Props } from './types';

const SearchBar: React.FC<Props> = ({ search }) => {
  const [query, setQuery] = useState('');
  const handleClick = () => {
    search(query);
  }

  return (
    <div className="text-center">
      <input
        className="border-2 border-gray-400 rounded p-2 m-2 text-lg font-semibold"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        name="search"
        id="search"
        placeholder="Pokemon name" />
      <button
        onClick={handleClick}
        className="border-2 bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-1 text-lg font-semibold text-white"
      >Search</button>
    </div>
  );
};

export default SearchBar;