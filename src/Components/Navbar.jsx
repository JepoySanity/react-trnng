import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Auth } from "aws-amplify"

export const Navbar = () => {
  //signout handler
  const signOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Members Listing
            </Typography>
            <Button color="inherit" onClick={signOut}>Logout</Button>
            </Toolbar>
        </AppBar>
        </Box>
    </>
  )
}
