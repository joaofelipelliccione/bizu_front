import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/pages/mobile.module.css';

const Mobile: NextPage = () => (
  <main className={styles.mobilePage}>
    <Typography variant='h4'>
      Mobile
    </Typography>
  </main>
);

export default Mobile;
