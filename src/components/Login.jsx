// LoginPage.js
import React, { useState } from 'react';
import { useAuth } from './Contextapi';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isAuthenticated, login } = useAuth();

  const handleLogin = () => {
    // Simulate authentication process
    if (username) {
      login();
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {isAuthenticated ? (
        <p>{username}</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
<br />
          
          <button onClick={handleLogin}>Login</button>
        </div>
        
      )}
    </div>
  );
};

export default Login;