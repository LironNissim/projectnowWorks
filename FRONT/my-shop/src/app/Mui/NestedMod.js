import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Register from '../Components/Register';
import Login from '../Components/Login';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import Avatar from '@mui/material/Avatar';



const style = {
  className: 'parent',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>sign up here!</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box style={{ textAlign: 'center' }} sx={{ ...style, width: 200 }}>
          <Button sx={{ marginLeft: 20.3 }} onClick={handleClose}>X</Button>
          <div>
            <Avatar sx={{ m: 1, bgcolor: '#9656A1'}}>
              <PetsOutlinedIcon/>
            </Avatar>
          </div>
          <h2 style={{ textAlign: 'center' }} id="child-modal-title">SIGN UP</h2>
          <p id="child-modal-description">
            <Register></Register>
          </p>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{ color: "white" }} onClick={handleOpen}>SIGN IN</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box style={{ textAlign: 'center' }} sx={{ ...style, width: 400 }}>
          <Button sx={{ marginLeft: 44.3 }} onClick={handleClose}>X</Button>
          <Avatar sx={{ m: 1, bgcolor: '#B980F0' }}>
            <PetsOutlinedIcon style={{ align: "center" }} />
          </Avatar>
          <h2 style={{ textAlign: 'center' }} id="parent-modal-title">SIGN IN</h2>
          <p id="parent-modal-description">
            Don't have an account?
          </p>
          <ChildModal /><Login></Login>
        </Box>
      </Modal>
    </div>
  );
}