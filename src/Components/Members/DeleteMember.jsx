import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function DeleteMember({modalTitle, show, onClose, memberId, onDelete}) {

  if (!show) {
    return null;
  }

  return (
    <div>
      <Modal
        open={show}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          <br />
          <Button onClick={onClose} variant="outlined">Cancel</Button>
          &ensp;
          <Button onClick={onDelete} variant="outlined" color='error'>Proceed</Button>
        </Box>
      </Modal>
    </div>
  );
}
