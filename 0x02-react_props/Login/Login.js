import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <button type="submit">Login</button>
    </>
  );
}

export default Login;
