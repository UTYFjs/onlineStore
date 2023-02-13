import { Divider } from '@mui/material';
import React from 'react';
import styles from './Footer.module.scss';

import LocationTag from '../../../../components/LocationTag/LocationTag';
import Social from '../../../../components/Social/Social';
function Footer() {
  return (
    <footer className={styles.footer}>
      <Divider className={styles.divider} />
      <div className={styles.contacts}>
        <LocationTag iconSize="large" />
        <Social iconSize="large" />
      </div>
      <p>Genoli 2023</p>
    </footer>
  );
}

export default Footer;
