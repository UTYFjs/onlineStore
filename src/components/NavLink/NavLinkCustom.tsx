import React from 'react';
import styles from './NavLinkCustom.module.scss';
import { NavLink } from 'react-router-dom';
import { routerPagesData } from '../../data/data';
interface navLinkProps {
  url: string;
  content: string;
}

function NavLinkCustom({ url, content }: navLinkProps) {
  return (
    <>
      {routerPagesData.map((item) => (
        <NavLink key={item.url + item.content} to={item.url} className={styles['nav-link']}>
          {item.content}
        </NavLink>
      ))}
    </>
  );
}

export default NavLinkCustom;
