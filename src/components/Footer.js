import { useState, handleDownload } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { FileEarmarkArrowDownFill } from "react-bootstrap-icons";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    const handleDownload = (e) =>{
        e.preventDefault();

        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/CV-TairiJaimes.pdf';
        link.download = 'CV-TairiJaimes.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <footer className="footer" id="footer">
            <Row className="align-item-center">
                <Col sm={4} md={4}>
                    <div className="foot-txtx">
                        <h1>Contact Me!</h1>
                    </div>
                </Col>

                <Col sm={4} md={4}>
                    <div className="foot-mailto">
                        <a href="mailto:tairi.jobs@gmail.com">
                            <button onClick={() => console.log('connect')}>Send an email
                                <ArrowRightCircle size={25} />
                            </button>
                        </a>
                    </div>
                </Col>

                <Col sm={4} className="text-center text-sm-end">
                    <div className="social-icon">
                        <div className="footer-icons">
                            <div className="cv-icon">
                                <a href="#" onClick={handleDownload}><FileEarmarkArrowDownFill/>CV</a>
                            </div>
                            <a href="https://www.linkedin.com/in/dev-tairi-jaimes" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1}/>
                            </a>
                            <a href="https://www.facebook.com/tairiraquel.jaimessalazar" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon2}/>
                            </a>
                            <a href="https://www.instagram.com/z_jms/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon3}/>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <p>Developed with React</p>
            </Row>
        </footer>
    )
}