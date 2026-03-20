import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const LlmQuery = () => {
  const [query, setQuery] = useState('');
  const [showIntroAlert, setShowIntroAlert] = useState(true);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    console.log('LLM Query:', query);
    // TODO : Implémenter l'appel API LLM réel ici
  };

  return (
    <React.Fragment>
      <Helmet title="Exercice Requête LLM" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Exercice Requête LLM</h1>

        {showIntroAlert && (
          <Alert 
            variant="primary" 
            className="alert-outline"
            onClose={() => setShowIntroAlert(false)}
            dismissible
          >
            <div className="alert-icon">
              <FontAwesomeIcon icon={faBell} fixedWidth />
            </div>
            <div className="alert-message">
              <strong>Bienvenue dans l'Exercice Requête LLM !</strong>
              <p className="mb-2">
                Cette page fournit une interface basique pour envoyer une requête à un Grand Modèle de Langage (LLM) via le backend.
              </p>
              <p className="mb-1">
                Pour rendre cette page fonctionnelle, vous devrez implémenter les étapes suivantes, en utilisant l'assistance de l'IA :
              </p>
              <p className="mb-2">
                Suggestion : Avant de commencer, créez un bref plan en utilisant <code>@WRITE_PLANNING_DOC.md</code> pour esquisser comment vous allez implémenter la liste de tâches ci-dessous.
              </p>
              <ul>
                <li>
                  <strong>Tâche 1 : Intégration Backend :</strong> Créez un nouveau endpoint API dans le backend (par ex., <code>/api/llm/query</code>).
                  Ce endpoint doit accepter une requête POST contenant la question de l'utilisateur. Dans le gestionnaire du endpoint,
                  faites un appel à un LLM de votre choix (par ex., en utilisant une bibliothèque comme le SDK d'OpenAI ou d'Anthropic).
                  Renvoyez la réponse du LLM au frontend.
                </li>
                <li>
                  <strong>Tâche 2 : Appel API Frontend et Affichage :</strong> Mettez à jour la fonction <code>handleSubmit</code> dans ce composant.
                  Elle doit faire une requête POST vers votre nouveau endpoint backend, en envoyant l'état <code>query</code>.
                  Gérez la réponse du backend et affichez la réponse du LLM sous le formulaire (vous devrez ajouter du state et du JSX pour cela).
                </li>
                <li>
                  <strong>Tâche 3 : Sélection du Modèle :</strong> Améliorez l'interface en ajoutant un menu déroulant ou des boutons radio
                  pour permettre à l'utilisateur de sélectionner quel LLM il veut interroger (par ex., GPT-4, Claude 3, etc.).
                  Transmettez cette sélection au endpoint backend et ajustez la logique backend en conséquence.
                </li>
              </ul>
            </div>
          </Alert>
        )}

        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>Posez une question</Card.Title>
                <h6 className="card-subtitle text-muted">
                  Saisissez votre question ci-dessous et soumettez-la au LLM.
                </h6>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Votre Question</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Saisissez votre question ici..."
                      value={query}
                      onChange={handleQueryChange}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleSubmit}>
                    Envoyer la Requête
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* TODO : Ajouter une section pour afficher la réponse du LLM */}
      </Container>
    </React.Fragment>
  );
};

export default LlmQuery; 