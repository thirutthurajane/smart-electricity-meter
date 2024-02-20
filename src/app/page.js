'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useRouter } from 'next/navigation';

export default function Home () {

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
            width: '100vh'
          }}
        >
          <Image width={800} height={400} src='https://cataas.com/cat'/>
          <Image width={800} height={400} src='https://cataas.com/cat'/>
          <Image width={800} height={400} src='https://cataas.com/cat'/>
        </Carousel>
      </Grid>
      <Grid item xs={12}>
        <Button sx={{
          paddingLeft: 6,
          paddingRight: 6,
          paddingTop: 2,
          paddingBottom: 2,
        }} size='large' onClick={() => { router.push('/client') }} color='normalbutton' variant='contained'>
          เริ่มต้น
        </Button>
      </Grid>
    </Grid>
  );
}
