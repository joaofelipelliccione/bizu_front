import * as React from 'react';
import { useRouter } from 'next/router';
import {
  AppBar, Toolbar, Button, LinearProgress,
} from '@mui/material';
import bizuAxios from '../../services/bizuAxios';
import { useAppSelector, useAppDispatch } from '../../hooks/redux/useRedux';
import { setUsersInfoAC } from '../../redux/users/actions';
import { navbarLoaderAC } from '../../redux/navbarLoader/actions';
import ImgBtn from '../images/ImgBtn';
import LinkBarLeft from './LinkBarLeft';
import SearchBar from './SearchBar';
import LinkBarRight from './LinkBarRight';
import AvatarMenu from './AvatarMenu';
import HamburgerMenu from './HamburgerMenu';
// import getUserInfo from '../../services/GET/getUserInfo';
import logo from '../../assets/logoDefault.png';
import styles from '../../styles/components/navbar.module.css';

function Navbar() {
  const router = useRouter();
  const currentUserInfo = useAppSelector((state) => state.users);
  const isNavbarLoaderActive = useAppSelector((state) => state.navbarLoader.isActive);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!currentUserInfo.id) {
      dispatch(navbarLoaderAC(true));
      bizuAxios.get('/users/current')
        .then(({ data }) => {
          const payload = {
            id: data.id,
            username: data.username,
            email: data.email,
            profilePicture: data.profilePicture,
          };
          dispatch(setUsersInfoAC(payload));
          dispatch(navbarLoaderAC(false));
        })
        .catch(() => {
          const payload = {
            id: null,
            username: null,
            email: null,
            profilePicture: null,
          };
          dispatch(setUsersInfoAC(payload));
          dispatch(navbarLoaderAC(false));
        });
    }
  }, [currentUserInfo.id, dispatch]);

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
          width: {
            xs: '100%', sm: '95%', md: '95%', lg: '95%',
          },
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
        {!currentUserInfo.id ? (
          <Button
            className={styles.enterBtn}
            onClick={() => router.push('/acessar/conta')}
            color='secondary'
            variant="contained"
            sx={{
              border: 'solid 1px #FFFFFF',
              borderRadius: '36px',
              opacity: '0.65',
              padding: '0.3rem 1.8rem',
            }}
          >
          entrar
          </Button>
        ) : (
          <AvatarMenu />
        )}
        <HamburgerMenu />
      </Toolbar>
      {isNavbarLoaderActive && <LinearProgress color='secondary' />}
    </AppBar>
  );
}

export default Navbar;
