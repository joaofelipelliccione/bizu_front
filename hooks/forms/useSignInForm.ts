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

  const { register, handleSubmit, formState: { errors } } = useForm<ISignInFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = React.useCallback((formValues: ISignInFormData) => {
    console.log(formValues);
    // CHAMAR API
    // FAZER O DISPATCH
  }, []);

  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
}

export default useSignInForm;
