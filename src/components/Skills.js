import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import jsLogo from "../assets/img/jsLogo.png"
import csharpLogo from "../assets/img/csharpLogo.png"
import javaLogo from "../assets/img/javaLogo.png"
import bootstrapLogo from "../assets/img/bootstrapLogo.jpg";
import cssLogo from "../assets/img/cssLogo.png";
import entityLogo from "../assets/img/entityLogo.png";
import gitLogo from "../assets/img/gitLogo.png";
import htmlLogo from "../assets/img/htmlLogo.png";
import reactLogo from "../assets/img/reactNativeLogo.png";

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
            items: 3
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
                    <h2>Skills</h2>
                        <p>Since I started my career and until now I have a professional job, I learned differents languages, tools and frameworks.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">

                            <div className="item">
                                <img src={csharpLogo} alt="C#" />
                            </div>
                            <div className="item">
                                <img src={jsLogo} alt="JavaScript" />
                            </div>
                            <div className="item">
                                <img src={javaLogo} alt="Java" />
                            </div>
                            <div className="item">
                                <img src={cssLogo} alt="CSS5" />
                            </div>
                            <div className="item">
                                <img src={htmlLogo} alt="HTML3" />
                            </div>

                            <div className="item">
                                <img src={entityLogo} alt="Entity Framework" />
                            </div>
                            <div className="item">
                                <img src={bootstrapLogo} alt="Bootstrap" />
                            </div>

                            <div className="item">
                                <img src={reactLogo} alt="React" />
                            </div>
                            <div className="item">
                                <img src={gitLogo} alt="Git" />
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}