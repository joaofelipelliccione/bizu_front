import * as React from 'react';
import {
  Button, Grid, IconButton, TextField, Typography,
} from '@mui/material';
import Link from 'next/link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import useSignInForm from '../../hooks/forms/useSignInForm';

const formInputs = [
  {
    id: 1, inputName: 'username', inputType: 'email', inputLabel: 'e-mail',
  },
  {
    id: 2, inputName: 'password', inputType: 'password', inputLabel: 'senha',
  },
];

export default function SignInForm() {
  const { register, onSubmit, errors } = useSignInForm();

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
          id, inputType, inputLabel, inputName,
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
            error={!!errors[inputName]}
            helperText={errors[inputName] && errors[inputName].message }
            sx={{
              marginBottom: '1.5rem',
            }}
          />
        ))}
        <Button
          type="button"
          onClick={onSubmit}
          variant="contained"
          color="secondary"
          size="small"
          sx={{
            margin: '1rem 0 1.2rem 0',
            fontSize: '1.1rem',
          }}
        >
          acessar
        </Button>
        <Button
          type="button"
          // onClick={onSubmit}
          variant="contained"
          color="primary"
          size="small"
          sx={{
            width: '50%',
            alignSelf: 'center',
            fontSize: '1rem',
            marginBottom: '0.7rem',
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
