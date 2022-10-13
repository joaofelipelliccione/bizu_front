import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  Button, IconButton, Grid, Typography,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import styles from '../../styles/pages/verifySignUpPage.module.css';

const Conta: NextPage = () => {
  const router = useRouter();

  return (
    <Grid
      className={styles.verifySignUpPage}
      container
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      height="100vh"
    >
      <Grid
        container
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          border: 'solid 2.5px #496874',
          backgroundColor: '#FFFFFF',
          borderRadius: '7px',
          width: {
            xs: '85%', sm: '65%', md: '70%', lg: '85%',
          },
          marginBottom: '2.5rem',
          padding: '1.5rem 1rem',
        }}
      >
        <Grid item>
          <Typography
            variant="h1"
            color={'primary'}
            sx={{
              fontSize: {
                xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem',
              },
              textAlign: 'center',
              marginBottom: '1.5rem',
            }}
          >
        tá quase... acabamos de te enviar um e-mail de verificação de conta!
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h2"
            color={'secondary'}
            alignSelf={'center'}
            sx={{
              textAlign: 'center',
            }}
          >
          caso não tenha o recebido, realize o login para que lhe enviemos um novo
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={'space-evenly'}
        sx={{
          width: {
            xs: '60%', sm: '35%', md: '35%', lg: '35%',
          },
        }}
      >
        <Button
          type="button"
          onClick={() => router.push('/acessar/conta')}
          variant="contained"
          color="secondary"
          size="small"
          sx={{
            width: '60%',
          }}
        >
          realizar login
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
};

export default Conta;
