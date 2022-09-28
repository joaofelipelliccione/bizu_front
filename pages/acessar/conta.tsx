import React from 'react';
import type { NextPage } from 'next';
import styles from '../../styles/pages/signIn.module.css';
import SignInForm from '../../components/forms/SignInForm';

const Conta: NextPage = () => (
  <main className={styles.signInPage}>
    <SignInForm />
  </main>
);

export default Conta;
