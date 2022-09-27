import React from 'react';
import { useForm } from 'react-hook-form';
import { ISignInFormData } from '../../interfaces/users';

function useSignInForm() {
  const { register, handleSubmit } = useForm<ISignInFormData>();
  const onSubmit = React.useCallback((formValues: ISignInFormData) => {
    console.log(formValues);
  }, []);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
  };
}

export default useSignInForm;
