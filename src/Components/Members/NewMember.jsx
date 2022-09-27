import * as React from "react";
import { Link } from "react-router-dom"
import { Typography, TextField, Button, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import axios from "axios";
import CreateIcon from '@mui/icons-material/Create';
import * as Yup from "yup";
import 'react-toastify/dist/ReactToastify.css';

export default function NewMember() {
  const formik = useFormik({
    //initial value of the form state
    initialValues: {
      name: '',
      status: '',
      email: '',
      department: '',
      location: '',
    },

    //schema for the input validation rules
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30,"name must not exceed 30 characters")
        .required("required"),
      status: Yup.string()
        .max(8,"name must not exceed 8 characters")
        .required("required"),
      email: Yup.string()
        .email("must be a valid email")
        .required("required"),
      department: Yup.string()
        .max(6,"name must not exceed 6 characters")
        .required("required"),
      location: Yup.string()
        .max(15,"name must not exceed 15 characters")
        .required("required"),
    }),

    //form onSubmit handler
    onSubmit: (values) => {
      //generate uuid
      const uid = uuidv4();
      //notify user that request is being created
      const toast_id = toast.loading('creating user');
      
      //post request to amazon API
      axios.post(`${process.env.REACT_APP_API_URL}/members`, {
        id: uid,
        name: values.name,
        status: values.status,
        email: values.email,
        department: values.department,
        location: values.location
      }).then((res)=>{
        //update notifaction as success
        toast.update(toast_id, 
          { 
            render: "User created!", 
            type: "success", 
            isLoading: false, 
            autoClose: 3000 
          });
        formik.resetForm();
      }).catch((err)=>{
        //update notifaction as error
        toast.update(toast_id, 
          { 
            render: "An error occured, please try again later", 
            type: "error", 
            isLoading: false, 
            autoClose: 3000 
          });
      });
    }
  });

  return (
    <>
      <Grid component={Paper} sx={{ p:4 }}>
        <Typography sx={{ mb:4 }} variant="h5">CREATE NEW MEMBER</Typography>
        <Button sx={{ mb:4 }} variant="contained" component={Link} to="/">Back</Button>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
        >
        <form onSubmit={formik.handleSubmit}>
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Name"
            variant="outlined"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? <p style={{color: 'red', marginLeft: '5px', marginTop: '-2px', marginBottom: '-8px'}}>{formik.errors.name}</p> : null}
          <br />
          <FormControl sx={{ width: "500px", margin: "5px" }}>
              <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
              <Select
                name="status"
                label="Status"
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <MenuItem value="Active">
                  Active
                </MenuItem>
                <MenuItem value="Inactive">
                  Inactive
                </MenuItem>
              </Select>
            </FormControl>
          {formik.touched.status && formik.errors.status ? <p style={{color: 'red', marginLeft: '5px', marginTop: '-2px', marginBottom: '-8px'}}>{formik.errors.status}</p> : null}
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Email"
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <p style={{color: 'red', marginLeft: '5px', marginTop: '-2px', marginBottom: '-8px'}}>{formik.errors.email}</p> : null}
          <br />
          <FormControl sx={{ width: "500px", margin: "5px" }}>
            <InputLabel id="demo-simple-select-helper-label">Department</InputLabel>
            <Select
              name="department"
              label="Department"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={formik.values.department}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="Dev 2">
                Dev 2
              </MenuItem>
              <MenuItem value="Dev 3">
                Dev 3
              </MenuItem>
              <MenuItem value="Dev 5">
                Dev 5
              </MenuItem>
              <MenuItem value="Dev A">
                Dev A
              </MenuItem>
              <MenuItem value="Dev B">
                Dev B
              </MenuItem>
              <MenuItem value="Dev C">
                Dev C
              </MenuItem>
              <MenuItem value="Dev D">
                Dev D
              </MenuItem>
              <MenuItem value="Dev E">
                Dev E
              </MenuItem>
              <MenuItem value="Dev F">
                Dev F
              </MenuItem>
              <MenuItem value="Dev G">
                Dev G
              </MenuItem>
              <MenuItem value="Dev H">
                Dev H
              </MenuItem>
              <MenuItem value="Dev I">
                Dev I
              </MenuItem>
              <MenuItem value="Dev J">
                Dev J
              </MenuItem>
              <MenuItem value="Dev K">
                Dev K
              </MenuItem>
              <MenuItem value="Dev L">
                Dev L
              </MenuItem>
              <MenuItem value="Dev M">
                Dev M
              </MenuItem>
            </Select>
          </FormControl>
          {formik.touched.department && formik.errors.department ? <p style={{color: 'red', marginLeft: '5px', marginTop: '-2px', marginBottom: '-8px'}}>{formik.errors.department}</p> : null}
          <br />
          <FormControl sx={{ width: "500px", margin: "5px" }}>
            <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
            <Select
              name="location"
              label="Location"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="Alabang">
                Alabang
              </MenuItem>
              <MenuItem value="Cebu">
                Cebu
              </MenuItem>
              <MenuItem value="Makati">
                Makati
              </MenuItem>
            </Select>
          </FormControl>
          {formik.touched.location && formik.errors.location ? <p style={{color: 'red', marginLeft: '5px', marginTop: '-2px', marginBottom: '-8px'}}>{formik.errors.location}</p> : null}
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
