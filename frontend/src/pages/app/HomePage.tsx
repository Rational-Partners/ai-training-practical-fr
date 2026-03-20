import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap'; // Using react-bootstrap

const HomePage = () => {
  return (
    <React.Fragment>
      <Helmet title="Accueil" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Bienvenue !</h1>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  Ceci est la page d'accueil principale de l'application. Vous pouvez commencer à ajouter votre contenu ici.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage; 