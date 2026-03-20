import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import LockScreen from "../../components/auth/LockScreen";

const LockScreenPage = () => (
  <React.Fragment>
    <Helmet title="Écran de Verrouillage" />
    <div className="text-center">
      <h1 className="h2">Bon retour, Chris !</h1>
      <p className="lead">Saisissez votre mot de passe pour continuer</p>
    </div>

    <LockScreen />

    <div className="text-center">
      Ce n'est pas vous ? <Link to="/auth/sign-in">Se déconnecter</Link>
    </div>
  </React.Fragment>
);

export default LockScreenPage;
