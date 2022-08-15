import { Routes, Route } from 'react-router-dom'
import { RandomComponent } from '../components/RandomComponent'

const RenderRoutes = () => {
  return (
    <Routes>
      <Route path='randomcomponent' element={<RandomComponent />} />
    </Routes>
  )
}

export default RenderRoutes
