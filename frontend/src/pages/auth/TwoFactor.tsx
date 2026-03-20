import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import TwoFactor from "../../components/auth/TwoFactor";

const TwoFactorPage = () => (
  <React.Fragment>
    <Helmet title="Double Authentification" />
    <div className="text-center">
      <h1 className="h2">Vérifiez votre email</h1>
      <p className="lead">
        Veuillez saisir le code à 6 chiffres envoyé à{" "}
        <strong>chris.wood@gmail.com</strong>
      </p>
    </div>

    <TwoFactor />

    <div className="text-center">
      Vous n'avez pas reçu de code ? <Link to="/auth/2fa">Renvoyer</Link>
    </div>
  </React.Fragment>
);

export default TwoFactorPage;
