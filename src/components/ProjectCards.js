import { Row, Col } from "react-bootstrap";

export const ProjectCard = ({ title, date, corp, par1, par2, par3, imgLogo, img1, txtImg1, img2, txtImg2 }) => {
    const img1Validate = img1 && (
        <Col sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={img1} alt="First image project" />
                <div className="proj-txt-img">
                    <h1>{txtImg1}</h1>
                </div>
            </div>
        </Col>
    );

    const img2Validate = img2 && (
        <Col sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={img2} alt="Second image project" />
                <div className="proj-txt-img">
                    <h1>{txtImg2}</h1>
                </div>
            </div>
        </Col>
    );

    return (
        <section className="proj-row">
            <Row>
                <Col sm={2} md={2}>
                    <div className="proj-imgbx-logo">
                        <img src={imgLogo} alt="Logo image" />
                    </div>
                </Col>
                <Col sm={10} md={10}>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <h3>{date}</h3>
                        <h2>{corp}</h2>
                        <h1>{par1}</h1>
                        <h1>{par2}</h1>
                        <h1>{par3}</h1>
                    </div>
                    <Row>
                        {img1Validate}
                        {img2Validate}
                    </Row>
                </Col>
            </Row>
        </section>
    )
}