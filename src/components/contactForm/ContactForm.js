import { useState, useRef, useEffect } from "react";
import { useFormik, Field, FormikProvider } from "formik";
import * as yup from "yup";
import { Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactForm.css";
import emailjs from "@emailjs/browser";
import PhoneNumberInput from "../PhoneInput";
import Form from "react-bootstrap/Form";
import { renter } from "../../constants";
import reCAPTCHA, { ReCAPTCHA } from "react-google-recaptcha";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup.string("Enter your name").required("Your name is required"),
  phone: yup.string().required("Phone is required"),
});

const ContactForm = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [clientType, setClientType] = useState(0);
  const [checked, setChecked] = useState(false);
  const [insuranceCheck, setInsuranceCheck] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [insuranceType, setInsuranceType] = useState();

  const form = useRef();

  const handleSelect = (e) => {
    setClientType(parseInt(e.target.value));
  };

  const handleInsuranceSelect = (e) => {
    setInsuranceType(parseInt(e.target.value));
  };

  // function onClick(e) {
  //   e.preventDefault();
  //   grecaptcha.enterprise.ready(async () => {
  //     const token = await grecaptcha.enterprise.execute(
  //       "6LcPrjwoAAAAAKYoIQQ8WmhNO-awerPB7UUXghNH",
  //       { action: "LOGIN" }
  //     );
  //   });
  // }

  useEffect(() => {
    console.log(clientType);
  }, [clientType]);

  useEffect(() => {
    if (insuranceCheck) {
      setIsDisabled(false);
    }
  }, [insuranceCheck]);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleInsuranceCheck = () => {
    setInsuranceCheck(!insuranceCheck);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // grecaptcha.enterprise.ready(async () => {
    //   const token = await grecaptcha.enterprise.execute(
    //     "6LcPrjwoAAAAAKYoIQQ8WmhNO-awerPB7UUXghNH",
    //     { action: "LOGIN" }
    //   );
    // });
    emailjs
      .sendForm(
        "service_plvaz67",
        "template_ubk4x74",
        form.current,
        "rrHhNUL715vcDCGpc"
      )
      .then(
        (response) => {
          console.log("SUCCESS", response.status, response.text);
          // setShowAlert(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      checked: [],
    },
    validationSchema: validationSchema,
    onSubmit: () => console.log("form", form),
  });

  return (
    <FormikProvider value={formik}>
      <div className="form-container">
        <div className="form-header">
          <Form.Select
            onChange={handleSelect}
            aria-label="Default select example"
          >
            <option value={0}>I Am A ...</option>
            <option value={1}>Renter</option>
            <option value={2}>Homeowner</option>
          </Form.Select>
        </div>
        {clientType === 0 && (
          <div className="none-selected">
            <h6>Please Select Your Housing Situation</h6>
          </div>
        )}
        {clientType === 1 && (
          <div className="renter">
            <p className="renter">
              <span>
                I am very sorry you are experiencing hardship due to Hurricane
                Idalia. I invite you to go to the FEMA website where you may be
                eligible for several different grants that you do not have to
                pay back. Some of those FEMA grants include but are not limited
                to grants for housing. Please click the button below for more
                information and to apply for assistance.
              </span>
            </p>
            <p>
              <a href="https://www.disasterassistance.gov/">HERE</a>
            </p>
          </div>
        )}
        {clientType === 2 && (
          <form className="form-main" onSubmit={formik.handleSubmit}>
            <div className="row-group1">
              <Row className="input-row">
                <Field
                  className="input-field"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </Row>
              <Row className="input-row">
                <Field
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </Row>
              <Row className="input-row">
                <PhoneNumberInput />
              </Row>
            </div>
            <ReCAPTCHA sitekey="6Lf5h1UoAAAAAPADDrd50tMLt0CaF79OY7tiBkIB" />

            <div
              className="check-boxes"
              role="group"
              aria-labelledby="checkbox-group"
            >
              <Row className="row">
                <Col>
                  <h4>Please select the type of damage your property has:</h4>
                </Col>
                <Col sm={1}>
                  <Form.Check
                    onChange={handleCheck}
                    type="checkbox"
                    name="property"
                    value="One"
                  />
                </Col>
                <Col sm={11}>Wind or Roof Damage </Col>
              </Row>
              <Row className="row">
                <Col>
                  <Form.Check
                    onChange={handleCheck}
                    type="checkbox"
                    name="flooded"
                    value="Two"
                  />
                </Col>
                <Col>Flood Damage </Col>
              </Row>
              <Row className="row">
                <Col>
                  <Form.Check
                    onChange={handleCheck}
                    type="checkbox"
                    name="roof"
                    value="Three"
                  />
                </Col>
                <Col>Both Wind/Roof and Flood Damage</Col>
              </Row>
            </div>
            {checked && (
              <div className="insurance">
                <Row className="row">
                  <Col>
                    <Form.Check
                      onChange={handleInsuranceCheck}
                      type="checkbox"
                      name="insurance"
                      value="insured"
                    />
                  </Col>
                  <Col>I have insurance.</Col>
                </Row>
                {insuranceCheck && (
                  <div className="insurance-select">
                    <Form.Select
                      onChange={handleInsuranceSelect}
                      aria-label="Default select example"
                    >
                      <option value={0}>Wind Insurance</option>
                      <option value={1}>Flood Insurance</option>
                      <option value={2}>Both</option>
                    </Form.Select>
                  </div>
                )}
              </div>
            )}

            <ReCAPTCHA sitekey="6Lf5h1UoAAAAAPADDrd50tMLt0CaF79OY7tiBkIB" />
            <Button
              disabled={isDisabled}
              className="submit-button"
              variant="danger"
              type="submit"
            >
              Submit
            </Button>
          </form>
        )}
      </div>
    </FormikProvider>
  );
};

export default ContactForm;
