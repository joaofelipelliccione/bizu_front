import * as React from 'react';
import { useRouter } from 'next/router';
import { Grid, IconButton } from '@mui/material';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import Link from 'next/link';
import styles from '../../styles/components/navbar.module.css';

function LinkBarLeft() {
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
      <Link href="/mobile/apps" passHref>
        <IconButton
          aria-label="Botão de acesso à página 'mobile'."
          disabled={router.pathname === '/mobile/apps'}
          sx={{
            alignSelf: 'center',
            width: 'fit-content',
          }}
        >
          <SmartphoneRoundedIcon />
        </IconButton>
      </Link>
      <Link href="/web/apps" passHref>
        <IconButton
          aria-label="Botão de acesso à página 'web'."
          disabled={router.pathname === '/web/apps'}
          sx={{
            alignSelf: 'center',
            width: 'fit-content',
          }}
        >
          <LaptopRoundedIcon />
        </IconButton>
      </Link>
    </Grid>
  );
}

export default LinkBarLeft;
