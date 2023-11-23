import projectData from './ProjectData'
import './Project.css'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

function Project() {
  return (
    <section className="project">
      <div className="container">
        <h2 className="title">My projects</h2>
        <div className="row">
          {projectData.map(({ id, title, img, des, icon }) => {
            return (
              <div className="col-lg-4 col-md-4 col-sm-6 col-10" key={id}>
                <div className="card project_card">
                  <div className="inner-img">
                    <img className="card-img-top" src={img} alt={title} />
                  </div>
                  <div className="card-body">
                    <div className="card-info">
                      <h3 className="card-title">{title}</h3>
                      <h3 className="card-icon">
                        <span>
                          <BsGithub />
                        </span>
                        <span>
                          <FaGlobe />
                        </span>
                      </h3>
                    </div>
                    <p className="card-text">{des}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Project
