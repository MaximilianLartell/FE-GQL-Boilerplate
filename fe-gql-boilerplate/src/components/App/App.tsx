import React from 'react'
import logo from '../../assets/svg/logo.svg'
import { Box, NavLink } from '@mantine/core'
import { Link } from 'react-router-dom'
import './App.css'
import RenderRoutes from '../../routes/routes'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Box sx={{ width: 240 }}>
        <Link to='/'>
          <NavLink label='Home' />
        </Link>
        <Link to='/randomcomponent'>
          <NavLink label='Random' />
        </Link>
      </Box>
      <RenderRoutes />
    </div>
  )
}

export default App
