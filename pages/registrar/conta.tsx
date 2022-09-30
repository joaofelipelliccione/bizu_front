import React from 'react';
import type { NextPage } from 'next';
import { Grid } from '@mui/material';
import styles from '../../styles/pages/signUp.module.css';

const Conta: NextPage = () => (
  <Grid
    className={styles.signUpPage}
    container
    justifyContent={'center'}
    alignItems={'center'}
    height="100vh"
  >
    PÁGINA DE SIGN UP
  </Grid>
);

export default Conta;
