import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ResetPassword from "../../components/auth/ResetPassword";

const ResetPasswordPage = () => (
  <React.Fragment>
    <Helmet title="Réinitialiser le Mot de Passe" />
    <div className="text-center mt-4">
      <h1 className="h2">Réinitialiser le mot de passe</h1>
      <p className="lead">Saisissez votre email pour réinitialiser votre mot de passe.</p>
    </div>

    <ResetPassword />
    <div className="text-center mt-3">
      Vous n'avez pas de compte ? <Link to="/auth/sign-up">S'inscrire</Link>
    </div>
  </React.Fragment>
);

export default ResetPasswordPage;
