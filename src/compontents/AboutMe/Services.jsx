import './Services.css'
import { AiFillGithub, AiFillCodepenSquare } from 'react-icons/ai'

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="max-width">
          <h2 className="title">My Services</h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="serv-content">
                <div className="card">
                  <div className="box">
                    <AiFillGithub className="icon" />
                    <div className="text">
                      <b> Web Application Devlopment</b>
                    </div>
                    <p>
                      I develop web applications using. Get your business online
                      with the most responsive application development tool.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="serv-content">
                <div className="card">
                  <div className="box">
                    <AiFillCodepenSquare className="icon" />
                    <div className="text">
                      <b>Website designing</b>
                    </div>
                    <p>
                      I Design and I Can provide you with both front-end and
                      back-end, most responsive websites and web applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
