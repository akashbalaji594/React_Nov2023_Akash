import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignInAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";
export default function Login()
{
    
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Add your logic to handle forgot password
    console.log('Forgot password');
  };

  const handleRegister = () => {
    // Add your logic to navigate to registration page
    console.log('Register');
  };

  const handleLoginWithGoogle = () => {
    // Add your logic for login with Google
    console.log('Login with Google');
  };

  const handleLoginWithFacebook = () => {
    // Add your logic for login with Facebook
    console.log('Login with Facebook');
  };

    
    return(
      <div style={{backgroundImage:'url(https://img.freepik.com/free-photo/shopping-trolleys-packets-tags_23-2147961897.jpg?w=996&t=st=1701017481~exp=1701018081~hmac=b087553bf03bc6e91a505c9e44fb8cff560f3888cbca00ba468e5baf27e34a3a)',backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"100vh"}}>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" >
      <div className="card shadow p-4">
        <h2 className="card-title text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="text-center mb-3">
            <button type="submit" className="btn btn-primary w-100">
              <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
              Login
            </button>
          </div>
        </form>
        <div className="text-center mb-3">
          <button className="btn btn-link" onClick={handleForgotPassword} style={{textDecoration:"none",color:"black"}}>
            <FontAwesomeIcon icon={faQuestionCircle} className="me-1" />
            Forgot password?
          </button>
          <br />
          <button className="btn btn-link" onClick={handleRegister} style={{textDecoration:"none",color:"black"}}>
           <Link to='/Registerationpg' style={{textDecoration:"none",color:"black"}}>Not a user? Register here</Link> 
          </button>
        </div>
        <div className="text-center">
          <button className="btn btn-danger me-3" onClick={handleLoginWithGoogle} >
            <FontAwesomeIcon icon={faGoogle} size="2x" className="me-2"  />
            Login with Google
          </button>
          <button className="btn btn-primary" onClick={handleLoginWithFacebook}>
            <FontAwesomeIcon icon={faFacebook} size="2x" className="me-2" />
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
    </div>
    );
}
