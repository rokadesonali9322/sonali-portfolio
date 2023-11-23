import './App.css'
// import CaseStudy from "./compontents/CaseStudy"
import Dashbord from './compontents/Dashbord'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMe from './compontents/AboutMe/AboutMe.jsx'
import MyArt from './compontents/IntroMe/MyArt'
import LetsTalk from './compontents/IntroMe/LetsTalk'
// import Home from './'
import About from './compontents/AboutMe/About'
import Services from './compontents/AboutMe/Services'
import Project from './compontents/AboutMe/Project'
import Myskill from './compontents/AboutMe/Myskill'
import Contact from './compontents/AboutMe/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/" element={<Dashbord />} />
          <Route path="/LetsTalk" element={<LetsTalk />} />
          <Route path="/MyArt" element={<MyArt />} />

          {/* <Route path="/Home" element={<Home />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Myskill" element={<Myskill />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
