import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
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
import Modal from "../Members/DeleteMember";
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {   
  const { t } = useTranslation();
  const [members, setMembers] = useState([]);
  const [disableCreate, setDisableCreate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState();
  const [memberId, setMemberId] = useState();
  const [refetch, setRefetch] = useState(false);  
  const [token, setToken] = useState('');

  const getUserToken = () => {
    Auth.currentSession().then(res=>{
      let accessToken = res.getIdToken()
      setToken(accessToken.jwtToken)
    })
  }

  useEffect(()=>{
    getUserToken()
    setIsLoading(true);
    setDisableCreate(true)
    axios.get(process.env.REACT_APP_API_URL + '/members/id', {
        headers: { 
          Authorization: token
        }
    })
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

  },[refetch, token]) 

  const onDelete = (id,name) => {

    setMemberId(id)
    setShowModal(true)
    setModalTitle(t('are-you-sure') + ' ' + name + ' ?')

  }

  const confirmDelete = () => {

    setShowModal(false)
    const toast_id = toast.loading(t('deleting-user'));
    axios.delete(process.env.REACT_APP_API_URL + `/members/object/${memberId}`, {
      headers: {
        Authorization: token
      }
    })
      .then((res)=>{
        toast.update(toast_id, 
          { 
            render: t('user-deleted'), 
            type: "success", 
            isLoading: false, 
            autoClose: 3000 
          });
        setMemberId()
        setRefetch((prev)=>!prev)
      })
      .catch((err)=>{
        console.log(err)
      })

  }

  return (
    <>
      <Modal show={showModal} modalTitle={modalTitle} memberId={memberId} onClose={()=>setShowModal(false)} onDelete={confirmDelete}/>
      <Grid component={Paper} sx={{ p:4 }}>
        <Typography sx={{ mb:4 }} variant="h5">{t('list-of-members')}</Typography>
        {disableCreate ? 
          <Button id="create-new" sx={{ mb:4 }} variant="contained" component={Link} to="/member/new" disabled><PersonAddAltIcon/>&ensp;{t('create-new')}</Button>
        : 
          <Button id="create-new" sx={{ mb:4 }} variant="contained" component={Link} to="/member/new"><PersonAddAltIcon/>&ensp;{t('create-new')}</Button>
        }
        <TableContainer component={Paper}>
          {isLoading ? <Spinner/> :
            <>
              {members.length === 0 ?
                <Typography align='center' variant="h6" sx={{p:'20px'}}>{t('no-members-available')}</Typography>
              :
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>{t('name')}</TableCell>
                      <TableCell align="right">{t('status')}</TableCell>
                      <TableCell align="right">{t('email')}</TableCell>
                      <TableCell align="right">{t('department')}</TableCell>
                      <TableCell align="right">{t('location')}</TableCell>
                      <TableCell align="right">{t('modify')}</TableCell>
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
                          <Button id="edit-button" variant='outlined' component={Link} 
                            to={{ 
                              pathname:`/member/edit/${row.id}`,
                              state: {members: members}
                            }}
                          >
                            {t('edit-button')}
                          </Button>
                          &ensp;
                          <Button id="delete-button" variant='outlined' color='error' onClick={()=>onDelete(row.id, row.name)}>
                            {t('delete-button')}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              }
            </>
          }
        </TableContainer>
      </Grid>
    </>
  );
}
