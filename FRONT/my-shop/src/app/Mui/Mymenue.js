import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ '& button': { m: 1 } }}>
        <div>
          <IconButton size="small" color="secondary" variant="outlined" aria-label="delete"><DeleteIcon />
          Delete
          </IconButton>
        <IconButton size="small" color="secondary" variant="outlined" aria-label="add to shopping cart">
          <AddShoppingCartIcon /> Add to Cart
       </IconButton>
        </div>
      </Box>
    </Stack>
  );
}