import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import ethereum from '../img/Ethereum.png'
import sphere1 from '../img/Sphere1.png'
import sphere2 from '../img/Sphere2.png'
import sphere3 from '../img/Sphere3.png'

function Parallax() {
  return (
    <MouseParallaxContainer
      className="ParallaxContainer"
      useWindowMouseEvents
      resetOnLeave
      containerStyles={{
        width: "100%",
        height: "540px",
        position: "absolute",
        top: "calc(50% - 270px)",
        left: "2.5%",
        overflow: "visible",
      }}
    >
      <MouseParallaxChild
        className="ParallaxChild ethereum"
        factorX={0.06}
        factorY={0.06}
      >
        <img src={ethereum} alt="Ethereum" />
      </MouseParallaxChild>
      <MouseParallaxChild
        className="ParallaxChild sphere1"
        factorX={0.11}
        factorY={0.11}
      >
        <img src={sphere1} alt="Sphere 1" />
      </MouseParallaxChild>
      <MouseParallaxChild
        className="ParallaxChild sphere2"
        factorX={0.05}
        factorY={0.05}
      >
        <img src={sphere2} alt="Sphere 2" />
      </MouseParallaxChild>
      <MouseParallaxChild
        className="ParallaxChild sphere3"
        factorX={0.02}
        factorY={0.02}
      >
        <img src={sphere3} alt="Sphere 3" />
      </MouseParallaxChild>
    </MouseParallaxContainer>
  )
}

export default Parallax;
