import './Myname.css'
const Myname = () => {
  return (
    <div className="My_name_section">
      <div className="section-title-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text">
                Welcome to my world <br /> This is
              </p>
              <h1>
                Sonali <br /> <span>Rokade</span>
              </h1>
              <div className="col-12  mb-2">
                <div className="skill">
                 <span className='web_dev'> Web Developer</span>  | 
                  <span className='arist'>Artist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myname
