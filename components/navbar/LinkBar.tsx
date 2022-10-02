import * as React from 'react';
import { useRouter } from 'next/router';
import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
// import styles from '../../styles/components/navbar.module.css';

function LinkBar() {
  const router = useRouter();

  const links = [
    {
      id: 1,
      linkHref: '/',
      linkName: 'início',
    },
    {
      id: 2,
      linkHref: '/mobile/apps',
      linkName: 'mobile apps',
    },
    {
      id: 3,
      linkHref: '/web/apps',
      linkName: 'web apps',
    },
  ];

  return (
    <Grid
      container
      justifyContent={'space-between'}
      sx={{
        width: {
          xs: '75%', sm: '45%', md: '30%', lg: '22%',
        },
      }}
    >
      {links.map(({ id, linkHref, linkName }) => (
        <Link
          key={id}
          href={linkHref}
          passHref
        >
          <Typography
            fontWeight={'500'}
            sx={{
              color: router.pathname === linkHref ? '#496874' : '#000000',
              cursor: 'pointer',
              '&:hover': {
                color: '#496874',
                transitionDuration: '0.3s',
              },
            }}
          >
            {linkName}
          </Typography>
        </Link>
      ))}
    </Grid>
  );
}
export default LinkBar;
