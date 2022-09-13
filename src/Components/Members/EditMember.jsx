
import * as React from "react";
import { Link } from "react-router-dom"
import { Typography, TextField, Button, Grid, Paper } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import CreateIcon from '@mui/icons-material/Create';

export default function EditMember() {
  return (
    <>
      <Grid component={Paper} sx={{ p:4 }}>
        <Typography sx={{ mb:4 }} variant="h5">Edit Member</Typography>
        <Button sx={{ mb:4 }} variant="contained" component={Link} to="/members"><CancelIcon/>&ensp;Cancel</Button>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
        >
        <form onSubmit={() => alert("saved")}>
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Name"
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Status"
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Email"
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Department"
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Location"
            variant="outlined"
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
