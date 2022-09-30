import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignInFormData } from '../../interfaces/users';

function useSignInForm() {
  const validationSchema = React.useMemo(() => (
    yup.object().shape({
      username: yup
        .string()
        .email('formato inválido, tente algo como ze@dubizu.com')
        .required('campo obrigatório'),
      password: yup
        .string()
        .required('campo obrigatório')
        .matches(/^((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'formato inválido'),
    })
  ), []);

  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm<ISignInFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = React.useCallback((formValues: ISignInFormData) => {
    // CHAMAR API
    console.log(formValues);
    // FAZER O DISPATCH
  }, []);

  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
    reset,
  };
}

export default useSignInForm;
