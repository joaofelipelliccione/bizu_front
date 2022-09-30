import * as React from 'react';
import { useRouter } from 'next/router';
import {
  AppBar, Button, Container, Toolbar, Typography,
} from '@mui/material';
import ImgBtn from './images/ImgBtn';
import logo from '../assets/logoDefault.png';
import styles from '../styles/components/navbar.module.css';
import getSearchBarApps from '../services/GET/getSearchBarApps';
import { ISearchBarAppsResult } from '../interfaces/apps';

function Navbar() {
  const router = useRouter();
  const [searchBarApps, setSearchBarApps] = React.useState<ISearchBarAppsResult[]>([]);

  React.useEffect(() => {
    getSearchBarApps('all').then((data) => setSearchBarApps(data as unknown as ISearchBarAppsResult[]));
    console.log(searchBarApps);
  }, []);

  return (
    <AppBar position="fixed" color={'primary'}>
      <Container maxWidth="xl">
        <Toolbar className={styles.toolbar}>
          <ImgBtn
            imgSrc={ logo }
            imgAlt="Logo bizu design"
            href="/"
            imgClassName={ styles.navbarLogo }
          />
          <Typography>Caixa de Pesquisa d {router.pathname}</Typography>
          <Button variant="text" color='secondary'>Entrar</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
