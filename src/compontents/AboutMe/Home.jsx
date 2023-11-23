import './Home.css'
import { Link } from 'react-router-dom'
import {
  Typewriter,
  cursor,
  useTypewriter,
  Cursor,
} from 'react-simple-typewriter'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa'

const Home = () => {
  const [text] = useTypewriter({
    words: ['Web Designer.', 'Frond End Developer.', 'Full Stack Developer.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  })
  return (
    // {/* <!-- Home section begining --> */}
    <section className="home" id="AboutMe/home">
      <div className="max-width">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="home-content">
                <ul className="home_ul">
                  <li>
                    <FaFacebookF className="home_Icon" />
                  </li>
                  <li>
                    <FaTwitter className="home_Icon" />
                  </li>
                  <li>
                    <FaInstagram className="home_Icon" />
                  </li>
                  <li>
                    <FaLinkedinIn className="home_Icon" />
                  </li>
                  <li>
                    <FaGithub className="home_Icon" />
                  </li>
                </ul>
                <div className="text-1">Hi! My name is</div>
                <div className="text-2">Sonali Rokade</div>
                <div className="text-3">
                  And I'm a <span>{text}</span>
                  <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor="rgb(192, 3, 3)"
                  />
                </div>
                <Link to="#">Hire Me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
