import './Login.css';
import Cancel from '../assets/cancel.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate('/');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail() && validatePassword()) {
      // Handle successful form submission
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  return (
    <div className="login">
      <div className='head'>
        <h3>Sign In</h3>
        <img alt="cancel" className="cancel" onClick={backHome} src={Cancel} />
      </div>
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          {emailError && <div className="error">{emailError}</div>}
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          {passwordError && <div className="error">{passwordError}</div>}
          <button className="buttonsignin" type="submit">Sign In</button>
        </form>
        <div>Dont't have an account, <a href='./register'>register here</a></div>
      </div>
    </div>
  );
};

export default Login;