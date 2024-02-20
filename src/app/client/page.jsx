'use client';

import React, { Fragment } from 'react';
import { Card, CardContent, CardMedia, Grid, Tab, Tabs } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import SpeedIcon from '@mui/icons-material/Speed';
import TuneIcon from '@mui/icons-material/Tune';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HouseIcon from '@mui/icons-material/House';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PowerIcon from '@mui/icons-material/Power';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <Grid
      sx={{
        paddingLeft: 2,
      }}
      container
      spacing={2}
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <Grid item xs={12}>
        <Carousel
          sx={{
            width: '100vh',
            maxHeight: '300px',
          }}
        >
          <Grid
            container
            spacing={2}
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <img style={{ width: 'auto', maxHeight: '200px', }} src='https://cataas.com/cat'/>
          </Grid>

          <Grid
            container
            spacing={2}
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <img style={{ width: 'auto', maxHeight: '200px', }} src='https://cataas.com/cat'/>
          </Grid>
        </Carousel>
      </Grid>

      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='center'
        spacing={2}
        sx={{
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 3,
          paddingTop: 3,
        }}
      >
        <Grid item xs={3}>
          <Button fullWidth size={'large'} color='normalbutton' variant='contained' endIcon={<SpeedIcon/>}>
            เชื่อมต่อมิเตอร์
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth size={'large'} color='normalbutton' variant='contained' endIcon={<TuneIcon/>}>
            แผงควบคุม
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth onClick={() => router.push('/client/location')} size={'large'} color='normalbutton' variant='contained' endIcon={<HouseIcon/>}>
            เพิ่มสถานที่ใช้ไฟฟ้า
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button onClick={() => { router.push('/client/item') }} fullWidth size={'large'} color='normalbutton' variant='contained' endIcon={<PowerIcon/>}>
            เพิ่มอุปกรณ์ไฟฟ้า
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='center'
        spacing={2}
        sx={{
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <Grid item xs={3}>
          <Button fullWidth size={'large'} color='normalbutton' variant='contained' endIcon={<LightbulbIcon/>}>
            คำแนะนำจากการใช้งาน
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth size={'large'} color='normalbutton' variant='contained' endIcon={<SupportAgentIcon/>}>
            รายงานความผิดปกติ
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth size={'large'} color='normalbutton' variant='contained' endIcon={<HomeRepairServiceIcon/>}>
            ตรวจสอบการใช้งาน
          </Button>
        </Grid>
      </Grid>

      <Grid container
            sx={{
              maxHeight: '100vh',
              paddingLeft: 50,
              paddingRight: 50,
            }}>
        <Grid item xs={12}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs textColor='primary' value={0} aria-label='basic tabs example'>
              <Tab label='How to' sx={{ fontWeight: 'bold', color: 'normalbutton' }}/>
            </Tabs>
          </Box>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;