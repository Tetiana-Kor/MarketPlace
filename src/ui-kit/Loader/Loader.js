import React from 'react';
import { Circles } from 'react-loader-spinner';
import s from './Loader.module.css';

const LoaderRings = () => {
  return (
    <Circles
      color="purple"
      height={100}
      width={100}
      timeout={3000}
      className={s.loader}
    />
  );
};

export default LoaderRings;
