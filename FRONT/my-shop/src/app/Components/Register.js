import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dosigninAsync, dosignupAsync, selectEmail, selectUserName, logout, selectToken } from '../MySlicers/loginSlice';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MyCheckbox from '../Mui/MyCheckbox'
import Checkbox from '@mui/material/Checkbox';




const Register = () => {
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
      <div>Staff: {staff ? "True" : "False"}</div>
      {userName && <div>User Name: {userName}</div>}
      {email && <div>Email: {email}</div>}

      Staff:<Checkbox defaultChecked color="secondary"onChange={(e) => setStaff(e.target.checked)} type={"checkbox"}/><br></br>
      <input onChange={(e) => setnewUserName(e.target.value)} className="MyFormMui" placeholder="Enter Name"></input><br/>
      <input onChange={(e) => setNewPwd(e.target.value)} className="MyFormMui" placeholder="Enter Password" type='password'></input><br/>
      <input onChange={(e) => setNewEmail(e.target.value)}className="MyFormMui" placeholder="Enter Email"></input><br/>
      <button onClick={() => dispatch(dosignupAsync({ username: newUserName, password: newPwd, email: newEmail, staff:staff }))}className="MyNiceButton">
        Sign Up</button>
      
    </div>
  )
}

export default Register;



