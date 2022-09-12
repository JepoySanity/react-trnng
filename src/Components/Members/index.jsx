import * as React from 'react';
import Button from '@mui/material/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function createData(name, status, email, department, location) {
  return { name, status, email, department, location };
}

const rows = [
  createData('John Jefferson Factoran', 'active', 'john.factoran@awsys-i.com', 'Dev F', 'Alabang'),
  createData('Christian Gil Aquino', 'active', 'christian.aquino@awsys-i.com', 'Dev F', 'Makati'),
];

export default function index() {
  return (
    <>
      <Typography sx={{ mb:4 }} variant="h4">List of Members</Typography>
      <Button variant="contained" component={Link} to="/member/new" sx={{ mb:4 }}>New</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Modify</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.department}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">
                  <Button variant='outlined'>
                    edit
                  </Button>
                  &ensp;
                  <Button variant='outlined' color='error'>
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
