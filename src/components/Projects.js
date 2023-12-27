import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import logoCentral from "../assets/img/loco-central.png";
import projImgCima from "../assets/img/projectCima.png";
import projImgCima2 from "../assets/img/projectCima2.png";
import projImgSicar from "../assets/img/projectSicar.png";
import projImgSicar2 from "../assets/img/projectSicarApi.png";
import projImg3 from "../assets/img/meter3.svg";

export const Projects = () => {
    const projects = [
        {
            title: "Land Logistic Control System",
            date: "January 2023 - Currently",
            corp: "Central + Informática, Colima, Mex.",
            par1: "This is a huge and importar project into the company with more than 1 year of development. I participate in the team as a fullstack developer.",
            par2: "It consist in recreate and improve a control system for one of the most important company of logistics in Mexico, who works with the seaport of Manzanillo, the most important seaport in the mexican Pacific.",
            par3: `In the frontend I did all the design of my part of the project based on the current design that the rest of the project has but adding my vision and new proposals to enhanced the actual design and user experience.
            In the backend I contribute created the tables, views and stored procedures in the database that my team will need, and managing it and also I developed the rest of the web API that the project needed, coding all the CRUD with the database.`,
            imgLogo: logoCentral,
            img1: projImgCima,
            txtImg1: "User control to saw a list of every container that enters and leaves the building.",
            img2: projImgCima2,
            txtImg2: "User control to saw a list of each scheduled merchandise depature."
        },
        {
            title: "Inventory Control System",
            date: "June 2023 - Currently",
            corp: "Central + Informática, Colima, Mex.",
            par1:"This project consists in developed an inventory control system for a huge company in Mexico who sold and bought fruits and vegetables. ",
            par2:"I participate in the backend. Developing the web API for the system and managing the database, creating the tables, views and stored procedures.",
            imgLogo: logoCentral,
            img1: projImgSicar,
            txtImg1: "System where the Web API is used. This system works as a cash register and inventory control.",
            img2: projImgSicar2,
            txtImg2: "Web API developed for the control system."
        },
        {
            title: "Herbal Web Page",
            date: "August 2022 - December 2023",
            par1: "The development of this web page was a great project where I learn a lot because it was my first time talking with a client about what he really wants to made and saw how this requests came true. ",
            par2: "I participate as a fullstack developer but with most participate in the frontend. In the frontend I developed all the desing, keeping in mind what the client wants, like the colors and general desing, but always adding my knowledge to improve the user experience and desing. ",
            par3: "In the backend I design the database that we will need for the web page, I configured all the comunication between the web page and the database and I managed the database.",
            imgLogo: projImg3
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <h2>My Projects</h2>
                    <p>I'm a FullStack Developer and I participated in great projects that has various needs. I worked in both areas of software development, coding the user experience in the Frond End and developed the task behind this interactions into the web API's and databases in the Back End</p>
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}