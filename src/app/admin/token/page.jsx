'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Autocomplete,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField
} from '@mui/material';
import Button from '@mui/material/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Page = () => {
  const router = useRouter();

  return (
    <Grid
      sx={{
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
      }}
      container
      spacing={2}
      direction='column'
    >
      <Grid item xs={12}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs textColor='primary' value={0} aria-label='basic tabs example'>
            <Tab label='เพิ่มสถานที่ใช้ไฟฟ้า' sx={{ fontWeight: 'bold', color: 'normalbutton' }}/>
          </Tabs>
        </Box>
        <Grid
          container
          sx={{ paddingTop: 5, paddingLeft: 5, paddingRight: 5 }}
          direction='row'
          alignItems='center'
          justify='center'
          spacing={2}
        >
          <Grid item xs={4}>
            <TextField size={'small'} fullWidth label={'กรอก Token'} InputProps={{
              endAdornment: (<InputAdornment>
                <ModeEditIcon/>
              </InputAdornment>)
            }}/>
          </Grid>

          <Grid item xs={4}>
            <Autocomplete
              size={'small'}
              renderInput={(params) => <TextField placeholder={'เลือกประเภท'} {...params} />}
              options={['main', 'node']}
            />
          </Grid>

          <Grid item xs={4}>
            <Button fullWidth color='success' variant='contained' onClick={() => router.push('/admin/meter')} sx={{ fontWeight: 'bold' }}>
              เพิ่ม
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;