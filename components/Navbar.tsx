import * as React from 'react';
import {
  AppBar, Button, Container, Toolbar, Typography,
} from '@mui/material';
import ImgBtn from './Img/ImgBtn';
import logo from '../assets/logoDefault.png';
import styles from '../styles/components/navbar.module.css';

const Navbar = () => (
  <AppBar position="fixed" color={'primary'}>
    <Container maxWidth="xl">
      <Toolbar className={styles.toolbar}>
        <ImgBtn
          imgSrc={ logo }
          imgAlt="Logo bizu design"
          href="/"
          imgClassName={ styles.navbarLogo }
        />
        <Typography>Caixa de Pesquisa</Typography>
        <Button variant="text" color='secondary'>Entrar</Button>
      </Toolbar>
    </Container>
  </AppBar>
);
export default Navbar;
