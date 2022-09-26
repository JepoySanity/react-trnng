import * as React from 'react';
// import axios from 'axios';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Spinner } from '../Spinner';


export default function Index() {
  const [members, setMembers] = useState([]);
  const [disableCreate, setDisableCreate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true);
    setDisableCreate(true)
    axios.get('https://2e2r2jeor6.execute-api.us-east-1.amazonaws.com/dev/members/id')
      .then((response)=>{
        setMembers(response.data);
        setIsLoading(false);
        setDisableCreate(false)
      })
      .catch((err)=>{
        console.log(err);
        setIsLoading(false);
        setDisableCreate(false)
      });
  },[])

  return (
    <>
      <Grid component={Paper} sx={{ p:4 }}>
        <Typography sx={{ mb:4 }} variant="h5">LIST OF MEMBERS</Typography>
        {disableCreate ? 
          <Button sx={{ mb:4 }} variant="contained" component={Link} to="/member/new" disabled><PersonAddAltIcon/>&ensp;New</Button>
        : 
          <Button sx={{ mb:4 }} variant="contained" component={Link} to="/member/new"><PersonAddAltIcon/>&ensp;New</Button>
        }
        <TableContainer component={Paper}>
          {isLoading ? <Spinner/> :
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
                {members.map((row) => (
                  <TableRow
                    key={row.id}
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
                      <Button variant='outlined' component={Link} 
                        to={{ 
                          pathname:`/member/edit/${row.id}`,
                          state: {members: members}
                        }}
                      >
                        edit
                      </Button>
                      &ensp;
                      <Button variant='outlined' component={Link} to="" color='error' >
                        delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          }
        </TableContainer>
      </Grid>
    </>
  );
}
