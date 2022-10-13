import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import styles from '../styles/pages/donate.module.css';

const Donate: NextPage = () => (
  <main className={styles.donationsPage}>
    <Navbar />
    <Typography variant='h4'>
      Página de doação
    </Typography>
  </main>
);

export default Donate;
