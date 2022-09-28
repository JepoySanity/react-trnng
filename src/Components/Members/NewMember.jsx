import * as React from "react";
import { Link } from "react-router-dom"
import { Typography, TextField, Button, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import axios from "axios";
import CreateIcon from '@mui/icons-material/Create';
import * as Yup from "yup";
import 'react-toastify/dist/ReactToastify.css';

export default function NewMember() {
  const { t } = useTranslation();
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
        .max(30,t('30-chars'))
        .required(t('required-field')),
      status: Yup.string()
        .required(t('required-field')),
      email: Yup.string()
        .email(t('valid-email'))
        .required(t('required-field')),
      department: Yup.string()
        .required(t('required-field')),
      location: Yup.string()
        .required(t('required-field')),
    }),

    //form onSubmit handler
    onSubmit: (values) => {
      //generate uuid
      const uid = uuidv4();
      //notify user that request is being created
      const toast_id = toast.loading(t('creating-user'));
      
      //post request to amazon API
      axios.post(process.env.REACT_APP_API_URL + '/members', {
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
            render: t('user-created'), 
            type: "success", 
            isLoading: false, 
            autoClose: 3000 
          });
        formik.resetForm();
      }).catch((err)=>{
        //update notifaction as error
        toast.update(toast_id, 
          { 
            render: t('error-occured'), 
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
        <Typography sx={{ mb:4 }} variant="h5">{t('create-new-member')}</Typography>
        <Button sx={{ mb:4 }} variant="contained" component={Link} to="/">{t('back-button')}</Button>
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
            label={t('name')}
            variant="outlined"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? <p style={{color: 'red', marginLeft: '5px', marginTop: '-2px', marginBottom: '-8px'}}>{formik.errors.name}</p> : null}
          <br />
          <FormControl sx={{ width: "500px", margin: "5px" }}>
              <InputLabel id="demo-simple-select-helper-label">{t('status')}</InputLabel>
              <Select
                name="status"
                label={t('status')}
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
            label={t('email')}
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <p style={{color: 'red', marginLeft: '5px', marginTop: '-2px', marginBottom: '-8px'}}>{formik.errors.email}</p> : null}
          <br />
          <FormControl sx={{ width: "500px", margin: "5px" }}>
            <InputLabel id="demo-simple-select-helper-label">{t('department')}</InputLabel>
            <Select
              name="department"
              label={t('department')}
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
            <InputLabel id="demo-simple-select-helper-label">{t('location')}</InputLabel>
            <Select
              name="location"
              label={t('location')}
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
            <CreateIcon/>&ensp;{t('create-button')}
          </Button>
          </Grid>
        </form>
        </Grid>
      </Grid>
    </>
  );
}
