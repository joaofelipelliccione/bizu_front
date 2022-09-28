import React from 'react';
import type { NextPage } from 'next';
import { Controller } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import useSignInForm from '../../hooks/forms/useSignInForm';
import styles from '../../styles/pages/signIn.module.css';

const Conta: NextPage = () => {
  const {
    control, onSubmit, errors, reset,
  } = useSignInForm();

  return (
    <main className={styles.signInPage}>
      <form onSubmit={onSubmit}>
        <Controller
          name={'username'}
          defaultValue = {''}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField type={'email'} onChange={onChange} value={value} label={'e-mail'} />
          )}
        />
        <Controller
          name={'password'}
          defaultValue = {''}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField type={'password'} onChange={onChange} value={value} label={'senha'} />
          )}
        />
        <Button type="submit">Fazer Login</Button>
      </form>
    </main>
  );
};

export default Conta;
