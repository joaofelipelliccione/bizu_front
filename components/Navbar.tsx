import * as React from 'react';
import { useRouter } from 'next/router';
import {
  AppBar, Button, Container, Toolbar, Typography,
} from '@mui/material';
import ImgBtn from './Img/ImgBtn';
import logo from '../assets/logoDefault.png';
import styles from '../styles/components/navbar.module.css';

function Navbar() {
  const router = useRouter();

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
          <Typography>Caixa de Pesquisa de {router.pathname}</Typography>
          <Button variant="text" color='secondary'>Entrar</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
