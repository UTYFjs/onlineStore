import React, { useState } from 'react';
import styles from './LocationTag.module.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface locationTagProps {
  color?: string;
  iconSize?: 'large' | 'medium' | 'small';
  hide?: boolean;
}

function LocationTag({ color = '#000', iconSize = 'medium', hide = false }: locationTagProps) {
  const [colorText, setColorText] = useState(color);
  const [classes, setClasses] = useState('address');
  if (hide) setClasses(classes + ' ' + 'address-hide');
  return (
    <address
      className={styles.address}
      onClick={() => window.open('https://goo.gl/maps/ztXzbkxEoxA7MaM38')}
      onMouseOver={() => {
        setColorText('#FF5252');
      }}
      onMouseOut={() => {
        setColorText(color);
      }}
      style={{ color: colorText }}
    >
      <LocationOnIcon />
      Georgia, Batumi
    </address>
  );
}

export default LocationTag;
