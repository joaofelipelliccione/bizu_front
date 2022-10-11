import * as React from 'react';
import { useRouter } from 'next/router';
import {
  Button, Grid, IconButton, LinearProgress, TextField, Typography,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import useSignUpForm from '../../hooks/forms/useSignUpForm';
import styles from '../../styles/pages/signUp.module.css';

export default function SignUpForm() {
  const router = useRouter();
  const {
    register, onSubmit, errors, isFetching,
  } = useSignUpForm();

  const formInputs = [
    {
      id: 1,
      inputName: 'username',
      inputType: 'text',
      inputLabel: 'nome',
      errorMessage: errors.username?.message,
    },
    {
      id: 2,
      inputName: 'email',
      inputType: 'email',
      inputLabel: 'e-mail',
      errorMessage: errors.email?.message,
    },
    {
      id: 3,
      inputName: 'password',
      inputType: 'password',
      inputLabel: 'senha super secreta',
      errorMessage: errors.password?.message,
    },
  ];

  return (
    <Grid
      className={styles.signUpForm}
      container
      flexDirection={'column'}
      sx={{
        width: {
          xs: '75%', sm: '50%', md: '45%', lg: '30%',
        },
      }}
    >
      <Grid
        item
      >
        <Typography
          variant='h1'
          color={'primary'}
          sx={{
            marginBottom: '3rem',
          }}
        >
          FAÇA PARTE
        </Typography>
      </Grid>
      <Grid
        container
        flexDirection={'column'}
      >
        {formInputs.map(({
          id, inputType, inputLabel, inputName, errorMessage,
        }) => (
          <TextField
            key={id}
            required
            type={inputType}
            label={inputLabel}
            {...register(inputName as any)}
            variant="standard"
            size="small"
            color='primary'
            fullWidth
            error={!!errorMessage}
            helperText={errorMessage}
            sx={{
              marginBottom: '1.5rem',
            }}
          />
        ))}
        <Typography
          color='primary'
          alignSelf={'flex-start'}
          variant="subtitle1"
          sx={{
            fontSize: '0.85rem',
          }}
        >
            ao clicar no botão abaixo, você aceita nossa política de privacidade e termos de uso!
        </Typography>
        <Button
          type="button"
          onClick={onSubmit}
          variant="contained"
          color="secondary"
          size="small"
          disabled={isFetching}
          sx={{
            margin: '1.5rem 0 0 0',
            fontSize: '1rem',
          }}
        >
          aceitar e criar conta
        </Button>
        {isFetching && <LinearProgress sx={{ borderRadius: '3px' }} />}
        <Button
          type="button"
          onClick={() => router.push('/acessar/conta')}
          variant="contained"
          color="primary"
          size="small"
          sx={{
            width: {
              xs: '70%', sm: '55%', md: '50%', lg: '50%',
            },
            alignSelf: 'center',
            fontSize: '0.9rem',
            margin: '1.2rem 0 0.7rem 0',
          }}
        >
          voltar
        </Button>
        <IconButton
          aria-label="homepage"
          onClick={() => router.push('/')}
          sx={{
            alignSelf: 'center',
            width: 'fit-content',
          }}
        >
          <HomeRoundedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
