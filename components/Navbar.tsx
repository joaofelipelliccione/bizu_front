import * as React from 'react';
import {
  AppBar, Button, Container, Toolbar, Typography,
} from '@mui/material';

const Navbar = () => (
  <AppBar position="fixed" color={'primary'}>
    <Container maxWidth="xl">
      <Toolbar sx={{
        border: 'solid 2px orange',
        display: 'flex',
        justifyContent: 'space-around',
        height: '4rem',
      }}>
        <Typography>Logo</Typography>
        <Typography>Caixa de Pesquisa</Typography>
        <Button variant="text" color='secondary'>Entrar</Button>
      </Toolbar>
    </Container>
  </AppBar>
);
export default Navbar;
