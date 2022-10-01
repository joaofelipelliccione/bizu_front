import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import signUp from '../../services/POST/signUp';
import { ISignUpFormData } from '../../interfaces/users';
import globalAlerts from '../../common/alerts';

function useSignUpForm() {
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const router = useRouter();

  const validationSchema = React.useMemo(() => (
    yup.object().shape({
      username: yup
        .string()
        .min(3, 'o nome deve possuir, no mínimo, 3 caracteres')
        .required('campo obrigatório'),
      email: yup
        .string()
        .email('formato inválido, tente algo como ze@dubizu.com')
        .required('campo obrigatório'),
      password: yup
        .string()
        .required('campo obrigatório')
        .matches(/^((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'deve possuir ao menos 8 caracteres, um número e uma letra maiúscula.'),
    })
  ), []);

  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm<ISignUpFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = React.useCallback((formValues: ISignUpFormData) => {
    setIsFetching(true);
    signUp(formValues).then((data) => {
      switch (data.statusCode) {
      case 201:
        setIsFetching(false);
        router.push('/verificar/conta');
        break;
      case 409:
        setIsFetching(false);
        globalAlerts('warning', 'bottom', 'parece que você já possui uma conta com a gente...', 3500);
        router.push('/acessar/conta');
        break;
      default:
        setIsFetching(false);
        globalAlerts('error', 'bottom', 'ops, algo deu errado durante a criação da conta... tente novamente em alguns minutos!', 4500);
      }
    });
  }, [router]);

  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
    reset,
    isFetching,
  };
}

export default useSignUpForm;
