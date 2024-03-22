'use client';

import React from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useRouter } from 'next/navigation';
const Page = () => {
  const router = useRouter();

  return (
    <Grid
      sx={{
        paddingLeft: 2,
        paddingTop: 30,
      }}
      container
      spacing={2}
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <Grid item xs={12}>
        <Button sx={{
          paddingLeft: 6,
          paddingRight: 6,
          paddingTop: 2,
          paddingBottom: 2,
        }} size='large' onClick={() => { router.push('/admin/token') }} endIcon={<ArrowRightAltIcon />} color='normalbutton' variant='contained'>
          จัดการมิเตอร์ในระบบ
        </Button>
      </Grid>
    </Grid>
  );
};

export default Page;