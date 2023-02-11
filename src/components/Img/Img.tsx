import React from 'react';
import styles from './CardCategory.module.scss';

interface IImgProps {
  key?: string;
  className?: string;
  src?: string;
  alt?: string;
  ref?: string;
}

function Img({ key, className = '', src, alt, ref }: IImgProps) {
  return <img ref={ref} key={key} className={styles[className]} src={src} alt={alt} />;
}

export default Img;
