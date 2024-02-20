'use client';

import React from 'react';
import { Autocomplete, Avatar, Card, CardActions, CardContent, Grid, Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Page = () => {
  return (
    <Grid
      container
      sx={{ paddingTop: 5 }}
      direction='column'
      alignItems='center'
      justify='center'
    >
      <Grid item xs={12}>
        <Card variant='outlined' sx={{ minWidth: 345 }}>
          <CardContent>
            <Grid
              container
              direction='column'
              spacing={2}
            >
              <Grid item xs={12}>
                <Avatar sx={{ width: '80px', height: '80px' }}/>
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row'>
                  <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', paddingRight: 1 }}>บัญชีไลน์ : </Typography>
                  <Typography sx={{ color: 'normalbutton.main', }}> w</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row'>
                  <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', paddingRight: 1 }}>Token : </Typography>
                  <Typography sx={{ color: 'normalbutton.main', }}> linem4h5sd3sa125</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row'>
                  <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', paddingRight: 1 }}>หน่วยงานไฟฟ้า : </Typography>
                  <Typography sx={{ color: 'normalbutton.main', }}> การไฟฟ้านครหลวง</Typography>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;