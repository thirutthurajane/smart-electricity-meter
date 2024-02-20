'use client';

import React from 'react';
import {
  Autocomplete,
  Box,
  Grid,
  Tab,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TextField
} from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
function createData (
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const Page = () => {
  return (
    <Grid
      sx={{
        paddingTop: 5,
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
            <Tab label='จัดการมิเตอร์' sx={{ fontWeight: 'bold', color: 'normalbutton' }}/>
          </Tabs>
        </Box>
        <Grid
          container
          sx={{ paddingTop: 5 }}
          direction='column'
          alignContent={'center'}
        >
          <Grid item xs={12}>
            <Grid
              container
              direction='row'
              spacing={2}
              sx={{
                minWidth: 800
              }}
            >
              <Grid item xs={4}>
                <TextField placeholder={'กรอก Token'} size={'small'} fullWidth/>
              </Grid>
              <Grid item xs={4}>
                <Autocomplete
                  size={'small'}
                  renderInput={(params) => <TextField placeholder={'เลือกประเภท'} {...params} />}
                  options={['main', 'node']}
                />
              </Grid>
              <Grid item xs={4}>
                <Button sx={{ fontWeight: 'bold', color: '#fff', paddingLeft: 10, paddingRight: 10 }}
                        variant='contained' color='success'>เพิ่ม</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 800 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align='right'>Date&Time</TableCell>
                    <TableCell align='right'>Token</TableCell>
                    <TableCell align='right'>Type</TableCell>
                    <TableCell align='right'>Description</TableCell>
                    <TableCell align='center'>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {row.name}
                      </TableCell>
                      <TableCell align='right'>{row.calories}</TableCell>
                      <TableCell align='right'>{row.fat}</TableCell>
                      <TableCell align='right'>{row.carbs}</TableCell>
                      <TableCell align='right'>{row.protein}</TableCell>
                      <TableCell align='right'>
                        <Button size='small' startIcon={<DeleteIcon />} sx={{ mr: 1 }} color='warning' variant='contained'>Edit</Button>
                        <Button size='small' startIcon={<ModeEditIcon />} variant='contained'  color='error' >Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;