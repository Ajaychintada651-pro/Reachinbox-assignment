import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, provider } from './GoogleLogin/config';
import { signInWithPopup } from 'firebase/auth';

// Create a Context
const AuthContext = createContext();

// Create a Provider component
export const AuthProvider = ({ children }) => {
  const [value, setValue] = useState(null);
  const [dark, setDarkMode] = useState(true); // Dark mode state

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem('email', data.user.email);
      })
      .catch((error) => {
        console.error('Error during sign in:', error);
      });
  };

  const toggleDarkMode = () => {
    setDarkMode(!dark);
  };

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setValue(email);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ value, handleSignIn, dark, toggleDarkMode }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
