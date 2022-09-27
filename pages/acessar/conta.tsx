import React from 'react';
import type { NextPage } from 'next';
import useSignInForm from '../../hooks/forms/useSignInForm';
import styles from '../../styles/pages/signIn.module.css';

const Conta: NextPage = () => {
  const { register, onSubmit, errors } = useSignInForm();

  return (
    <main className={styles.signInPage}>
      <form onSubmit={onSubmit}>
        <input {...register('username')} placeholder="e-mail" />
        <p>{errors.username?.message}</p>
        <input {...register('password')} placeholder="senha" />
        <p>{errors.password?.message}</p>
        <button type="submit">
        Fazer Login
        </button>
      </form>
    </main>
  );
};

export default Conta;
