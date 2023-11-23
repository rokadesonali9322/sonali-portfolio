import './About.css'
import AboutMe from '../Asset/my_pic.jpg'
const About = () => {
  return (
    <div className="container-fluid">
      <section className="about" id="Aboutus">
        <div className="row">
          <h2 className="title">About Me</h2>
          <div className="col-lg-6 col-md-6 col-sm-10 col-12 ">
            <div className="about-content">
              <div className="column_left">
                <img src={AboutMe} alt="my pic" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-10 col-12">
            <div className="column_right">
              <div className="text">
                My Name is Sonali Rokade and I'm a <span>Web Developer</span>
              </div>
              <p>
                I am an graduate Bachelor's in Computer Application with 6
                months of intership experience designing and developing web
                applications also I'm an expert on the Visual studio tool. I
                Love spending my leisure time cooking and reading book. My
                Personal traits include a never give up attitude and I'm highly
                enthusiastic and energetic with decent leadership and
                communication skills as well.
              </p>
              <p className="download_resume">
                Please download my resume to know more about my education, work,
                and career journey.
              </p>
              <a href="sonali_rokade_resume.pdf" target="_blank">
                Download my resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
