import React from 'react';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.searchbar}>
      {' '}
      <form>
        <label htmlFor="search">Search</label>
        <input id="search" type="search" pattern=".*\S.*" required />
        <span className={styles.caret}></span>
      </form>
    </div>
  );
}
