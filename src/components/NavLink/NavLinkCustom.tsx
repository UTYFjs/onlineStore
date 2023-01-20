import React from 'react';
import styles from './NavLinkCustom.module.scss';
import { NavLink } from 'react-router-dom';

interface navLinkProps {
  url: string;
  content: string;
  color: string;
}

function NavLinkCustom({ url, content, color = '#000' }: navLinkProps) {
  return (
    <NavLink key={url + content} to={url} className={styles['nav-link']} style={{ color: color }}>
      {content}
    </NavLink>
  );
}

export default NavLinkCustom;
