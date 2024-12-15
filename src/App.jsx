
import { Toaster } from 'react-hot-toast'
import './App.css'
import About from './Component/About'
import Contact from './Component/Contact'
import Expreiance from './Component/Expreiance'
import Footer from './Component/Footer'
import Home from './Component/Home'
import NavBar from './Component/NavBar'
import Portfolio from './Component/Portfolio'

function App() {

  return (
    <>
    <div>

  
  
    <NavBar/>
    <Home/>
    <About />
    <Portfolio />
    <Expreiance />
    <Contact />
    <Footer />
    </div>
    <Toaster/>
    </>
  )
}

export default App
