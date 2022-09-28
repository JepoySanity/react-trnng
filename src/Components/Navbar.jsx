import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Auth } from "aws-amplify"
import { useTranslation } from 'react-i18next';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from 'react';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');
  //signout handler
  const signOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value)
    setLang(e.target.value)
  }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {t('nav-title')}
            </Typography>
            <Select
              sx={{ 
                boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 },
                color: "#ffffff"
              }}
              value={lang}
              onChange={changeLang}
            >
              <MenuItem value="en">
                ENG
              </MenuItem>
              <MenuItem value="jp">
                日本語
              </MenuItem>
            </Select>
            &ensp;
            <Button color="inherit" onClick={signOut}>{t('logout')}</Button>
            </Toolbar>
        </AppBar>
        </Box>
    </>
  )
}
