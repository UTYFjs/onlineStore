import React from 'react';

import styles from './ShadedBackground.module.scss';
import cn from 'classnames';
import { useZustandStore } from '../../store/zustandStore';

function ShadedBackground() {
  const isShadedActive = useZustandStore((state) => state.isShadedActive);
  const handleShaded = useZustandStore((state) => state.handleShaded);
  const classesBackground = cn(styles['shaded-background'], isShadedActive && styles.active);
  return <div className={classesBackground} onClick={() => handleShaded()}></div>;
}

export default ShadedBackground;
