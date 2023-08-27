import React from 'react';
import styles from './Slide.module.scss';
import ImgLazy from '../../../../ImgLazy/ImgLazy';

interface ISlideProps {
  src: string;
}

export default function Slide({ src }: ISlideProps) {
  return (
    <>
      <ImgLazy src={src} />
    </>
  );
}
