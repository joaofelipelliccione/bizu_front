import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Grid, Typography } from '@mui/material';
import ImgBtn from '../images/ImgBtn';
import donateIcon from '../../assets/navbar/donate_icon.png';
import styles from '../../styles/components/navbar.module.css';

function LinkBarRight() {
  const router = useRouter();

  return (
    <Grid
      container
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{
        width: { md: '18%', lg: '14%' },
      }}
    >
      <Link
        href='/'
        passHref
      >
        <Typography
          fontWeight={'500'}
          sx={{
            color: '#000000',
            cursor: 'pointer',
            '&:hover': {
              color: '#496874',
              transitionDuration: '0.3s',
            },
          }}
        >
          propósito
        </Typography>
      </Link>
      <ImgBtn
        imgSrc={ donateIcon }
        imgAlt="Ícone de suporte financeiro"
        href="/"
        imgClassName={ styles.donateIcon }
      />
    </Grid>
  );
}
export default LinkBarRight;
