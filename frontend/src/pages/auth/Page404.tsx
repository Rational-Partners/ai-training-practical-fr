import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Button } from "react-bootstrap";

const Page404 = () => (
  <React.Fragment>
    <Helmet title="Erreur 404" />
    <div className="text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="h2">Page non trouvée.</p>
      <p className="lead fw-normal mt-3 mb-4">
        La page que vous recherchez a peut-être été supprimée.
      </p>
      <Link to="/dashboard/default">
        <Button variant="primary" size="lg">
          Retourner au site
        </Button>
      </Link>
    </div>
  </React.Fragment>
);

export default Page404;
