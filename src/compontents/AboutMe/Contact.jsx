import './Contact.css'
import React from 'react'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <h2 className="title">Contact</h2>
          <div className="col-lg-10 col-md-10 col-sm-12 m-auto ">
            <div className="form_container">
              <form className="w-50 m-auto">
                <div className="username mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>

                <div className="email mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>

                <div className="message mb-4">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </div>
                <div className="message">
                  <input type="submit" className="form-control" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
