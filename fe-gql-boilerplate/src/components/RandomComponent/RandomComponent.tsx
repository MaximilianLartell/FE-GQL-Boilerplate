import React from 'react'
import logo from '../../assets/svg/logo.svg'
import './RandomComponent.css'

function RandomComponent() {
  return (
    <div className='RandomComponent'>
      <header className='RandomComponent-header'>
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
    </div>
  )
}

export default RandomComponent