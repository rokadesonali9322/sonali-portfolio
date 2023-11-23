
import "./Dashbord.css"
import IntroMe from "./IntroMe/IntroMe"
import AnimCursor from "./IntroMe/AnimCursor" 
import Myname from "./IntroMe/Myname"
import CaseStudy from "./IntroMe/CaseStudy"
import LetsTalk from "./IntroMe/LetsTalk"
import Services from "./AboutMe/Services"

const Dashbord = () =>{
    return(
    <div className="Dashbord-main">
        <div className="Dashbord">
        <IntroMe/>
        <AnimCursor/>
        <Myname/> 
        <CaseStudy/>
        <LetsTalk/>
     </div>
    </div>
    )
}
export default Dashbord