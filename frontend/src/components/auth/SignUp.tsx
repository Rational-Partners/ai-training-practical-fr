import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { Alert, Button, Form, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";

import brandGoogle from "../../assets/img/brands/google.svg";

import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        submit: false,
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().max(255).required("Le prénom est requis"),
        lastName: Yup.string().max(255).required("Le nom est requis"),
        email: Yup.string()
          .email("L'email doit être valide")
          .max(255)
          .required("L'email est requis"),
        password: Yup.string()
          .min(12, "Doit contenir au moins 12 caractères")
          .max(255)
          .required("Requis"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          signUp(
            values.email,
            values.password,
            values.firstName,
            values.lastName
          );
          navigate("/auth/sign-in");
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
            {errors.submit && (
              <Alert className="my-3" variant="danger">
                {errors.submit}
              </Alert>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Prénom"
                value={values.firstName}
                isInvalid={Boolean(touched.firstName && errors.firstName)}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {!!touched.firstName && (
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Nom"
                value={values.lastName}
                isInvalid={Boolean(touched.lastName && errors.lastName)}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {!!touched.lastName && (
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Adresse email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Adresse email"
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
                type="password"
                name="password"
                placeholder="Mot de passe"
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
            </Form.Group>
            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
              >
                S'inscrire
              </Button>
            </div>
          </Form>
        </React.Fragment>
      )}
    </Formik>
  );
};

export default SignUp;
