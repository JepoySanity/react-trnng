
import * as React from "react";
import { Link } from "react-router-dom"
import { Typography, TextField, Button, Grid, Paper } from "@mui/material";
import { API } from 'aws-amplify'
import CancelIcon from '@mui/icons-material/Cancel';
import CreateIcon from '@mui/icons-material/Create';
import { v4 as uuidv4 } from 'uuid';

export default function NewMember() {

  //default state value
  const defaultVal = {
    name: '',
    status: '',
    email: '',
    department: '',
    location: ''
  }

  //set default state value
  const [member, setMember] = React.useState(defaultVal);

  //on change handler
  const handleOnChange = (e) => {
    setMember({ [e.target.id]: e.target.value })
  }

  //on form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    //generate uuid
    const uid = uuidv4();
    
    //post request to API
    API.post('membersAPI', '/members', {
      body: {
        id: uid,
        name: member.name,
        status: member.status,
        email: member.email,
        department: member.department,
        location: member.location
      }
    }).then();
    
    //reset form values
    setMember(defaultVal);
  }

  return (
    <>
      <Grid component={Paper} sx={{ p:4 }}>
        <Typography sx={{ mb:4 }} variant="h5">CREATE NEW MEMBER</Typography>
        <Button sx={{ mb:4 }} variant="contained" component={Link} to="/"><CancelIcon/>&ensp;Cancel</Button>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
        >
        <form onSubmit={handleSubmit}>
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Name"
            variant="outlined"
            id="name"
            value={member.name}
            onChange={handleOnChange}
          />
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Status"
            variant="outlined"
            id="status"
            value={member.status}
            onChange={handleOnChange}
          />
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Email"
            variant="outlined"
            id="email"
            value={member.email}
            onChange={handleOnChange}
          />
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Department"
            variant="outlined"
            id="department"
            value={member.department}
            onChange={handleOnChange}
          />
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Location"
            variant="outlined"
            id="location"
            value={member.location}
            onChange={handleOnChange}
          />
          <br />
          <Grid   
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ mt:4 }}
          >
          <Button variant="contained" style={{ backgroundColor: 'green'}} type="submit">
            <CreateIcon/>&ensp;Create
          </Button>
          </Grid>
        </form>
        </Grid>
      </Grid>
    </>
  );
}
