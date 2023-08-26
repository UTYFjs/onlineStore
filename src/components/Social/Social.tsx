import React, { useState } from 'react';
import styles from './Social.module.scss';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

interface socialProps {
  color?: string;
  iconSize?: 'large' | 'medium' | 'small';
}
function Social({ color = '#000', iconSize = 'medium' }: socialProps) {
  const [colorIg, setColorIg] = useState(color);
  const [colorTg, setColorTg] = useState(color);
  const [colorFb, setColorFb] = useState(color);
  const [colorWs, setColorWs] = useState(color);
  return (
    <>
      <InstagramIcon
        onClick={() => window.open('https://ig.me/m/sugakovgennadii')}
        className={styles.icon}
        fontSize={iconSize}
        style={{ color: colorIg }}
        onMouseOver={() => {
          setColorIg('#FF5252');
        }}
        onMouseOut={() => {
          setColorIg(color);
        }}
      />
      <TelegramIcon
        onClick={() => window.open('https://t.me/utyfjs')}
        className={styles.icon}
        fontSize={iconSize}
        style={{ color: colorTg }}
        onMouseOver={() => {
          setColorTg('#FF5252');
        }}
        onMouseOut={() => {
          setColorTg(color);
        }}
      />
      <FacebookIcon
        onClick={() => window.open('https://m.me/henadzi.suhakou')}
        className={styles.icon}
        fontSize={iconSize}
        style={{ color: colorFb }}
        onMouseOver={() => {
          setColorFb('#FF5252');
        }}
        onMouseOut={() => {
          setColorFb(color);
        }}
      />
      <WhatsAppIcon
        onClick={() => window.open('https://wa.me/995595909226')}
        className={styles.icon}
        fontSize={iconSize}
        style={{ color: colorWs }}
        onMouseOver={() => {
          setColorWs('#FF5252');
        }}
        onMouseOut={() => {
          setColorWs(color);
        }}
      />
    </>
  );
}

export default Social;
