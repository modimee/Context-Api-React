// App.js
import React from 'react';
import Login from './components/Login';
import { AuthProvider } from './components/Contextapi';

const App = () => (
  <AuthProvider>
    <Login />
  </AuthProvider>
);

export default App;