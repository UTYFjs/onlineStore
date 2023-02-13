import React from 'react';
import styles from './NavLinkCustom.module.scss';
import { NavLink } from 'react-router-dom';

interface navLinkProps {
  url: string;
  content: string;
  color: string;
  onClick?: React.MouseEventHandler;
}

function NavLinkCustom({ url, content, color = '#000', onClick }: navLinkProps) {
  return (
    <NavLink
      key={url + content}
      to={url}
      className={styles['nav-link']}
      style={{ color: color }}
      onClick={onClick}
    >
      {content}
    </NavLink>
  );
}

export default NavLinkCustom;
