import * as React from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Box, Tooltip, IconButton, Menu, Avatar, MenuItem, Typography,
} from '@mui/material';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { useAppSelector } from '../../hooks/redux/useRedux';
// import styles from '../../styles/components/navbar.module.css';

function AvatarMenu() {
  // const router = useRouter();
  const currentUserInfo = useAppSelector((state) => state.users);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={currentUserInfo.username}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={currentUserInfo.username}
            src={currentUserInfo.profilePicture}
            sx={{ width: '2rem', height: '2rem' }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '42px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          onClick={handleCloseUserMenu}
          sx={{
            '&:hover': { backgroundColor: '#A7B3B7 !important' },
            borderRadius: '5px',
          }}
        >
          <Link href='/' passHref>
            <Typography>meu perfil</Typography>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleCloseUserMenu}
          sx={{
            '&:hover': { backgroundColor: '#A7B3B7 !important' },
            borderRadius: '5px',
          }}
        >
          <IconButton
            aria-label="Botão de logout."
            color='error'
            sx={{
              width: '1.2rem',
              height: '1rem',
            }}
          >
            <LogoutTwoToneIcon sx={{ width: '1.2rem' }} />
          </IconButton>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default AvatarMenu;
