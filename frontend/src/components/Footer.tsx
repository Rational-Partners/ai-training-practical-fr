import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="footer">
    <Container fluid>
      <Row className="text-muted">
        <Col xs={6} className="text-start">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span className="text-muted">Support</span>
            </li>
            <li className="list-inline-item">
              <span className="text-muted">Centre d'Aide</span>
            </li>
            <li className="list-inline-item">
              <span className="text-muted">Confidentialité</span>
            </li>
            <li className="list-inline-item">
              <span className="text-muted">Conditions d'Utilisation</span>
            </li>
          </ul>
        </Col>
        <Col xs={6} className="text-end">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} -{" "}
            <span className="text-muted">AppStack</span>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
