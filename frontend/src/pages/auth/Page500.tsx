import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Button } from "react-bootstrap";

const Page500 = () => (
  <React.Fragment>
    <Helmet title="Erreur 500" />
    <div className="text-center">
      <h1 className="display-1 fw-bold">500</h1>
      <p className="h2">Erreur interne du serveur.</p>
      <p className="lead fw-normal mt-3 mb-4">
        Le serveur a rencontré un problème inattendu qui l'a empêché de
        traiter la requête.
      </p>
      <Link to="/dashboard/default">
        <Button variant="primary" size="lg">
          Retourner au site
        </Button>
      </Link>
    </div>
  </React.Fragment>
);

export default Page500;
