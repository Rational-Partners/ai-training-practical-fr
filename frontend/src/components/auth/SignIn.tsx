import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { Alert, Button, Form, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";

import brandGoogle from "../../assets/img/brands/google.svg";

import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  return (
    <Formik
      initialValues={{
        email: "demo@bootlab.io",
        password: "unsafepassword",
        submit: false,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("L'email doit être valide")
          .max(255)
          .required("L'email est requis"),
        password: Yup.string().max(255).required("Le mot de passe est requis"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await signIn(values.email, values.password);

          navigate("/private");
        } catch (error: any) {
          const message = error.message || "Une erreur est survenue";

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <React.Fragment>
          <div className="d-grid gap-2 mb-3">
            <Link
              to="/dashboard/default"
              className="btn btn-facebook btn-lg position-relative shadow"
            >
              <span
                className="float-start fs-3 position-absolute"
                style={{ left: 16, top: 2 }}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  fixedWidth
                  className="fs-3"
                />
              </span>
              Continuer avec Facebook
            </Link>
            <Link
              to="/dashboard/default"
              className="btn btn-google btn-lg position-relative shadow"
            >
              <span
                className="float-start fs-3 position-absolute"
                style={{ left: 16, top: 1 }}
              >
                <img src={brandGoogle} height="22" alt="Google" />
              </span>
              Continuer avec Google
            </Link>
            <Link
              to="/dashboard/default"
              className="btn btn-apple btn-lg position-relative shadow"
            >
              <span
                className="float-start fs-3 position-absolute"
                style={{ left: 16, top: 2 }}
              >
                <FontAwesomeIcon icon={faApple} fixedWidth className="fs-3" />
              </span>
              Continuer avec Apple
            </Link>
          </div>
          <Row>
            <Col>
              <hr />
            </Col>
            <Col xs="auto" className="text-uppercase d-flex align-items-center">
              Ou
            </Col>
            <Col>
              <hr />
            </Col>
          </Row>
          <Form onSubmit={handleSubmit}>
            <Alert className="my-3" variant="primary">
              <div className="alert-message">
                Utilisez <strong>demo@bootlab.io</strong> et{" "}
                <strong>unsafepassword</strong> pour vous connecter
              </div>
            </Alert>
            {errors.submit && (
              <Alert className="my-3" variant="danger">
                <div className="alert-message">{errors.submit}</div>
              </Alert>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                size="lg"
                type="email"
                name="email"
                placeholder="Saisissez votre email"
                value={values.email}
                isInvalid={Boolean(touched.email && errors.email)}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {!!touched.email && (
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                size="lg"
                type="password"
                name="password"
                placeholder="Saisissez votre mot de passe"
                value={values.password}
                isInvalid={Boolean(touched.password && errors.password)}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {!!touched.password && (
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              )}
              <small>
                <Link to="/auth/reset-password">Mot de passe oublié ?</Link>
              </small>
            </Form.Group>

            <div>
              <Form.Check
                type="checkbox"
                id="rememberMe"
                label="Se souvenir de moi"
                defaultChecked
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
              >
                Se connecter
              </Button>
            </div>
          </Form>
        </React.Fragment>
      )}
    </Formik>
  );
};

export default SignIn;
