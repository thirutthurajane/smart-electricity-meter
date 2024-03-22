'use client';

import React from 'react';
import { Grid, Tab, Tabs, Box, CardContent, Card, Autocomplete, TextField, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Page = () => {
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
          sx={{ paddingTop: 5 }}
          direction='column'
          alignItems='center'
          justify='center'
        >
          <Grid item xs={12}>
            <Card variant='outlined' sx={{ minWidth: 345 }}>
              <CardContent>
                <Autocomplete
                  size={'small'}
                  renderInput={(params) => <TextField placeholder={'เลือกหน่วยงานไฟฟ้า'} {...params} />}
                  options={['การไฟฟ้าส่วนภูมิภาค',  'การไฟฟ้านครหลวง']}
                />
              </CardContent>
              <CardActions
                sx={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pb: 2,
                }}
              >
                <Button color='normalbutton' variant='contained'>บันทึก</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;