import { NavLink } from 'react-router-dom'
import './AboutMe.css'
import About from './About.jsx'
import Home from './Home'
import Services from './Services'
import Myskill from './Myskill'
import Project from './Project'
import Contact from './Contact'
// import { Navdata } from './Navdata'

const AboutMe = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className=" navbar-brand logo">
          <NavLink to="#">
            Portfo<span>lio.</span>
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto  listStyle">
            {/* {Navdata.map((value) => {
              console.log(value.Link)
              return (
                <li className="nav-item" key={value.id}>
                  <NavLink
                    className="nav-link"
                    // activeclass="active"
                    to={value.Link}
                    spy="true"
                    smooth="true"
                    offset={-70}
                    duration="500"
                  >
                    {value.title}
                  </NavLink>
                </li>
              )
            })}
          </ul> */}
            <li className="nav-item active ">
              <NavLink to="/AboutMe" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/About" className="nav-link">
                Aboutus
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/Services" className="nav-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/Myskill" className="nav-link">
                Skill
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/Project" className="nav-link">
                Project
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/Contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Home />
      <About />
      <Services />
      <Myskill />
      <Project />
      <Contact />
    </>
  )
}

export default AboutMe
