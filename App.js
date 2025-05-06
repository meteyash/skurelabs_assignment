import React, { useState } from 'react';
import './App.css';

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="app-container">
      <div className="login-box">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Please login to your account</p>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              required
            />
            <div className="show-password">
              <input
                type="checkbox"
                id="showPassword"
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPassword">Show Password</label>
            </div>
          </div>

          <div className="form-group recaptcha">
          <button class="g-recaptcha" 
        data-sitekey="6LexCzArAAAAAMi_nsFk451_ZO-RA314UdIlYf6t" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
