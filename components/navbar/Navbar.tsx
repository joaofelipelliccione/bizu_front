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
import getUserInfo from '../../services/GET/getUserInfo';
import { IUser } from '../../interfaces/users';
import globalAlerts from '../../common/alerts';

function Navbar() {
  const [userInfo, setUserInfo] = React.useState<IUser>();
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  // const router = useRouter();

  React.useEffect(() => {
    setIsFetching(true);
    getUserInfo().then((data) => {
      if (data.statusCode === 401) {
        globalAlerts('error', 'bottom', 'sessão expirada :(', 3500);
        setIsFetching(false);
      } else {
        setUserInfo(data.message as unknown as IUser);
        setIsFetching(false);
        console.log(userInfo);
        console.log(isFetching);
      }
    });
  }, []);

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
        <AvatarMenu />
        <HamburgerMenu />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
