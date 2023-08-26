import classNames from 'classnames';
import React, { CSSProperties, useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Accordion.module.scss';

interface IAccordionProps {
  title: string;
  customStyles?: CSSProperties;
  children?: JSX.Element | null;
}
function Accordion({ title, customStyles, children = null }: IAccordionProps) {
  const [isActive, setIsActive] = useState(false);

  const classActive = classNames(styles.content, isActive && styles.active);
  //style={{ marginBottom: `${isActive ? '.5rem' : ''}` }}
  return (
    <div className={styles.accordion}>
      <div
        className={styles['accordion-header']}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <p className={styles.title} style={{ ...customStyles, fontWeight: 500, fontSize: '1.2em' }}>
          {title}
        </p>
        <ExpandMoreIcon className={styles['icon']} style={customStyles} />
      </div>
      <div className={classActive}> {children}</div>
    </div>
  );
}

export default Accordion;
