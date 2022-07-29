import React from 'react'
import { render, screen } from '@testing-library/react'
import RandomComponent from './RandomComponent'

test('renders learn react link', () => {
  render(<RandomComponent />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
