import * as React from 'react';
import { Button, TextField } from '@mui/material';
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
  const { register, onSubmit } = useSignInForm();
  // const { register, onSubmit, errors } = useSignInForm();

  return (
    <form onSubmit={onSubmit}>
      {formInputs.map((element) => (
        <TextField
          key={element.id}
          required
          id={element.inputName}
          type={element.inputType}
          label={element.inputLabel}
          fullWidth
          margin="dense"
          {...register(element.inputName as any)}
        />
      ))}
      <Button type="submit">Fazer Login</Button>
    </form>
  );
}
