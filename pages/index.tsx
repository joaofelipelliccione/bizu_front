import { Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/pages/home.module.css';

const Home: NextPage = () => (
  <main className={styles.homePageMain}>
    <Typography variant='h4'>
      Hello World!
    </Typography>
    <Link href="/routeToCopy" passHref>
      <Button variant="contained">Ir p/ Outra Rota</Button>
    </Link>
  </main>
);

export default Home;
