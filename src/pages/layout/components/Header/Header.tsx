import { AppBar, Box, Link, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import styles from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import classNames from 'classnames';
import NavLinkCustom from '../../../../components/NavLink/NavLinkCustom';
import { routerPagesData, upperNavHeaderData } from '../../../../data/data';
import LocationTag from '../../../../components/LocationTag/LocationTag';
import Social from '../../../../components/Social/Social';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import SearchBarCustom from '../../../../components/SearchBarCustom/SearchBarCustom';
import Input from '../../../../components/Input/Input';
import { useUtilityStore } from '../../../../store/zustandStore';
interface IHeaderProps {
  setMenu: (type: 'filter' | 'menu' | 'cart') => void;
}

function Header({ setMenu }: IHeaderProps) {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);
  const [isNavVertical, setIsNavVertical] = useState(false);
  const verticalMenuRef = useRef(null);
  useClickOutside(verticalMenuRef, () => {
    if (isNavVertical) setIsNavVertical(false);
  });
  const location = useLocation();
  const isCollectionLocation = location.pathname.split('/')[1] === 'collection';
  const iconsFontSize = { xs: '33px', sm: '33px', md: '35px', lg: '38px' };
  const classLogo = classNames(styles.logo, isSearch && styles.hide);
  const classNavVertical = classNames(
    styles.navigation__list_vertical,
    !isNavVertical && styles.hide
  );

  const { searchText, setSearchText } = useUtilityStore();
  const handleSetSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  return (
    <AppBar component="header" position="relative" className={styles.header} color={'transparent'}>
      <nav className={styles['up-navigation']}>
        <div className={styles.info}>
          {' '}
          {upperNavHeaderData.map((item) => (
            <NavLinkCustom
              key={item.url + item.content}
              url={item.url}
              content={item.content}
              color={'#fff'}
            />
          ))}
        </div>
        <div className={styles.contact}>
          {
            //window.innerWidth > 600 && <LocationTag color="#fff" />
          }
          <Social color="#fff" />
        </div>
      </nav>
      <nav className={styles.toolbar}>
        <div className={styles.searchbar}>
          <MenuIcon
            sx={{ display: { xs: 'block', md: 'none', lg: 'none' }, fontSize: iconsFontSize }}
            color={'action'}
            onClick={() => setMenu('menu')}
            onMouseDown={(e) => {}}
          />
          {
            !isSearch && isCollectionLocation && (
              <SearchIcon
                sx={{
                  display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' },
                  fontSize: iconsFontSize,
                }}
                color={'action'}
                onClick={() => {
                  setIsSearch(true);
                }}
              />
            )

            //<SearchBar />
          }
          {isSearch && isCollectionLocation && (
            <Input
              isFocus={true}
              placeholder={'Поиск по каталогу'}
              onBlur={() => {
                setIsSearch(false);
              }}
              onChange={(e) => {
                handleSetSearchText(e);
              }}
            />
          )}
          {
            //<SearchBarCustom />
          }
        </div>
        <div className={styles.title}>
          <Typography
            className={classLogo}
            component={Link}
            href={'/'}
            underline={'none'}
            sx={{
              fontSize: { xs: '24px', sm: '38px', md: '38px', lg: '48px' },
              fontWeight: 600,
              color: 'black',
            }}
          >
            @SUGAKOVGENNADII
          </Typography>
          <h2 className={styles.title_h2}>Каталог изделий из натуральной кожи</h2>
        </div>

        <Box className={styles.icons}>
          <FavoriteIcon
            className={styles.favorite}
            onClick={() => {
              navigate('/favorites');
            }}
            sx={{ fontSize: iconsFontSize }}
            color={'error'}
          />
          <ShoppingCartOutlinedIcon
            className={styles.cart}
            sx={{ fontSize: iconsFontSize }}
            color={'error'}
            onClick={() => {
              setMenu('cart');
            }}
          />
        </Box>
      </nav>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          {routerPagesData.slice(0, 5).map((item) => (
            <li className={styles.navigation__list_item} key={item.url + item.content}>
              <NavLinkCustom url={item.url} content={item.content} color={'#000'} />
            </li>
          ))}
          <li
            className={styles.navigation__list_item}
            onClick={(e) => {
              //console.log('button event');
              e.stopPropagation();
              setIsNavVertical(!isNavVertical);
            }}
          >
            <button type="button" className={styles.navigation__button}>
              Еще{' '}
              <svg
                className={
                  !isNavVertical
                    ? styles['navigation__button_icon-rotate']
                    : styles['navigation__button_icon']
                }
                width="15px"
                height="15px"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M5.64645 8.64645c.19526-.19527.51184-.19527.7071 0L12 14.2929l5.6464-5.64645c.1953-.19527.5119-.19527.7072 0 .1952.19526.1952.51184 0 .7071L12 15.7071 5.64645 9.35355c-.19527-.19526-.19527-.51184 0-.7071Z"
                ></path>
              </svg>
            </button>
            <ul className={classNavVertical} ref={verticalMenuRef}>
              {routerPagesData.slice(6, routerPagesData.length - 1).map((item) => (
                <li className={styles.navigation__list_item} key={item.url + item.content}>
                  <NavLinkCustom url={item.url} content={item.content} color={'#000'} />
                </li>
              ))}
            </ul>
          </li>

          <li
            className={styles.navigation__list_item}
            key={
              routerPagesData[routerPagesData.length - 1].url +
              routerPagesData[routerPagesData.length - 1].content
            }
          >
            <NavLinkCustom
              url={routerPagesData[routerPagesData.length - 1].url}
              content={routerPagesData[routerPagesData.length - 1].content}
              color={'#000'}
            />
          </li>
        </ul>
      </nav>
    </AppBar>
  );
}

export default Header;
