import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';

interface IProps {
  btnText?: string;
}

export default function LoginBtn(props: IProps) {
  const { btnText = 'entrar' } = props;
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/acessar/conta')}
      color='secondary'
      variant="contained"
      sx={{
        border: 'solid 1px #FFFFFF',
        borderRadius: '36px',
        opacity: '0.65',
        padding: '0.3rem 1.8rem',
      }}
    >
      {btnText}
    </Button>
  );
}
