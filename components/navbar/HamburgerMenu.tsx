import * as React from 'react';
import { useRouter } from 'next/router';
import {
  Box, IconButton, Menu, MenuItem,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import { useAppSelector } from '../../hooks/redux/useRedux';
import styles from '../../styles/components/navbar.module.css';

function HamburgerMenu() {
  const menuContent = [
    {
      id: 1, pageName: 'mobile', path: '/mobile/apps', icon: <SmartphoneRoundedIcon sx={{ width: '1.2rem' }} />,
    },
    {
      id: 2, pageName: 'web', path: '/web/apps', icon: <LaptopRoundedIcon sx={{ width: '1.2rem' }} />,
    },
    {
      id: 3, pageName: 'donations', path: '/doar', icon: <SavingsRoundedIcon sx={{ width: '1.2rem' }} />,
    },
  ];

  const router = useRouter();

  const currentUserInfo = useAppSelector((state) => state.users);
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
        {!currentUserInfo.id
        && <MenuItem onClick={handleCloseMenu}>
          <IconButton
            aria-label={'Bot??o de acesso ?? p??gina de login.'}
            color='secondary'
            onClick={() => router.push('/acessar/conta')}
            disabled={router.pathname === '/acessar/conta'}
            sx={{
              width: '1.2rem',
              height: '1.1rem',
              marginTop: '0.7rem',
            }}
          >
            <LoginRoundedIcon sx={{ width: '1.2rem' }} />
          </IconButton>
        </MenuItem>}
        {menuContent.map(({
          id, path, pageName, icon,
        }) => (
          <MenuItem key={id} onClick={handleCloseMenu}>
            <IconButton
              aria-label={`Bot??o de acesso ?? p??gina ${pageName}.`}
              onClick={() => router.push(path)}
              disabled={router.pathname === path}
              sx={{
                width: '1.2rem',
                height: '1.1rem',
                marginTop: '0.7rem',
              }}
            >
              {icon}
            </IconButton>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default HamburgerMenu;
