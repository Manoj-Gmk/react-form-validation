import { useState } from "react";
import "./App.css";
function App() {
  const initialState = {
    firstname: "",
    lastname: "",
    Email: "",
    contact: "",
    gender: "",
    resume: "",
    about: "",
  };
  const [values, setValues] = useState(initialState);

  const handlechanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const resetfun = (e) => {
    setValues(initialState);
  };
  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form onSubmit={handlesubmit}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter first name"
          name="firstname"
          value={values.firstname}
          onChange={handlechanges}
          required
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter Last name"
          name="lastname"
          value={values.lastname}
          onChange={handlechanges}
          required
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          name="Email"
          value={values.Email}
          onChange={handlechanges}
          required
        />
        <label>Contact</label>
        <input
          type="text"
          placeholder="Enter number"
          name="contact"
          value={values.contact}
          onChange={handlechanges}
          required
        />
        <label>Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handlechanges}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handlechanges}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          onChange={handlechanges}
        />
        Other
        <label>Resume</label>
        <input
          type="file"
          placeholder="Select Resume"
          name="resume"
          value={values.resume}
          onChange={handlechanges}
        />
        <label>About</label>
        <textarea
          type="text"
          id="about"
          cols={30}
          rows={10}
          placeholder="Enter Discription"
          name="about"
          value={values.about}
          onChange={handlechanges}
        ></textarea>
        <button type="reset" onClick={resetfun}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
