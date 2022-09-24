import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/pages/routeToCopy.module.css';

const RouteToCopy: NextPage = () => (
  <main className={styles.routeToCopyPage}>
    <Typography variant='h4'>
      Copie esse arquivo e crie novas rotas!
    </Typography>
  </main>
);

export default RouteToCopy;
