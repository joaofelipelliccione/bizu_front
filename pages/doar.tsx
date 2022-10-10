import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/pages/doar.module.css';

const RouteToCopy: NextPage = () => (
  <main className={styles.donationsPage}>
    <Typography variant='h4'>
      Página de doação
    </Typography>
  </main>
);

export default RouteToCopy;
