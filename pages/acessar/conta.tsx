import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../../styles/pages/signIn.module.css';

const Conta: NextPage = () => (
  <main className={styles.signInPage}>
    <Typography variant='h4'>
      Faça Login
    </Typography>
  </main>
);

export default Conta;
