import React from 'react'
import styled from 'styled-components'
/**anything inside wrapper tag now adheres to these css styling */
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Logo } from '../components/index'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>

          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


          </p>
          <Link to="/register" className='btn register-link'>
            Register
          </Link>

          <Link to="/login" className='btn'>
            Login / Demo User
          </Link>

        </div>

        <img src={main} alt="job hunt" className='img main-img'/>

      </div>
    
    </Wrapper>
    
  )
}




export default Landing
