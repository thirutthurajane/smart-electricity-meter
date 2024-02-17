'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Stack, useTheme } from '@mui/material';

const pages = ['หน้าหลัก', 'แดชบอร์ด', 'แจ้งเตือน', 'โปรไฟล์'];
const settings = ['หน้าหลัก', 'แดชบอร์ด', 'Dashboard', 'Logout'];

function ResponsiveAppBar () {
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar
        sx={{
          bgcolor: '#486284'
        }}
      >
        <Stack direction='row' alignContent='space-between'>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='#app-bar-with-responsive-menu'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon/>
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
              <Typography
                variant='h5'
                noWrap
                component='a'
                href='#app-bar-with-responsive-menu'
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
          <Container maxWidth='xs'>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <LanguageIcon sx={{ my: 3 }}/>
              <Button
                sx={{ my: 2, color: 'white', display: 'block', px: 2 }}
              >
                เข้าสู่ระบบ
              </Button>
              <Button
                variant='contained'
                size='small'
                sx={{
                  my: 2,
                  color: 'navbutton.darker',
                  bgcolor: 'navbutton.main',
                  '&:hover': {
                    bgcolor: 'navbutton.dark',
                  },
                }}
              >
                เริ่มต้นใช้งาน
              </Button>
            </Box>
          </Container>
        </Stack>
      </AppBar>
    </Box>
  );
}

export default ResponsiveAppBar;