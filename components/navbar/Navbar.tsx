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
        <LinkBarLeft />
        <SearchBar />
        <LinkBarRight />
        <AvatarMenu />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
