import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import SignUp from "../../components/auth/SignUp";

const SignUpPage = () => (
  <React.Fragment>
    <Helmet title="Inscription" />
    <div className="text-center mt-4">
      <h1 className="h2">Commencer</h1>
      <p className="lead">
        Commencez à créer la meilleure expérience utilisateur possible pour vos clients.
      </p>
    </div>

    <SignUp />
    <div className="text-center mt-3">
      Vous avez déjà un compte ? <Link to="/auth/sign-in">Se connecter</Link>
    </div>
  </React.Fragment>
);

export default SignUpPage;
