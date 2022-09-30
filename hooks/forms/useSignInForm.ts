import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignInFormData } from '../../interfaces/users';
import login from '../../services/POST/login';
import globalAlerts from '../../common/alerts';

function useSignInForm() {
  // const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const router = useRouter();

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
    login(formValues).then((data) => {
      switch (data) {
      case 200:
        router.push('/');
        globalAlerts('success', 'login realizado com sucesso :)');
        break;
      case 401:
        console.log('Alerta: e-mail ou senha inválida :(');
        break;
      case 404:
        console.log('Alerta: Ainda não possui conta :(');
        router.push('/registrar/conta');
        break;
      default:
        console.log('Alerta: Algo deu errado');
      }
    });
  }, [router]);

  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
    reset,
    // isFetching,
  };
}

export default useSignInForm;
