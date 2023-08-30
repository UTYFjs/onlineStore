import React from 'react';
import styles from './SearchBarCustom.module.scss';
export default function SearchBarCustom() {
  return (
    <div className={styles['custom-search-bar']}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        role="search"
      >
        <label htmlFor="search">Search for stuff</label>
        <input id="search" type="search" placeholder="Search..." autoFocus required />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}
