import { Carousel } from "react-bootstrap";
import hero1 from './../assets/hero1.jpeg'
import hero2 from './../assets/hero2.jpeg'
import hero3 from './../assets/hero3.jpeg'

const HeroSection = ()=>{
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hero1}
                    alt="Sekolah modern"
                    style={{ maxHeight: "640px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hero2}
                    alt="Sekolah modern"
                    style={{ maxHeight: "640px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hero3}
                    alt="Sekolah modern"
                    style={{ maxHeight: "640px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroSection;