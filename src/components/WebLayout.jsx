'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { CssBaseline, Divider, Paper, ThemeProvider } from '@mui/material';
import { theme } from '@/theme';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const WebLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      <Navbar/>
      {children}

      <Box sx={{
        width: '100%',
        position: 'fixed',
        bgcolor: '#486284',
        bottom: 0,
      }} component='footer' variant='outlined'>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'start',
            display: 'flex',
            my: 1,
            paddingLeft: 2,
          }}
        >
          <Typography variant='h6' sx={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>
            ติดต่อเรา
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'start',
            display: 'flex',
            my: 1,
            paddingLeft: 2,
          }}
        >
          <Typography variant='subtitle' sx={{ color: 'white', }}>
            โทร : 099-999-9999
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'start',
            display: 'flex',
            my: 1,
            paddingLeft: 2,
          }}
        >
          <Typography variant='subtitle' sx={{ color: 'white', }}>
            อีเมล : 63050188@kmitl.ac.th
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'start',
            display: 'flex',
            my: 1,
            paddingLeft: 2,
          }}
        >
          <Typography variant='subtitle' sx={{ color: 'white', }}>
            ที่อยู่ :   เลขที่ 1 ซอย ฉลองกรุง 1  แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520
          </Typography>
        </Box>


        <Divider sx={{ opacity: '0.6' }} variant='fullWidth'/>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 2,
            my: 1,
          }}
        >
          <Typography  variant='subtitle' sx={{ color: '#8193AA', }} variant='caption' >
            Copyright 2023. All right reserved
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default WebLayout;