import React from 'react';
import './App.css';
import LoginCont from './components/LoginCont/LoginCont';
import { useAuth } from './components/AuthContext';
import LoggedInBgCont from './components/LoggedInBgCont/LoggedInBgCont'

function App() {
  const { value } = useAuth();  // Get the authentication state from the context

  return (
    <div className="App">
      {!value ? <LoginCont /> : <LoggedInBgCont />}
    </div>
  );
}

export default App;
