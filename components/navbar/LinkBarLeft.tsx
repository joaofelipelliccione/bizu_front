import * as React from 'react';
import { useRouter } from 'next/router';
import { Grid, IconButton, Tooltip } from '@mui/material';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import styles from '../../styles/components/navbar.module.css';

function LinkBarLeft() {
  const content = [
    {
      id: 1, pageName: 'mobile apps', path: '/mobile/apps', icon: <SmartphoneRoundedIcon />,
    },
    {
      id: 2, pageName: 'web apps', path: '/web/apps', icon: <LaptopRoundedIcon />,
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
        <Tooltip key={id} title={pageName}>
          <span>
            <IconButton
              aria-label={`Botão de acesso à página ${pageName}`}
              onClick={() => router.push(path)}
              disabled={router.pathname === path}
              sx={{
                alignSelf: 'center',
                width: 'fit-content',
              }}
            >
              {icon}
            </IconButton>
          </span>
        </Tooltip>
      ))}
    </Grid>
  );
}

export default LinkBarLeft;
