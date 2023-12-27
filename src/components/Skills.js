import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter70Int from "../assets/img/meter70Int.png"
import meter90Adv from "../assets/img/meter90Adv.png"
import meter57Int from "../assets/img/meter57Int.png"
import meter45Bas from "../assets/img/meter45Basic.png"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 454 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Since I started my career and until now I have a professional job, I learned differents languages, tools and frameworks. Which are discribed below.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">

                            <div className="item">
                                <img src={meter90Adv} alt="Image Item1" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter70Int} alt="Image Item2" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={meter57Int} alt="Image Item3" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={meter57Int} alt="Image Item3" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter57Int} alt="Image Item3" />
                                <h5>HTML</h5>
                            </div>

                            <div className="item">
                                <img src={meter57Int} alt="Image Item3" />
                                <h5>Entity Framework</h5>
                            </div>
                            <div className="item">
                                <img src={meter70Int} alt="Image Item2" />
                                <h5>Bootstrap</h5>
                            </div>

                            <div className="item">
                                <img src={meter45Bas} alt="Image Item2" />
                                <h5>React Native</h5>
                            </div>
                            <div className="item">
                                <img src={meter70Int} alt="Image Item2" />
                                <h5>Git - version control</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}