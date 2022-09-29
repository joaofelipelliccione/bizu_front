import React from 'react';
import type { NextPage } from 'next';
import { Grid } from '@mui/material';
import SignInForm from '../../components/forms/SignInForm';
import styles from '../../styles/pages/signIn.module.css';

const Conta: NextPage = () => (
  <Grid
    className={styles.signInPage}
    container
    justifyContent={'center'}
  >
    <SignInForm />
  </Grid>
);

export default Conta;
