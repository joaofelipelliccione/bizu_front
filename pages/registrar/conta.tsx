import React from 'react';
import type { NextPage } from 'next';
import { Grid } from '@mui/material';
import styles from '../../styles/pages/signUp.module.css';
import SignUpForm from '../../components/forms/SignUpForm';

const Conta: NextPage = () => (
  <Grid
    className={styles.signUpPage}
    container
    justifyContent={'center'}
    alignItems={'center'}
    height="100vh"
  >
    <SignUpForm />
  </Grid>
);

export default Conta;
