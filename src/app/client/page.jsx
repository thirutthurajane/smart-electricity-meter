'use client';

import React, { Fragment, useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Pagination, Tab, Tabs } from '@mui/material';
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
  const [page, setPage] = useState(1);
  const perPage = 3;
  const data = [
    {
      id: 1,
      label: 'new 1',
      detail: 'this is news 1'
    },
    {
      id: 2,
      label: 'Lizard',
      detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
        '                    species, ranging across all continents except Antarctica'
    },
    {
      id: 3,
      label: 'Lizard',
      detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
        '                    species, ranging across all continents except Antarctica'
    },
    {
      id: 4,
      label: 'page 2',
      detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
        '                    species, ranging across all continents except Antarctica'
    },
    {
      id: 5,
      label: 'Lizard',
      detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
        '                    species, ranging across all continents except Antarctica'
    },
    {
      id: 6,
      label: 'Lizard',
      detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
        '                    species, ranging across all continents except Antarctica'
    },
    {
      id: 7,
      label: 'xxxx',
      detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
        '                    species, ranging across all continents except Antarctica'
    }
  ];
  const count = Math.ceil(data.length / perPage);

  const handleOnChange = (event, value) => {
    setPage(paginator(data, value, 3).page);
  }

  // Api ไม่ต้องใช้
  function paginator(items, current_page, per_page_items) {
    let page = current_page || 1,
      per_page = per_page_items,
      offset = (page - 1) * per_page,
      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: total_pages > page ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }

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
          fullHeightHover={false}
          sx={{
            width: '100vh',
              maxHeight: 'auto',
          }}
        >
          <Grid
            container
            spacing={2}
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <img style={{ maxWidth: '800px', maxHeight: 'auto', }} src='https://cataas.com/cat'/>
          </Grid>

          <Grid
            container
            spacing={2}
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <img style={{ maxWidth: '800px', maxHeight: 'auto', }} src='https://cataas.com/cat'/>
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
          <Button fullWidth sx={{ height: '60px' }}  size={'large'} color='normalbutton' variant='contained' endIcon={<SpeedIcon/>}>
            เชื่อมต่อมิเตอร์
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth sx={{ height: '60px' }}  size={'large'} color='normalbutton' variant='contained' endIcon={<TuneIcon/>}>
            แผงควบคุม
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth sx={{ height: '60px' }}  onClick={() => router.push('/client/location')} size={'large'} color='normalbutton'
                  variant='contained' endIcon={<HouseIcon/>}>
            เพิ่มสถานที่ใช้ไฟฟ้า
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth sx={{ height: '60px' }}  onClick={() => { router.push('/client/item'); }} fullWidth size={'large'} color='normalbutton'
                  variant='contained' endIcon={<PowerIcon/>}>
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
          <Button fullWidth sx={{ height: '60px' }} size={'large'} color='normalbutton' variant='contained' endIcon={<LightbulbIcon/>}>
            คำแนะนำจากการใช้งาน
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth sx={{ height: '60px' }} size={'large'} color='normalbutton' variant='contained' endIcon={<SupportAgentIcon/>}>
            รายงานความผิดปกติ
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth sx={{ height: '60px' }} size={'large'} color='normalbutton' variant='contained' endIcon={<HomeRepairServiceIcon/>}>
            ตรวจสอบการใช้งาน
          </Button>
        </Grid>
      </Grid>

      <Grid container
            spacing={2}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{
              maxHeight: '100vh',
              paddingLeft: 50,
              paddingRight: 50,
            }}>
        <Grid item xs={12}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100vh' }}>
            <Tabs textColor='primary' value={0} aria-label='basic tabs example'>
              <Tab label='How to' sx={{ fontWeight: 'bold', color: 'normalbutton' }}/>
            </Tabs>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Grid container sx={{ pt: 2 }}
                spacing={2}
                direction='row'
          >
            { paginator(data, page, perPage).data.map(d => {
              return (
                <Grid key={`data_${d.label}_${Math.random().toString()}`} item xs={4}>
                  <Card sx={{ height: 200, minWidth: 250, maxWidth: 300 }} onClick={() => {
                    router.push(`/client/news/${d.id}`)
                  }}>
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='div'>
                        { d.label }
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        { d.detail }
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }) }
          </Grid>
        </Grid>

        <Grid sx={{ pb: 5 }} item xs={12} justifyContent={'center'} alignItems={'center'} justifyItems={'center'}>
          <Pagination count={count} page={page} onChange={handleOnChange} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;