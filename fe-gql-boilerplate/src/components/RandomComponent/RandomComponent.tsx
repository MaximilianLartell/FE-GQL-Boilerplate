import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import './RandomComponent.css'

import { useQuery, gql } from '@apollo/client'

interface Location {
  id: string
  name: string
  description: string
  photo: string
}

interface Locations {
  locations: [Location]
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`

const DisplayLocations = () => {
  const { loading, error, data } = useQuery<Locations>(GET_LOCATIONS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      {data?.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img width='400' height='250' alt='location-reference' src={`${photo}`} />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </div>
  )
}

function RandomComponent() {
  return (
    <div className='RandomComponent'>
      <Logo className='App-logo' />
      <DisplayLocations />
    </div>
  )
}

export default RandomComponent
