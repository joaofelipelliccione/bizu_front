import * as React from 'react';
import { useRouter } from 'next/router';
import { Grid, IconButton } from '@mui/material';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import Link from 'next/link';
import styles from '../../styles/components/navbar.module.css';

function LinkBarLeft() {
  const content = [
    {
      id: 1, pageName: 'mobile', path: '/mobile/apps', icon: <SmartphoneRoundedIcon />,
    },
    {
      id: 2, pageName: 'web', path: '/web/apps', icon: <LaptopRoundedIcon />,
    },
  ];

  const router = useRouter();

  return (
    <Grid
      className={styles.linkBarLeft}
      container
      justifyContent={'space-between'}
      sx={{
        width: { md: '16%', lg: '12%' },
      }}
    >
      {content.map(({
        id, path, pageName, icon,
      }) => (
        <Link key={id} href={path} passHref>
          <IconButton
            aria-label={`Botão de acesso à página ${pageName}`}
            disabled={router.pathname === path}
            sx={{
              alignSelf: 'center',
              width: 'fit-content',
            }}
          >
            {icon}
          </IconButton>
        </Link>
      ))}
    </Grid>
  );
}

export default LinkBarLeft;
