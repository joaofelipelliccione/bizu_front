import * as React from 'react';
// import { useRouter } from 'next/router';
import { AppBar, Toolbar } from '@mui/material';
import ImgBtn from '../images/ImgBtn';
import logo from '../../assets/logoDefault.png';
import styles from '../../styles/components/navbar.module.css';
import LinkBar from './LinkBar';
import SearchBar from './SearchBar';

function Navbar() {
  // const router = useRouter();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#A7B3B7',
        height: '5rem',
      }}
    >
      <Toolbar
        sx={{
          border: 'solid 2px green',
          height: '100%',
          justifyContent: 'space-around',
        }}
      >
        <ImgBtn
          imgSrc={ logo }
          imgAlt="Logo bizu design"
          href="/"
          imgClassName={ styles.navbarLogo }
        />
        <LinkBar />
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
