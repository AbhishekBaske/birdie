import React, { useState } from 'react';
import './Register.css'
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('api/users/', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setErrors(error.response.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label htmlFor="confirm_password">Confirm Password:</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
        />
        {errors.confirm_password && <span>{errors.confirm_password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;