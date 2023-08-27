import React from 'react';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import styles from './ImgLazy.module.scss';

interface IImgLazyProps {
  className?: string;
  src?: string;
  alt?: string;
}

function ImgLazy({ className = '', src, alt }: IImgLazyProps) {
  const { ref, inView } = useInView({ threshold: 0.01, triggerOnce: true });
  const imgClassNames = cn('image', className);
  return <img ref={ref} className={styles[imgClassNames]} src={inView ? src : ''} alt={alt} />;
}

export default ImgLazy;
