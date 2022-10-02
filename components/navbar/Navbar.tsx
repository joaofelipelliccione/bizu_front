import * as React from 'react';
import { useRouter } from 'next/router';
import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import getSearchBarApps from '../../services/GET/getSearchBarApps';
import { ISearchBarAppsResult } from '../../interfaces/apps';
import ImgBtn from '../images/ImgBtn';
import logo from '../../assets/logoDefault.png';
import styles from '../../styles/components/navbar.module.css';
import LinkBar from './LinkBar';

function Navbar() {
  const router = useRouter();
  const [searchBarApps, setSearchBarApps] = React.useState<ISearchBarAppsResult[]>([]);

  React.useEffect(() => {
    getSearchBarApps('all').then((data) => setSearchBarApps(data as unknown as ISearchBarAppsResult[]));
    console.log(searchBarApps);
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
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
