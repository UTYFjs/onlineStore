import React, { useState, useEffect } from 'react';
import styles from './NavLinkCustom.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

interface navLinkProps {
  url: string;
  content: string;
  color: string;
  onClick?: React.MouseEventHandler;
}

function NavLinkCustom({ url, content, color = '#000', onClick }: navLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === url) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location, url]);

  const classActive = classNames(styles['nav-link'], isActive && styles['active-link']);

  return (
    <NavLink
      key={url + content}
      to={url}
      className={classActive}
      style={{ color: color }}
      onClick={onClick}
    >
      {content}
    </NavLink>
  );
}

export default NavLinkCustom;
