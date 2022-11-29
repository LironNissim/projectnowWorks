import { TextField } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import fashinista from '../Photos/fashinista.jpg'



const About = () => {
  return (
    <div >
<div className="animate__animated animate__slideInLeft"><img
        src={fashinista} align="left" alt="not found" /></div>
      

      <Typography>
        <h4 style={{textAlign: 'center'}} className="animate__animated animate__slideInRight"><br />
          <h3>Hello, and welcome to DRESS CODE<br />
          <br />The most glamorouse fashion boutique for your dog!</h3>
          <br />If you are here, you are probably a dog lover and a fashionist,<br />
          <br />or as we like to call it- a PAW-SHIONIST!<br />
          <br />Every item in the shop is uniquely designed by our talented Italian designers.<br />
          <br />we have 25 years of experience in the fashion industry <br />
          <br />and hold the record for winning 7 fashion competitions (between the years 2017-2022).<br />
          <br />We believe that your best friend deserve the best outfits!<br />

          <br />Still here? Check out our new Christmas collection!<br />
          If your dog was a really 'good boy' this year, you can get a 10% discount.
        </h4>

      </Typography>


    </div>
  )
}

export default About