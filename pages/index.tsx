import { Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Link from 'next/link';
import globalAlerts from '../common/alerts';
import styles from '../styles/pages/home.module.css';

const Home: NextPage = () => (
  <main className={styles.homePageMain}>
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
      onClick={() => globalAlerts('success', 'login realizado com sucesso :)')}
    >
      Alerta
    </Button>
  </main>
);

export default Home;
