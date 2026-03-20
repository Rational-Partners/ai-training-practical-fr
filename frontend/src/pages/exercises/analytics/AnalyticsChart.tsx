import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Alert, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const AnalyticsChartExercise = () => {
  return (
    <React.Fragment>
      <Helmet title="Exercice Graphique d'Analytique" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Exercice Graphique d'Analytique</h1>

        <Row>
          <Col> {/* Use Col without size prop to take full width */}
            <Alert variant="primary" className="alert-outline mb-4">
              <div className="alert-icon">
                <FontAwesomeIcon icon={faInfoCircle} fixedWidth />
              </div>
              <div className="alert-message">
                <strong>Objectif de l'Exercice</strong>
                <p className="mb-2">
                  Votre objectif est d'afficher les données analytiques mensuelles du site web de l'entreprise à l'aide d'un graphique.
                </p>
                <p className="mb-1">
                  D'abord, vous devez récupérer les données depuis le endpoint de l'API backend. Nous avons délibérément évité de vous indiquer où il se trouve, car vous pouvez le découvrir en utilisant l'IA.
                </p>
                <p className="mb-0">
                  Une fois que vous avez les données, utilisez une bibliothèque de graphiques pour les visualiser. Vous pouvez choisir quelles métriques afficher (par ex., Pages Vues et Visites Totales dans le temps). Il y a des graphiques d'exemple implémentés dans la section <strong>Mises en Page d'Exemple</strong> de cette application que vous pouvez utiliser comme référence pour les détails d'implémentation. Cependant, <strong>ne regardez pas le code d'exemple directement</strong>. À la place, demandez à l'assistant IA de regarder le code d'exemple pertinent et de vous expliquer comment implémenter le graphique en s'appuyant sur ces exemples.
                </p>
              </div>
            </Alert>
          </Col>
        </Row>

        <Row>
          <Col> {/* Use Col without size prop to take full width */} 
            <Card>
              <Card.Header>
                <Card.Title>Graphique Analytique Mensuel</Card.Title>
                <h6 className="card-subtitle text-muted">Affichez ici les données analytiques mensuelles récupérées.</h6>
              </Card.Header>
              <Card.Body>
                {/* Le composant graphique ira ici */}
                <div className="text-center">
                  Emplacement du graphique
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AnalyticsChartExercise; 