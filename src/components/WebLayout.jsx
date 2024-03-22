'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { CssBaseline, Divider, Grid, Paper, ThemeProvider } from '@mui/material';
import { theme } from '@/theme';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const WebLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <Grid container>
          <Grid item xs={12}>
            <Navbar/>
          </Grid>

          <Grid item xs={12}>
            {children}
          </Grid>

        </Grid>
        <Box sx={{
          mt: 'auto',
          width: '100%',
          bgcolor: '#486284',
          bottom: 0,
          left: 0,
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
              ที่อยู่ : เลขที่ 1 ซอย ฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520
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
            <Typography variant='subtitle' sx={{ color: '#8193AA', }}>
              Copyright 2023. All right reserved
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default WebLayout;