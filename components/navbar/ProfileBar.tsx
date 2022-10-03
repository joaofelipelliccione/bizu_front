import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Grid, Typography } from '@mui/material';
import ImgBtn from '../images/ImgBtn';
import donateIcon from '../../assets/navbar/donate_icon.png';
import styles from '../../styles/components/navbar.module.css';
import AvatarMenu from './AvatarMenu';

function ProfileBar() {
  const router = useRouter();

  return (
    <Grid
      container
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{
        // border: 'solid 2px blue',
        width: { md: '23%', lg: '20%' },
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
      <AvatarMenu />
    </Grid>
  );
}
export default ProfileBar;
