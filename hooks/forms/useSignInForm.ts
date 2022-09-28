import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ISignInFormData } from '../../interfaces/users';

function useSignInForm() {
  const validationSchema = React.useMemo(() => (
    yup.object().shape({
      username: yup
        .string()
        .email('Formato de e-mail porra!')
        .required('E-mail obrigatório'),
      password: yup
        .string()
        .matches(/^((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Endireita a senha!')
        .required('Senha obrigatória'),
    })
  ), []);

  const {
    control, handleSubmit, formState: { errors }, reset,
  } = useForm<ISignInFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = React.useCallback((formValues: ISignInFormData) => {
    console.log(formValues);
    // CHAMAR API
    // FAZER O DISPATCH
  }, []);

  return {
    control,
    errors,
    onSubmit: handleSubmit(onSubmit),
    reset,
  };
}

export default useSignInForm;