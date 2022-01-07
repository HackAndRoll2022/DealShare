import { useState } from "react";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Modal,
  Spinner,
  Card,
} from "react-bootstrap";
import welcome from "../../assets/signup-welcome.svg";
import {
  PersonCircle,
  Envelope,
  KeyFill,
  BoxArrowInRight,
  PhoneFill,
} from "react-bootstrap-icons";
import "./signup.css";
import * as yup from "yup";
import { Formik } from "formik";
import { DEV_API_URL } from "../../api";
import { FailureAlert } from "../../components/FailureAlert/failurealert";

const SignUp = () => {
  const [spin, setSpin] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async (e) => {
    setSpin(true);
    console.log(e);
    await fetch(DEV_API_URL + "/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        username: e.username,
        phone: e.phone,
        password: e.password,
        tele: e.tele
      }),
    })
      .then(async (res) => {
        var result = await res.json();
        if (res.status === 201) {
          setErrorMsg("");
          handleShow();
          return result;
        } else {
          setErrorMsg(result.message);
          return result.message;
        }
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });

    setSpin(false);
  };

  const schema = yup.object({
    username: yup
      .string()
      .min(2, "Must be 2 characters or more")
      .required("Required"),
    // email: yup.string().email("Invalid email address").required("Required"),
    phone: yup.number().test(
      "maxDigits",
      "Must be a valid registered SG HP with 8 digits",
      (number) => String(number).length === 8
    ).required("Required"),
    password: yup
      .string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),
    retypedPassword: yup
      .string()
      .min(8, "Must be 8 characters or more")
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  return (
    <>
      <Container>
        <Card>
          <Card.Body>
            <h1 className="text-center">Sign Up</h1>
            <img
              className="position-relative start-50 translate-middle-x img-fluid p-5 w-50"
              src={welcome}
              alt="signup"
            />
            <Formik
              validationSchema={schema}
              onSubmit={(e) => submitHandler(e)} // use this prop later for API post
              initialValues={{
                username: "",
                email: "",
                tele: "",
                password: "",
                retypedPassword: "",
                validateOnMount: true,
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
                dirty,
              }) => (
                <Form className="form" onSubmit={handleSubmit} noValidate>
                  {!spin ? (
                    <>
                      <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            <PersonCircle />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            isValid={touched.username && !errors.username}
                            isInvalid={!!errors.username}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.username}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            <PhoneFill />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Phone number"
                            aria-describedby="inputGroupPrepend"
                            name="phone"
                            onChange={handleChange}
                            value={values.phone}
                            isValid={touched.phone && !errors.phone}
                            isInvalid={!!errors.phone}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.phone}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      {/* <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            <Envelope />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group> */}

                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            <Envelope />
                          </InputGroup.Text>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            aria-describedby="inputGroupPrepend"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            isValid={touched.password && !errors.password}
                            isInvalid={!!errors.password}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        </InputGroup>
                        <Form.Text className="text-muted">
                          Your password must be at least 8 characters long.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formRetypePassword"
                      >
                        <Form.Label>Retype Password</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            <KeyFill />
                          </InputGroup.Text>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            aria-describedby="inputGroupPrepend"
                            name="retypedPassword"
                            onChange={handleChange}
                            value={values.retypedPassword}
                            isValid={
                              touched.retypedPassword && !errors.retypedPassword
                            }
                            isInvalid={!!errors.retypedPassword}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.retypedPassword}
                          </Form.Control.Feedback>
                        </InputGroup>

                      {/* <Form.Group className="mb-3" controlId="formTele">
                        <Form.Label>Telegram</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            <PhoneFill />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Telegram handle"
                            aria-describedby="inputGroupPrepend"
                            name="tele"
                            onChange={handleChange}
                            value={values.tele}
                            isValid={!errors.tele}
                            isInvalid={!!errors.tele}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.tele}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group> */}
                      </Form.Group>
                      {errorMsg !== "" ? (
                        <FailureAlert errorMsg={errorMsg} />
                      ) : (
                        <> </>
                      )}
                    </>
                  ) : (
                    <Spinner
                      className="p-4 mb-5 top"
                      variant="primary"
                      animation={"border"}
                    />
                  )}
                  <>
                    <Button
                      className="me-2"
                      variant="primary"
                      type="submit"
                      disabled={!isValid || !dirty}
                    >
                      Register
                    </Button>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header>
                        <Modal.Title>Success!</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Your account has been created successfully. Now head
                        over to the Login page for access.
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="primary" href="/login">
                          <BoxArrowInRight className="mb-1 me-1" />
                          {" Login "}
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                  <Button variant="secondary" href="/">
                    Back to Home
                  </Button>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default SignUp;
