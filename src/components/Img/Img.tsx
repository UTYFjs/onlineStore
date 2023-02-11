import React from 'react';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import styles from './Img.module.scss';

interface IImgProps {
  key?: string;
  className?: string;
  src?: string;
  alt?: string;
}

function Img({ key, className = '', src, alt }: IImgProps) {
  const { ref, inView } = useInView({ threshold: 0.01, triggerOnce: true });
  const imgClassNames = cn('image', className);
  return (
    <img ref={ref} key={key} className={styles[imgClassNames]} src={inView ? src : ''} alt={alt} />
  );
}

export default Img;
