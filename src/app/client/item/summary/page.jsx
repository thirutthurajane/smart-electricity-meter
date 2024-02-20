'use client';

import React from 'react';
import {
  Autocomplete,
  Box,
  Card,
  CardActions,
  CardContent, CardHeader,
  Checkbox,
  Grid,
  Stack,
  Tab,
  Tabs,
  TextField
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs textColor='primary' value={0} aria-label='basic tabs example'>
            <Tab label='คำแนะนำจากการใช้งาน' sx={{ fontWeight: 'bold', color: 'normalbutton' }}/>
          </Tabs>
        </Box>
        <Grid
          container
          sx={{ paddingTop: 5 }}
          direction='column'
          alignItems='center'
          justify='center'
        >
          <Card variant='outlined' sx={{ minWidth: 700 }}>
            <CardHeader sx={{ bgcolor: '#E3EDF7', minHeight: '50px' }}>
            </CardHeader>
            <CardContent>
              <Grid
                container
                direction='column'
                spacing={2}
              >
                <Grid item xs={12}>
                  <Grid
                    container
                    direction='row'
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      <Typography
                        sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>ช่วงเวลาการใช้งาน </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>06 : 00 - 18 : 00
                        น. </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>( ในช่วง 7 วัน
                        ) </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction='row'
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>ปริมาณไฟที่ใช้ </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField disabled size={'small'} value={'xxxxxxx'}></TextField>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>wh</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction='row'
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}></Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField disabled size={'small'} value={'xxxxxxx'}></TextField>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>kwh, หน่วยไฟฟ้า</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction='row'
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      <Typography
                        sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>ขนาดที่แนะนำติดตั้ง</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField disabled size={'small'} value={'xxxxxxx'}></TextField>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>kW</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction='row'
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      <Typography
                        sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>ผลิตไฟฟ้าได้</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField disabled size={'small'} value={'xxxxxxx'}></TextField>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>หน่วย/เดือน</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction='row'
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      <Typography
                        sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>มูลค่าที่ผลิตได้</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField disabled size={'small'} value={'xxxxxxx'}></TextField>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>บาท</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction='row'
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      <Typography
                        sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>ระยะคืนทุน</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField disabled size={'small'} value={'xxxxxxx'}></TextField>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', }}>ปี</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;