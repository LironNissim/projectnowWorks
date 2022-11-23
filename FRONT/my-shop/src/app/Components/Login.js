import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dosigninAsync, dosignupAsync, selectEmail, selectUserName, logout, selectToken } from '../MySlicers/loginSlice';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const Login = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const userName = useSelector(selectUserName);
  const token = useSelector(selectToken);
  const [newUserName, setnewUserName] = useState("")
  const [newPwd, setNewPwd] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [staff, setStaff] = useState(false)



  return (
    <div>
            <nav>
        <h3>{userName && <div>Hello, {userName} <FavoriteBorderIcon color="secondary"/></div>}</h3> 
     
      </nav>
      <div>Staff: {staff ? "true" : "false"}</div>
      {userName && <div>User name:{userName}</div>}
      {email && <div>email:{email}</div>}
      {/* {token && <div>token:{token}</div>} */}

      Staff:<input onChange={(e) => setStaff(e.target.checked)} type={"checkbox"}></input>{" "}
      {/* register */}
      
      Name:<input onChange={(e) => setnewUserName(e.target.value)}></input>
      Password:<input onChange={(e) => setNewPwd(e.target.value)} type='password'></input>
      Email:<input onChange={(e) => setNewEmail(e.target.value)}></input>
      <button onClick={() => dispatch(dosignupAsync({ username: newUserName, password: newPwd, email: newEmail, staff: staff }))}>
        Register</button>
      {/* Login */}
      <button onClick={() => dispatch(dosigninAsync({ username: newUserName, password: newPwd }))}>
        Login</button>
      {/* {userName ? (
        <div> Welcome: {userName}<button onClick={() => dispatch(logout())}>Logout</button></div>
      ) : (
        <div>Welcome: Please log in</div>
      )} */}
      {/* Logout */}
      <button onClick={() => dispatch(logout({ id: 3, "name": "lironn" }))}>LogOut</button>
      
    </div>
  )
}

export default Login;


