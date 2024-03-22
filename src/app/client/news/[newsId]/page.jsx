'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Grid } from '@mui/material';

const Page = () => {

  const { newsId } = useParams();

  return (
    <Grid
      sx={{
        paddingLeft: 2,
        paddingTop: 5,
        paddingBottom: 5,
      }}
      container
      spacing={2}
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <Grid item xs={12} sx={{
        border: 1,
        borderRadius: 2,
        minWidth: '1024px',
        minHeight: '768px',
        borderColor: '#486284',
      }}>
        {/* Render Here fetch api form params */}
        { newsId }
      </Grid>
    </Grid>
  );
};

export default Page;