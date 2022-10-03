import * as React from 'react';
// import { useRouter } from 'next/router';
import { AppBar, Toolbar } from '@mui/material';
import ImgBtn from '../images/ImgBtn';
import logo from '../../assets/logoDefault.png';
import styles from '../../styles/components/navbar.module.css';
import LinkBar from './LinkBar';
import SearchBar from './SearchBar';
import ProfileBar from './ProfileBar';

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
          width: '90%',
          height: '100%',
          alignSelf: 'center',
          justifyContent: 'space-evenly',
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
        <ProfileBar />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
