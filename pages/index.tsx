import { Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Link from 'next/link';
import globalAlerts from '../common/alerts';
import Navbar from '../components/navbar/Navbar';
import styles from '../styles/pages/home.module.css';

const Home: NextPage = () => (
  <main className={styles.homePageMain}>
    <Navbar />
    <Typography variant='h4'>
      Hello World!
    </Typography>
    <Link href="acessar/conta" passHref>
      <Button variant="contained">Fazer Login</Button>
    </Link>
    <Link href="mobile/apps" passHref>
      <Button variant="contained">Ir p/ Mobile</Button>
    </Link>
    <Link href="web/apps" passHref>
      <Button variant="contained">Ir p/ Web</Button>
    </Link>
    <Button
      variant="contained"
      onClick={() => globalAlerts('warning', 'bottom', 'acabamos de te enviar um e-mail de verificação de conta! confere lá sua caixa de entrada e depois tente realizar o login novamente ;)', 8000)}
    >
      Alerta
    </Button>
  </main>
);

export default Home;
