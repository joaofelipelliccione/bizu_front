import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/pages/donate.module.css';

const Donate: NextPage = () => (
  <main className={styles.donationsPage}>
    <Typography variant='h4'>
      Página de doação
    </Typography>
  </main>
);

export default Donate;
