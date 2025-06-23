import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import "./styles/register.css";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    address: "",
    pincode: "",
    mobile: "",
    countryCode: "+91",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, mobile: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.endsWith("@gmail.com")) {
      setErrorMessage("Please provide a valid email ending with @gmail.com");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5001/register", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Error: Unable to register user");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="password-container">
            <input type={passwordVisible ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <i className="eye-icon" onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </i>
          </div>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          <div className="address-container">
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} required />
          <PhoneInput international defaultCountry="IN" value={formData.mobile} onChange={handlePhoneChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
