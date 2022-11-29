import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PositionedSnackbar from './PositionAlert'


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button className='MyNiceButton' onClick={handleClick}>
        REGISTER
      </Button>

      <PositionedSnackbar>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{
            width: '100%', bgcolor: '#9656A1', open: false,
            vertical: 'top',
            horizontal: 'center'
          }}>
            Welcome aboard new PAW-shionist!
            Please SIGN IN to continue.
            <br />Enjoy!
          </Alert>
        </Snackbar>
      </PositionedSnackbar>
    </Stack>
  );
}