import React from 'react';
import type { NextPage } from 'next';
import { Grid } from '@mui/material';
import styles from '../../styles/pages/signUp.module.css';

const Conta: NextPage = () => (
  <Grid
    className={styles.verifySignUpPage}
    container
    justifyContent={'center'}
    alignItems={'center'}
    height="100vh"
  >
    E-MAIL DE VERIFICAÇÃO ENVIADO PORRA!
  </Grid>
);

export default Conta;
