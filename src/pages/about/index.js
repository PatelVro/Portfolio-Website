import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import SvgIcon from "./../../components/techicons/index";
import ScrollProgressBar from "../../components/scrollprogressbar";
import Transitions from "../../components/transition/transition";
import { motion, useScroll, useSpring } from "framer-motion";

import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <>
      <ScrollProgressBar />
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> About | {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            {/* <Row> */}
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            {/* </Row> */}
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{dataabout.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{dataabout.aboutme}</p>
              </div>
            </Col>
          </Row>
          <Row className=" sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Work Timline</h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Skills</h3>
            </Col>
            <Col lg="7">
              <div className="d-flex flex-column">
                {/* Programming Languages */}
                <h4 className="mt-4">Programming Languages</h4>
                <div className="d-flex flex-wrap">

                  <SvgIcon name="javascript" width="50" height="50" className="m-2" />
                  <SvgIcon name="python" width="90" height="50" className="m-2" />
                  <SvgIcon name="Cplusplus" width="50" height="50" className="m-2" />
                  <SvgIcon name="c_sharp" width="50" height="50" className="m-2" />
                  <SvgIcon name="Java" width="50" height="50" className="m-2" />
                </div>

                {/* Frameworks/Libraries */}
                <h4 className="mt-4">Frameworks/Libraries</h4>
                <div className="d-flex flex-wrap">
                  <SvgIcon name="react" width="50" height="50" className="m-2" />
                  <SvgIcon name="bootstrap" width="50" height="50" className="m-2" />
                  <SvgIcon name="tailwind_css" width="50" height="50" className="m-2" />
                  <SvgIcon name="spring_boot" width="50" height="50" className="m-2" />
                  <SvgIcon name="selenium" width="100" height="50" className="m-2" />
                </div>

                {/* Databases */}
                <h4 className="mt-4">Databases</h4>
                <div className="d-flex flex-wrap">
                  <SvgIcon name="mongodb" width="115" height="50" className="m-2" />
                  <SvgIcon name="mysql" width="115" height="50" className="m-2" />
                </div>

                {/* Tools/Platforms */}
                <h4 className="mt-4">Tools/Platforms</h4>
                <div className="d-flex flex-wrap">
                  <SvgIcon name="html_5" width="50" height="50" className="m-2" />
                  <SvgIcon name="CSS_3" width="50" height="50" className="m-2" />
                  <SvgIcon name="visual_studio_code" width="50" height="50" className="m-2" />
                  <SvgIcon name="Visual_studio" width="50" height="50" className="m-2" />
                  <SvgIcon name="git" width="50" height="50" className="m-2" />
                  <SvgIcon name="android_studio" width="50" height="50" className="m-2" />


                  <SvgIcon name="Woocommerce" width="50" height="50" className="m-2" />
                  <SvgIcon name="Wordpress" width="50" height="50" className="m-2" />
                  <SvgIcon name="EC2" width="50" height="50" className="m-2" />


                  <SvgIcon name="lightsail" width="50" height="50" className="m-2" />
                </div>
              </div>
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lang="5">
              <h3 className="color_sec py-4">services</h3>
            </Col>
            <Col lg="7">
              {services.map((data, i) => {
                return (
                  <div className="service_ py-4" key={i}>
                    <h5 className="service__title">{data.title}</h5>
                    <p className="service_desc">{data.description}</p>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </HelmetProvider>
    </>
  );
};
