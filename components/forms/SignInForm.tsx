import * as React from 'react';
import {
  Button, Grid, TextField, Typography,
} from '@mui/material';
import Link from 'next/link';
import useSignInForm from '../../hooks/forms/useSignInForm';
import styles from '../../styles/pages/signIn.module.css';

const formInputs = [
  {
    id: 1, inputName: 'username', inputType: 'email', inputLabel: 'e-mail',
  },
  {
    id: 2, inputName: 'password', inputType: 'password', inputLabel: 'senha',
  },
];

export default function SignInForm() {
  const { register, onSubmit } = useSignInForm();
  // const { register, onSubmit, errors } = useSignInForm();

  return (
    <Grid
      container
      flexDirection={'column'}
      sx={{
        border: 'solid 2px blue',
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
        >
          acesse sua conta
        </Typography>
      </Grid>
      <Grid
        container
        flexDirection={'column'}
        sx={{
          border: 'solid 2px green',
        }}
      >
        {formInputs.map((element) => (
          <TextField
            key={element.id}
            required
            type={element.inputType}
            label={element.inputLabel}
            {...register(element.inputName as any)}
            variant="standard"
            size="small"
            margin="dense"
            fullWidth
            sx={{
              marginBottom: '1rem',
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
            marginTop: '1rem',
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
          }}
        >
          ainda não faço parte
        </Button>
        <Link href='/'>voltar</Link>
      </Grid>
    </Grid>
  );
}
