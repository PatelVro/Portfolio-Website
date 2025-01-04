import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Col, Button, Offcanvas } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import ScrollProgressBar from "../../components/scrollprogressbar";
// import PortfolioWebsite from "../../assets/images/HP.webp";

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleShow = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    // Add a media query to check screen size
    const isMobile = window.matchMedia("(max-width: 991px)").matches;

    // Optional: Add a resize listener if you want to dynamically update the state
    useEffect(() => {
        const handleResize = () => {
            if (isMobile) {
                // Logic for mobile if necessary
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    return (
        <>
            <ScrollProgressBar />
            <HelmetProvider>
                <Container className="About-header">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title> Portfolio | {meta.title} </title>
                        <meta name="description" content={meta.description} />
                    </Helmet>
                    <Col className="mb-5 mt-3 pt-md-3 mb-md-0">
                        <h1 className="display-4 mb-4"> Portfolio </h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                    

                    <div className="mb-5 po_items_ho mb-md-0">
                        {dataportfolio.map((data, i) => (
                            <div key={i} className="po_item" onClick={() => isMobile && handleShow(data)}>
                                <div className="thumbnail-container">
                                    <img src={data.img} alt={data.title} />
                                </div>
                                <div className="content">
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                    {!isMobile && (
                                        <Button variant="primary" onClick={() => handleShow(data)}>
                                            View Project Details
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Offcanvas for showing project details */}
                        {selectedProject && (
                            <Offcanvas show={showModal} onHide={handleClose} placement="end" className="custom-offcanvas" >
                                <Offcanvas.Header>
                                    <Offcanvas.Title>{selectedProject.title}</Offcanvas.Title>

                                    <Button variant="close" onClick={handleClose} aria-label="Close" style={{ marginRight: '8px' }}>
                                    </Button>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <iframe
                                        src={selectedProject.url}
                                        title={selectedProject.title}
                                        width="100%"
                                        height="500px"
                                        style={{ border: "none" }}
                                        loading="lazy"
                                    ></iframe>
                                    <pre>{selectedProject.details}</pre>
                                </Offcanvas.Body>
                            </Offcanvas>
                        )}
                    </div>
                </Container>
            </HelmetProvider>
        </>
    );
};
