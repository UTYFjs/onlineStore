import React, { CSSProperties } from 'react';
import styles from './Heart.module.scss';
import { ReactComponent as HeartSvg } from '../../svg/heart.svg';
import cn from 'classnames';

interface IHeartProps {
  onClick: () => void;
  isActive?: boolean;
  isTransparentHover?: boolean;
  customStyles?: CSSProperties;
}
export default function Heart({
  isActive = false,
  onClick,
  isTransparentHover,
  customStyles,
}: IHeartProps) {
  //const [isActiveHeart, setIsActiveHeart] = useState(isActive);
  const classNames = cn(
    styles['heart-icon'],
    isActive ? styles.active : '',
    isTransparentHover ? styles.transparent : ''
  );

  return (
    <HeartSvg
      stroke="#fff"
      className={classNames}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      style={customStyles}
    />
  );
}
