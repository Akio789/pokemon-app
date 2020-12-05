import React from 'react';
import { Props } from './types';
import { Pagination } from '@material-ui/lab';

const Paginator: React.FC<Props> = ({ pokemon, perPage, currentPage, updateCurrentPage }) => {
  const pageCount = Math.ceil(pokemon.length / perPage);

  return (
    <div className="flex justify-around my-4">
      <Pagination
        count={pageCount}
        color="primary"
        page={currentPage}
        onChange={(e, page) => updateCurrentPage(page)} />
    </div>
  );
};

export default Paginator;