
{/**We are making the log0 image a component so we can import it
  as a component */}

import { Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

import React from 'react'

const Logo = () => {
  return (
    <img src={logo} alt="jobify" className='logo'/>
  )
}

export default Logo
