import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import ACart from '../Components/ACart';
import { useSelector } from 'react-redux'
import { selectorders, sendOrderAsync } from '../MySlicers/orderSlice'
import Testmui from './Testmui'
import MyNav from '../MyNav';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const myorders = useSelector(selectorders);


  return (
    <div>
      <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
        <span><Testmui></Testmui></span>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}><ACart></ACart></Typography>
      </Popover>
    </div>
  );
}