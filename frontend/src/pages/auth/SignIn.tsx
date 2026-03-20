import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import SignIn from "../../components/auth/SignIn";

const SignInPage = () => (
  <React.Fragment>
    <Helmet title="Connexion" />
    <div className="text-center mt-4">
      <h2>Bon retour !</h2>
      <p className="lead">Connectez-vous à votre compte pour continuer</p>
    </div>

    <SignIn />
    <div className="text-center mt-3">
      Vous n'avez pas de compte ? <Link to="/auth/sign-up">S'inscrire</Link>
    </div>
  </React.Fragment>
);

export default SignInPage;
