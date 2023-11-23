import AboutMe from '../Asset/my_pic.jpg'
import { Link } from 'react-router-dom'
import './CaseStudy.css'

const CaseStudy = () => {
  return (
    <div className="section full-height z-bigger">
      <div className="case-study-wrapper">
        <div className="case-study-name">
          <Link to="/AboutMe">KNOW ME BETTER</Link>
        </div>
        <div className="case-study-name">
          <Link to="/MyArt">My Art</Link>
        </div>
      </div>

      <div className="case-study-images">
        <div className="Case-study-image">
          <div className="img-hero-background">
            <img src={AboutMe} alt="myimage" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
