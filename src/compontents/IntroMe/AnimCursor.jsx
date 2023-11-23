import AnimatedCursor from "react-animated-cursor";
const AnimCursor = () =>{
    return(
      <div className="cursor">
      <AnimatedCursor 
      innerSize={10}
      outerSize={30}
      color='34, 234, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      />
         </div>
    )
}
export default AnimCursor;