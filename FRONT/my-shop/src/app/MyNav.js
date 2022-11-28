import { Popover } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

const MyNav = () => {
  return (
    <div>
        <nav>
        <Link to="/">Home</Link>{" "}
        <Link to= "/Login">Login</Link>{" "}
        <Link to= "/getImages">Admin</Link>{" "}
        {/* <Link to= "/categories">Categories</Link>||{" "} */}
          <Link to= "/products">Products</Link>{" "}
        {/* <Link to= "/cart">My Cart</Link>||{" "} */}
        <Link to= "/addOrder">My Orders</Link>{" "}
        {/* <Link to= "/posts">Save Image</Link>||{" "} */}
        </nav>  
  </div>  
  )
}


export default MyNav
