

import { Link } from "react-router-dom"
import "./LetsTalk.css"
const LetsTalk = () =>{
    return(
        <div className="section  LetsTalk">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
            <Link to="#">
             <div className="project-link-wrap"> 
             <p>let's talk</p> 
             </div> 
             </Link> 
            </div>
          </div>	
        </div>			
      </div>
    )
}

export default LetsTalk