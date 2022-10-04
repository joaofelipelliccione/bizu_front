import * as React from 'react';
// import { useRouter } from 'next/router';
import { AppBar, Toolbar } from '@mui/material';
import ImgBtn from '../images/ImgBtn';
import logo from '../../assets/logoDefault.png';
import styles from '../../styles/components/navbar.module.css';
import LinkBarLeft from './LinkBarLeft';
import SearchBar from './SearchBar';
import LinkBarRight from './LinkBarRight';
import AvatarMenu from './AvatarMenu';
import HamburgerMenu from './HamburgerMenu';

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
          width: '95%',
          height: '100%',
          alignSelf: 'center',
          justifyContent: 'space-around',
        }}
      >
        <ImgBtn
          imgSrc={ logo }
          imgAlt="Logo bizu design"
          href="/"
          imgClassName={ styles.navbarLogo }
        />
        <LinkBarLeft />
        <SearchBar />
        <LinkBarRight />
        <AvatarMenu />
        <HamburgerMenu />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
