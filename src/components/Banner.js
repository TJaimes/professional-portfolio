import {useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { FileEarmarkArrowDownFill } from "react-bootstrap-icons";
import meHeader from "../assets/img/meBanner.png";
import headerPrueba from "../assets/img/imgPrueba.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Full-Stack", "Back-End Developer" ];
    const period = 2000;

    const handleDownload = (e) =>{
        e.preventDefault();

        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/CV-TairiJaimes.pdf';
        link.download = 'CV-TairiJaimes.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
        }, [text])

        const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Row>
                <Col sm={6} md={6}>
                    <div className="header-container">
                        <div className="header">
                            <h1>Hi! I'm Tairi Jaimes</h1>
                            <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                        </div>
                        <div className="social-icon">
                            <div className="header-icon">
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
                    </div>
                </Col>
                <Col sm={6} md={6}>
                    <div className="header">
                        <img src={headerPrueba} alt="Header Img"/>
                    </div>
                </Col>
            </Row>
        </section>
    )
}