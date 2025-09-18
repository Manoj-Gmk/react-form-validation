import { useState } from "react";
import "./App.css";

function App() {
  // Initial values for form fields
  const initialState = {
    firstname: "",
    lastname: "",
    Email: "",
    contact: "",
    gender: "",
    resume: "",
    about: "",
  };

  // useState for input values and errors
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Handle input changes (text, radio, file)
  const handlechanges = (e) => {
    const { name, value, files } = e.target;

    const inputValue = name === "resume" ? files[0]?.name : value;

    setValues({
      ...values,
      [name]: inputValue,
    });

    // Remove error as user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validate only required fields (name, email, contact)
  const validate = () => {
    const newErrors = {};
    if (!values.firstname) newErrors.firstname = "Please enter your First Name";
    if (!values.lastname) newErrors.lastname = "Please enter your Last Name";
    if (!values.Email) newErrors.Email = "Please enter your Email";
    if (!values.contact) newErrors.contact = "Please enter your Phone Number";
    return newErrors;
  };

  // On submit check for errors
  const handlesubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    // Show errors if any
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // If no errors, print form and reset
      console.log(values);
      alert("Form submitted successfully!");
      setValues(initialState);
      setErrors({});
    }
  };

  // Reset form fields and errors
  const resetfun = () => {
    setValues(initialState);
    setErrors({});
  };

  return (
    <div className="container">
      <h1>React Form Validation</h1>

      <form onSubmit={handlesubmit}>
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter first name"
          value={values.firstname}
          onChange={handlechanges}
        />
        {errors.firstname && (
          <small className="error-text">{errors.firstname}</small>
        )}

        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter last name"
          value={values.lastname}
          onChange={handlechanges}
        />
        {errors.lastname && (
          <small className="error-text">{errors.lastname}</small>
        )}
        <label className="form-label">Email</label>
        <input
          type="email"
          name="Email"
          placeholder="Enter email"
          value={values.Email}
          onChange={handlechanges}
        />
        {errors.Email && <small className="error-text">{errors.Email}</small>}

        <label className="form-label">Phone Number</label>
        <input
          type="text"
          name="contact"
          placeholder="Enter phone number"
          value={values.contact}
          onChange={handlechanges}
        />
        {errors.contact && (
          <small className="error-text">{errors.contact}</small>
        )}

        <label className="form-label">Gender</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handlechanges}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handlechanges}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handlechanges}
            />
            Other
          </label>
        </div>

        <label className="form-label">Resume</label>
        <input type="file" name="resume" onChange={handlechanges} />

        <label className="form-label">About</label>
        <textarea
          name="about"
          placeholder="Tell us about yourself"
          rows="4"
          value={values.about}
          onChange={handlechanges}
        ></textarea>

        <div className="button-group">
          <button type="reset" onClick={resetfun} className="reset-btn">
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
