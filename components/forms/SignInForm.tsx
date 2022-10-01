import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Button, Grid, IconButton, LinearProgress, TextField, Typography,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import useSignInForm from '../../hooks/forms/useSignInForm';

export default function SignInForm() {
  const router = useRouter();
  const {
    register, onSubmit, errors, isFetching,
  } = useSignInForm();

  const formInputs = [
    {
      id: 1,
      inputName: 'username',
      inputType: 'email',
      inputLabel: 'e-mail',
      errorMessage: errors.username?.message,
    },
    {
      id: 2,
      inputName: 'password',
      inputType: 'password',
      inputLabel: 'senha super secreta',
      errorMessage: errors.password?.message,
    },
  ];

  return (
    <Grid
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
          LOGIN
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
        <Link href="/" passHref>
          <Typography
            color='primary'
            alignSelf={'flex-end'}
            variant="subtitle1"
            sx={{
              marginTop: '-1rem',
              cursor: 'pointer',
              fontSize: '0.8rem',
            }}
          >
            esqueci minha senha :(
          </Typography>
        </Link>
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
          acessar
        </Button>
        {isFetching && <LinearProgress />}
        <Button
          type="button"
          onClick={() => router.push('/registrar/conta')}
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
          ainda não faço parte
        </Button>
        <Link href="/" passHref>
          <IconButton
            aria-label="homepage"
            sx={{
              alignSelf: 'center',
              width: 'fit-content',
            }}
          >
            <HomeRoundedIcon />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
}
