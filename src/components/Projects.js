import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import logoCentral from "../assets/img/loco-central.png";
import projImgCima from "../assets/img/projectCima.png";
import projImgCima2 from "../assets/img/projectCima2.png";
import projImgSicar from "../assets/img/projectSicar.png";
import projImgSicar2 from "../assets/img/projectSicarApi.png";
import logoNaturist from "../assets/img/projectNaturist.jpg";

export const Projects = () => {
    const projects = [
        {
            title: "Land Logistic Control System",
            date: "January 2023 - Currently",
            corp: "Central + Informática, Colima, Mex.",
            par1: "The project consisted of the creation and improvement of a control system for one of the most important logistics companies in Mexico, which works with the Manzanillo seaport, the most important seaport in the Mexican Pacific.",
            par2: "This is a huge and important project in our company and has been developing for over two years. I am part of the team as a fullstack developer.",
            par3: `For the frontend, I designed my part of the project based on the existing design, while incorpotationg my own vision and proposals to enhance the user experience. As for the backend, I created the necessary tables, views ,
            and stored procedures in the database, and managed them. Additionally, I developed the rest of the web API, coding all the CRUD operations with the database.`,
            imgLogo: logoCentral,
            img1: projImgCima,
            txtImg1: "User control to consult a list of every container that enters and leaves the building.",
            img2: projImgCima2,
            txtImg2: "User control to consult a list of each scheduled merchandise depature."
        },
        {
            title: "Inventory Control System",
            date: "June 2023 - Currently",
            corp: "Central + Informática, Colima, Mex.",
            par1:"This poject involves developing an inventory control system for a large Mexican company that sells and buys fruits and vegetables.",
            par2:"I participated in the backend development, creating the web API for the system and managining the database by creating tables, views and stored procedures.",
            imgLogo: logoCentral,
            img1: projImgSicar,
            txtImg1: "System where the Web API is used. This system works as a cash register and inventory control.",
            img2: projImgSicar2,
            txtImg2: "Web API developed for the control system."
        },
        {
            title: "Naturist Web Page",
            date: "August 2021 - December 2021",
            par1: "Proyect that consisted in developing a website for a herbalist's office where clients can make appointments and buy medicines.",
            par2: "Developing this website was a great project where I learn a lot because it was the first time I talked to a client about what they really wanted and saw how those wishes came true.",
            par3: `I'm involved as a fullstack developer, but most of my works is in the frontend. In the frontend I developed all the design, keeping in mind what the client wants, like the colors and general design, but always adding my knowledge 
            to improve the user experience and design. In the backend I design the database we beed for the website, I configure all the communication between the website and the database and I manage the database.`,
            imgLogo: logoNaturist
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <h2>My Projects</h2>
                    <p>I'm a FullStack Developer who has participated in various projects with diverse needs. I have experience in both areas of software development, coding the user experience in the frontend and developing the tasks behind these interactions in the web API's and databases in the backend</p>
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