import React from "react";
import {
  Header,
  Home,
  Footer,
  About,
  Education,
  Experience,
  Tools,
} from "../sections";
//import { Row, Col, Container } from "react-bootstrap";
import ScrollTopArrow from "./ScrollTopArrow";

import "../components/Icons";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Education />
        {/* <Container>
          <Row>
            <Col md={6}>
              <Education />
            </Col>
            <Col md={6}>
              <Experience />
            </Col>
          </Row>
        </Container> */}
        {/* <Services />
        <Review /> */}
        <Tools />
        {/* <Contact /> */}
      </main>
      <Footer />
      <ScrollTopArrow />
    </>
  );
}

export default App;
