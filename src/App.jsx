import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Projects from './pages/Projects'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
  )
}

export default App