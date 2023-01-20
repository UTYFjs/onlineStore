import React, { useState } from 'react';
import styles from './LocationTag.module.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface locationTagProps {
  color?: string;
  iconSize?: 'large' | 'medium' | 'small';
}

function LocationTag({ color = '#000', iconSize = 'medium' }: locationTagProps) {
  const [colorText, setColorText] = useState(color);
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
      <LocationOnIcon fontSize={iconSize} />
      Georgia, Batumi
    </address>
  );
}

export default LocationTag;
