import React from 'react'
import {Link} from 'react-router-dom'

const MyNav = () => {
  return (
    <div>
        <nav>
        <Link to="/">Home</Link>{" "}
        <Link to= "/Login">Login</Link>{" "}
        <Link to= "/getImages">Admin</Link>{" "}
          <Link to= "/products">Products</Link>{" "}
        <Link to= "/addOrder">My Orders</Link>{" "}
        </nav>  
  </div>  
  )
}


export default MyNav
