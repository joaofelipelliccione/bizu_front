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
        globalAlerts('success', 'bottom', 'seja muito bem-vindo(a) :)', 2500);
        break;
      case 401:
        globalAlerts('error', 'bottom', 'parece que sua senha está errada...', 2500);
        break;
      case 404:
        globalAlerts('warning', 'bottom', 'parece que você ainda não possui uma conta com a gente...', 3000);
        router.push('/registrar/conta');
        break;
      default:
        globalAlerts('error', 'bottom', 'ops, algo deu errado em seu login... tente novamente em alguns minutos!', 4500);
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
