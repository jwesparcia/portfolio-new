import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    
     <Footer/>
    </>
  )
}

export default App
