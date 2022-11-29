import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="MyNiceButton" onClick={handleOpen}>Make Order</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{textAlign: 'center'}} id="modal-modal-title" variant="h6" component="h2">
            THANK YOU <br/>
            FOR CHOOSING DRESS CODE
          </Typography>
          <Typography style={{textAlign: 'center'}} id="modal-modal-description" sx={{ mt: 2 }}>
            <h4>Your order is on the way!</h4><br/>
            Another lucky dog is going to look fabulous today. <br/> 
            See you again soon!  
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}