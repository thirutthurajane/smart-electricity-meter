'use client';

import React from 'react';
import {
  Autocomplete,
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Tab,
  Tabs,
  Checkbox,
  TextField
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useRouter } from 'next/navigation';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const Page = () => {
  const router = useRouter();

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
            <Tab label='Zone1' sx={{ fontWeight: 'bold', color: 'normalbutton' }}/>
          </Tabs>
        </Box>
        <Grid
          container
          sx={{ paddingTop: 5 }}
          direction='column'
          alignItems='center'
          justify='center'
        >
          <Card variant='outlined' sx={{ minWidth: 600 }}>
            <CardContent>
              <Grid
                container
                direction='column'
                spacing={2}
              >
                <Grid item xs={12}>
                  <Stack direction='column'>
                    <Typography sx={{ fontWeight: 'bold', color: 'normalbutton.main', pb: 1 }}>ชื่ออุปกรณ์ </Typography>
                    <TextField size={'small'} placeholder={'ex : ตู้เย็น'} variant='outlined'/>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction='column'>
                    <Typography sx={{
                      fontWeight: 'bold',
                      color: 'normalbutton.main',
                      pb: 1
                    }}>ปิดการทำงานเมื่อสถานะไฟฟ้า </Typography>
                    <Autocomplete
                      size={'small'}
                      renderInput={(params) => <TextField placeholder={'เลือกจากตัวเลือก'} {...params} />}
                      options={['option 1', 'option 2', 'option 3', 'option 4', 'option 5']}
                      multiple
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                          />
                          {option}
                        </li>
                      )}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction='column'>
                    <Typography sx={{
                      fontWeight: 'bold',
                      color: 'normalbutton.main',
                      pb: 1
                    }}>หน่วงเวลาก่อนเปิดปิดการทำงาน </Typography>
                    <TextField placeholder={'1,5,10,30,60  นาที'} size={'small'} variant='outlined'/>
                  </Stack>
                </Grid>
              </Grid>
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
              <Button color='normalbutton' variant='contained' onClick={() => { router.push('/client/item/summary') }}>บันทึก</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;