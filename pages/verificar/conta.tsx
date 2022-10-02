import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import {
  Button, IconButton, Grid, Typography,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import styles from '../../styles/pages/verifySignUpPage.module.css';

const Conta: NextPage = () => (
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
        padding: '2rem 1rem',
      }}
    >
      <Grid item>
        <Typography
          variant="h1"
          color={'primary'}
          sx={{
            fontSize: {
              xs: '1.2rem', sm: '1.5rem', md: '1.9rem', lg: '2.1rem',
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
      <Link href="/acessar/conta" passHref>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          size="small"
          sx={{
            width: '60%',
          }}
        >
          realizar login
        </Button>
      </Link>
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

export default Conta;
