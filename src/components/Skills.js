import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import Lottie from "lottie-react";
import web_development from "../assets/lottie_animations/web_development.json";
import web_design from "../assets/lottie_animations/web_design.json";
import app_development from "../assets/lottie_animations/app_development.json";
import digital_marketing from "../assets/lottie_animations/digital_marketing.json";
import { Android2,Apple } from "react-bootstrap-icons";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Services</h2>
                        <p>Over the past year, we have crafted more than 10 live websites, each tailored to meet the unique needs of our clients. Our expertise spans from conceptualization to execution, ensuring a seamless online presence for your brand. Our services include:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                           
                            <div className="item">
                            <Lottie animationData={digital_marketing} loop={true} />                                
                                <h4>Digital Marketing</h4>
                            </div>
                            <div className="item">
                            <Lottie animationData={app_development} loop={true} />                                
                                <h4><Android2 size={25} color="green"/>     <Apple size={25} /></h4><h4> App Development</h4>
                            </div>
                            <div className="item">
                            <Lottie animationData={web_development} loop={true} />                                <h4>Web Development</h4>
                            </div>
                            <div className="item">
                            <Lottie animationData={web_design} loop={true} />                                <h4>Web Design</h4>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
