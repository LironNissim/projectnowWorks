
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { selectorders, sendOrderAsync } from './orderSlice'



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function CustomizedBadges() {
  const myorders = useSelector(selectorders);
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={myorders && myorders.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}