import './Skill.css'
// import Skilldata from './Skilldata'

const Skill = () => {
  return (
    <div className="container">
      <section className="skill" id="skill">
        <div className="row">
          <h2 className="title">My Skill</h2>
          <div className="col-lg-6 col-md-6 col-sm-12 col-10 m-auto">
            <div className="skill_box">
              <span className="skill_name">HTML</span>
              <div className=" skill_bar">
                <span className="skill_per html">
                  <span className="tooltip">90%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-10 m-auto">
            <div className="skill_box">
              <span className="skill_name">GIT</span>
              <div className="skill_bar">
                <span className="skill_per git">
                  <span className="tooltip">73%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-10 m-auto">
            <div className="skill_box">
              <span className="skill_name">CSS</span>
              <div className="skill_bar">
                <span className="skill_per css">
                  <span className="tooltip">85%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-10 m-auto">
            <div className="skill_box">
              <span className="skill_name">GITHUB</span>
              <div className="skill_bar">
                <span className="skill_per github">
                  <span className="tooltip">90%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-10 m-auto">
            <div className="skill_box">
              <span className="skill_name">JAVASCRIPT</span>
              <div className="skill_bar">
                <span className="skill_per javascript">
                  <span className="tooltip">75%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-10 m-auto">
            <div className="skill_box">
              <span className="skill_name nodejs">NODEJS</span>
              <div className="skill_bar">
                <span className="skill_per nodejs">
                  <span className="tooltip">70%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-10 m-auto">
            <div className="skill_box">
              <span className="skill_name">BOOTSTRAP</span>
              <div className="skill_bar">
                <span className="skill_per bootstrap">
                  <span className="tooltip">85%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-10 m-auto">
            <div className="skill_box">
              <span className="skill_name">EXPRESSJS</span>
              <div className="skill_bar">
                <span className="skill_per expressjs">
                  <span className="tooltip">65%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-10 m-auto">
            <div className="skill_box">
              <span className="skill_name">REACT</span>
              <div className="skill_bar">
                <span className="skill_per reactjs">
                  <span className="tooltip">73%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-10 m-auto">
            <div className="skill_box">
              <span className="skill_name">MANGODB</span>
              <div className="skill_bar">
                <span className="skill_per mangodb">
                  <span className="tooltip">75%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Skill
