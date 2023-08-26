import React, { CSSProperties, useState } from 'react';
import styles from './BubbleFilter.module.scss';

interface IBubbleFilterProps {
  content: string;
  onClick: () => void;
  customStyles?: CSSProperties;
}
export default function BubbleFilter({ content, onClick, customStyles }: IBubbleFilterProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={`${styles.bubble} ${isHovered ? styles.hovered : ''}`}
      style={{ ...customStyles }}
    >
      <div className={styles.content}>{content}</div>{' '}
      <div
        className={styles.close}
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        x
      </div>
    </div>
  );
}
