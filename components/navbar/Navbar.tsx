import * as React from 'react';
import { AppBar, CircularProgress, Toolbar } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../hooks/redux/useRedux';
// import { useRouter } from 'next/router';
import ImgBtn from '../images/ImgBtn';
import LinkBarLeft from './LinkBarLeft';
import SearchBar from './SearchBar';
import LinkBarRight from './LinkBarRight';
import AvatarMenu from './AvatarMenu';
import HamburgerMenu from './HamburgerMenu';
import getUserInfo from '../../services/GET/getUserInfo';
import logo from '../../assets/logoDefault.png';
import globalAlerts from '../../common/alerts';
import styles from '../../styles/components/navbar.module.css';
import { setUsersInfoAC } from '../../redux/users/actions';

function Navbar() {
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const currentUserInfo = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  // const router = useRouter();

  React.useEffect(() => {
    if (currentUserInfo.id === null) {
      setIsFetching(true);
      getUserInfo().then((data) => {
        if ('statusCode' in data) {
          const payload = {
            id: null,
            username: null,
            email: null,
            profilePicture: null,
          };
          dispatch(setUsersInfoAC(payload));
          globalAlerts('error', 'bottom', 'sessão expirada :(', 2500);
          setIsFetching(false);
        }

        if ('username' in data) {
          const payload = {
            id: data.id,
            username: data.username,
            email: data.email,
            profilePicture: data.profilePicture,
          };

          dispatch(setUsersInfoAC(payload));
          setIsFetching(false);
        }
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
        {isFetching ? <CircularProgress /> : <AvatarMenu /> }
        <HamburgerMenu />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
