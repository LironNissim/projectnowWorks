import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dosignupAsync, selectEmail, selectUserName, selectToken } from '../MySlicers/loginSlice';
import Checkbox from '@mui/material/Checkbox';
import PositionedSnackbar from '../Mui/PositionAlert';




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
      <PositionedSnackbar>SIGN UP</PositionedSnackbar></button>
      
    </div>
  )
}

export default Register;



