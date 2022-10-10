import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Box, IconButton, Menu, MenuItem,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import styles from '../../styles/components/navbar.module.css';

function HamburgerMenu() {
  const content = [
    {
      id: 1, pageName: 'login', path: '/acessar/conta', icon: <LoginRoundedIcon sx={{ width: '1.2rem' }} />,
    },
    {
      id: 2, pageName: 'mobile', path: '/mobile/apps', icon: <SmartphoneRoundedIcon sx={{ width: '1.2rem' }} />,
    },
    {
      id: 3, pageName: 'web', path: '/web/apps', icon: <LaptopRoundedIcon sx={{ width: '1.2rem' }} />,
    },
    {
      id: 4, pageName: 'donations', path: '/', icon: <ShowChartRoundedIcon sx={{ width: '1.2rem' }} />,
    },
  ];

  const router = useRouter();

  const [anchorElHamburger, setAnchorElHamburger] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElHamburger(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElHamburger(null);
  };

  return (
    <Box
      className={styles.hamburgerMenu}
      sx={{ flexGrow: 0 }}
    >
      <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
        <MenuRoundedIcon />
      </IconButton>
      <Menu
        sx={{ mt: '30px' }}
        id="menu-appbar"
        anchorEl={anchorElHamburger}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorElHamburger)}
        onClose={handleCloseMenu}
      >
        {content.map(({
          id, path, pageName, icon,
        }) => (
          <MenuItem key={id} onClick={handleCloseMenu}>
            <Link href={path} passHref>
              <IconButton
                aria-label={`Botão de acesso à página ${pageName}.`}
                disabled={router.pathname === path}
                sx={{
                  width: '1.2rem',
                  height: '1.1rem',
                  marginTop: '0.7rem',
                }}
              >
                {icon}
              </IconButton>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
export default HamburgerMenu;
