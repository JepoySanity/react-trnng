
import * as React from "react";
import { Link } from "react-router-dom"
import { Typography, TextField, Button, Grid, Paper } from "@mui/material";
// import { API } from 'aws-amplify'
import axios from "axios";
import CancelIcon from '@mui/icons-material/Cancel';
import CreateIcon from '@mui/icons-material/Create';
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';

export default function NewMember() {

  // //default state value
  // const defaultVal = {
  //   name: '',
  //   status: '',
  //   email: '',
  //   department: '',
  //   location: ''
  // }

  // //set default state value
  // const [member, setMember] = React.useState(defaultVal);

  // //on change handler
  // const handleOnChange = (e) => {
  //   setMember({...member, [e.target.id]: e.target.value })
  // }

  // //on form submit handler
  // const handleSubmit = (e) => {

  //   //prevent default behavior upon form submission
  //   e.preventDefault();

  //   //generate uuid
  //   const uid = uuidv4();
    
  //   //post request to API
  //   axios.post('https://2lg82xqv8b.execute-api.us-east-1.amazonaws.com/judye/members', 
  //   {
  //     id: uid,
  //     name: member.name,
  //     status: member.status,
  //     email: member.email,
  //     department: member.department,
  //     location: member.location
  //   }).then((res)=>{console.log(res)});
    
  //   //reset form values
  //   setMember(defaultVal);
  // }

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
      
      //post request to API
      axios.post('https://2lg82xqv8b.execute-api.us-east-1.amazonaws.com/judye/members', {
        id: uid,
        name: values.name,
        status: values.status,
        email: values.email,
        department: values.department,
        location: values.location
      }).then((res)=>{
        console.log(res)
        formik.resetForm();
      }).catch((err)=>{
        console.log(err);
      });
    }
  });

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
          {formik.touched.name && formik.errors.name ? <p style={{color: 'red', marginLeft: '4px', marginTop: '-2px'}}>{formik.errors.name}</p> : null}
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Status"
            variant="outlined"
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.status && formik.errors.status ? <p style={{color: 'red', marginLeft: '4px', marginTop: '-2px'}}>{formik.errors.status}</p> : null}
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
          {formik.touched.email && formik.errors.email ? <p style={{color: 'red', marginLeft: '4px', marginTop: '-2px'}}>{formik.errors.email}</p> : null}
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Department"
            variant="outlined"
            name="department"
            value={formik.values.department}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.department && formik.errors.department ? <p style={{color: 'red', marginLeft: '4px', marginTop: '-2px'}}>{formik.errors.department}</p> : null}
          <br />
          <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Location"
            variant="outlined"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.location && formik.errors.location ? <p style={{color: 'red', marginLeft: '4px', marginTop: '-2px'}}>{formik.errors.location}</p> : null}
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
