import { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik, Field, Form, FormikProvider } from "formik";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactForm.css";

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

  const handleSubmit = (values) => {
    console.log(values);
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
          <h2>Free Policy Review & Claim Assessment!</h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Row className="row">
            <Field
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Row>
          <Row className="row">
            <Field
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Row>
          <Row className="row">
            <Field
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              type="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Row>

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
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
    </FormikProvider>
  );
};

export default ContactForm;
