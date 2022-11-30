import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUserName } from './app/MySlicers/loginSlice';
import { Outlet, useAsyncValue } from 'react-router-dom';
// import {API_URL, URL, IMAGES_URL} from './constants'
import Testmui from './app/Mui/Testmui'
import Bar from './app/Mui/Bar'
import logotwo from './app/Photos/logotwo.JPG';


function App() {
  const URL = "http://127.0.0.1:8000/token/"
  const userName = useSelector(selectUserName);

  return (
    <div>
      <img className='center' 
        src={logotwo} width= "15%" alt="not found"/> 
      <Bar></Bar>      
      <nav>
      <h4 className="animate__animated animate__bounceInRight">{userName && <div>Hello, {userName}</div>}</h4>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}
export default App;


