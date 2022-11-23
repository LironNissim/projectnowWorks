import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUserName } from './app/MySlicers/loginSlice';
import { Outlet, useAsyncValue } from 'react-router-dom';
import MyNav from './app/MyNav';
// import {API_URL, URL, IMAGES_URL} from './constants'
import Testmui from './app/Mui/Testmui'
import Mylogo from './app/Mui/Mylogo'
import Mymenue from './app/Mui/Mymenue'
import Card from './app/Mui/Card'
import Popover from './app/Mui/Popover'
import Popovernav from './app/Mui/PopoverNav'
import Bar from './app/Mui/Bar'
import Connect from './app/Mui/Connect'
import ModalSignin from './app/Mui/ModalSigin'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function App() {
  const URL = "http://127.0.0.1:8000/token/"
  const userName = useSelector(selectUserName);

  return (
    <div>

      {/* <Mylogo></Mylogo> */}
      <Bar></Bar>
      <ModalSignin></ModalSignin>
      <Outlet></Outlet>
      
    </div>
  )
}
export default App;

{/* {userFromToke.length > 0  && `  ${userFromToke}   is logged`} */ }