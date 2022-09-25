import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/pages/web.module.css';

const Web: NextPage = () => (
  <main className={styles.webPage}>
    <Typography variant='h4'>
      Web
    </Typography>
  </main>
);

export default Web;
