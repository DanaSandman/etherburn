import React from 'react';
import { CircularProgress } from '@material-ui/core';

export function Loader() {
  return (
    <div className='loader'>
      <CircularProgress />
    </div>
  );
}
