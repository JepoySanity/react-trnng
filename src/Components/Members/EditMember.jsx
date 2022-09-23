
import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { Typography, TextField, Button, Grid, Paper } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';

export default function EditMember() {
  const { member_id } = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(()=>{

    axios.get(`http://127.0.0.1:8000/api/member/${member_id}`)
    .then(function (response) {
      // handle success
      setUserData(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  },[ member_id ])

  return (
    <>
      <Grid component={Paper} sx={{ p:4 }}>
        <Typography sx={{ mb:4 }} variant="h5">Edit Member</Typography>
        <Button sx={{ mb:4 }} variant="contained" component={Link} to="/">Back</Button>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
        >
        <form onSubmit={() => alert("saved")}>
          <Typography ml={1}>Name</Typography>
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            variant="outlined"
            value={userData.name}
          />
          <br />
          <Typography ml={1}>Status</Typography>
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            variant="outlined"
            value={userData.status}
          />
          <br />
          <Typography ml={1}>Email</Typography>
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            variant="outlined"
            value={userData.email}
          />
          <br />
          <Typography ml={1}>Department</Typography>
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            variant="outlined"
            value={userData.department}
          />
          <br />
          <Typography ml={1}>Location</Typography>
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            variant="outlined"
            value={userData.location}
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
          <Button variant="contained" style={{ backgroundColor: 'green'}}>
            <CreateIcon/>&ensp;Save
          </Button>
          </Grid>
        </form>
        </Grid>
      </Grid>
    </>
  );
}
