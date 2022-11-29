import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dosigninAsync, dosignupAsync, selectEmail, selectUserName, logout, selectToken } from '../MySlicers/loginSlice';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MyCheckbox from '../Mui/MyCheckbox'
import Checkbox from '@mui/material/Checkbox';

const Login = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const userName = useSelector(selectUserName);
  const token = useSelector(selectToken);
  const [newUserName, setnewUserName] = useState("")
  const [newPwd, setNewPwd] = useState("")
  const [staff, setStaff] = useState(false)

  return (
    <div>
      <div>Staff: {staff ? "True" : "False"}</div>
      {userName && <div>User Name: {userName}</div>}
      {email && <div>Email: {email}</div>}

      Staff:<Checkbox defaultChecked color="secondary"onChange={(e) => setStaff(e.target.checked)} type={"checkbox"}/><br></br>      
      <input onChange={(e) => setnewUserName(e.target.value)} className="MyFormMui" placeholder="Enter Name"></input><br/>
      <input onChange={(e) => setNewPwd(e.target.value)} className="MyFormMui" placeholder="Enter Password" type='password'></input><br/>
      {/* Login */}
      <button onClick={() => dispatch(dosigninAsync({ username: newUserName, password: newPwd, staff:staff }))} className="MyNiceButton">
        SIGN IN</button>{" "}{" "}
      {/* Logout */}
      <button onClick={() => dispatch(logout({ id: 3, "name": "lironn" }))} className="MyNiceButton">
        SIGN OUT</button>
      
    </div>
  )
}

export default Login;




      // <TextField
      //     required
      //     id="filled-required"
      //     label="Name"
      //     defaultValue=""
      //     variant="filled"
      //   />
      //   <TextField
      //     id="filled-password-input"
      //     label="Password"
      //     type="password"
      //     autoComplete="current-password"
      //     variant="filled"
      //   />
      //   <TextField
      //     id="filled-email-input"
      //     label="Email"
      //     type="email"
      //     autoComplete="current-password"
      //     variant="filled"
      //   />