import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import './RandomComponent.css'

function RandomComponent() {
  return (
    <div className='RandomComponent'>
      <header className='RandomComponent-header'>
        <Logo className='App-logo' />
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
