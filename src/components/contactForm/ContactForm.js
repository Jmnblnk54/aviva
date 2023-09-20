import { useState, useRef, useEffect } from "react";
import { useFormik, Field, FormikProvider } from "formik";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
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

  const form = useRef();

  const handleSelect = (e) => {
    setClientType(parseInt(e.target.value));
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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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
        {clientType === 1 && <h6>{renter}</h6>}
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

            <div role="group" aria-labelledby="checkbox-group">
              <Row className="row">
                <label>
                  <Field type="checkbox" name="checked" value="One" />
                  My property suffered damages from Hurricane Idalia.
                </label>
              </Row>
              <Row className="row">
                <label>
                  <Field type="checkbox" name="checked" value="Two" />
                  My house was flooded from Hurricane Idalia.
                </label>
              </Row>
              <Row className="row">
                <label>
                  <Field type="checkbox" name="checked" value="Three" />
                  My roof is leaking or damaged from Hurricane Idalia.
                </label>
              </Row>
            </div>
            <ReCAPTCHA siteKey="6LcPrjwoAAAAAKYoIQQ8WmhNO-awerPB7UUXghNH" />
            <Button className="submit-button" variant="danger" type="submit">
              Submit
            </Button>
          </form>
        )}
      </div>
    </FormikProvider>
  );
};

export default ContactForm;
