import classNames from 'classnames';
import React, { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Accordion.module.scss';

interface IAccordionProps {
  title?: string;
  children?: JSX.Element | null;
}
function Accordion({ title = '', children = null }: IAccordionProps) {
  const [isActive, setIsActive] = useState(false);
  const classActive = classNames(styles.content, isActive && styles.active);
  return (
    <div className={styles.accordion}>
      <div
        className={styles['accordion-header']}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <p className={styles.title}>{title}</p>
        <ExpandMoreIcon className={styles['icon']} />
      </div>
      <div className={classActive}> {children}</div>
    </div>
  );
}

export default Accordion;
