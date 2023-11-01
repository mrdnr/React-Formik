
import { Routes, Route } from 'react-router-dom'
import './App.css'
import GeneralForm from './pages/GeneralForm'
import PortalForm from './pages/PortalForm'

function App() {

  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<GeneralForm/>}/>
      <Route path='/portal' element={<PortalForm/>}/>
    </Routes>
    </div>
  )
}

export default App
