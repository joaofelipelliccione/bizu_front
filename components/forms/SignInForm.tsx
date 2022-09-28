import * as React from 'react';
import { Grid, Button, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
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
  const {
    control, onSubmit, errors,
  } = useSignInForm();

  return (
    <Grid container spacing={2}>
      <form onSubmit={onSubmit}>
        {formInputs.map((element) => (
          <Controller
            key={element.id}
            name={element.inputName as any}
            defaultValue = {''}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                type={element.inputType}
                onChange={onChange}
                value={value}
                label={element.inputLabel}
              />
            )}
          />
        ))}
        <Button type="submit">Fazer Login</Button>
      </form>
    </Grid>
  );
}
