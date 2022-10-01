import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignInFormData } from '../../interfaces/users';
import login from '../../services/POST/login';
import globalAlerts from '../../common/alerts';

function useSignInForm() {
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
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
    setIsFetching(true);
    login(formValues).then((data) => {
      switch (data.statusCode) {
      case 200:
        setIsFetching(false);
        router.push('/');
        globalAlerts('success', 'bottom', 'seja muito bem-vindo(a) :)', 2000);
        break;
      case 401:
        if (data.message.includes('não verificado')) {
          globalAlerts('warning', 'bottom', 'acabamos de te enviar um e-mail de verificação de conta! confere lá sua caixa de entrada e depois tente realizar o login novamente ;)', 8000);
          setIsFetching(false);
          break;
        }

        globalAlerts('error', 'bottom', 'parece que a senha informada não bate com a que temos aqui :(', 3200);
        setIsFetching(false);
        break;
      case 404:
        setIsFetching(false);
        globalAlerts('warning', 'bottom', 'parece que você ainda não possui uma conta com a gente...', 3200);
        router.push('/registrar/conta');
        break;
      default:
        setIsFetching(false);
        globalAlerts('error', 'bottom', 'ops, algo deu errado em seu login... tente novamente em alguns minutos!', 4500);
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

export default useSignInForm;
