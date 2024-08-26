import React from 'react';
import './SignUpForm.css';
import { useAuth } from '../AuthContext';  // Import the useAuth hook

function SignupForm() {
  const { value, handleSignIn } = useAuth();  // Get value and handleSignIn from context

  return (
    <div className='form-bg-container'>
      <div className="form-container">
        <h2>Create a new account</h2>
        <button className="google-signup" onClick={handleSignIn}>
          <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google Icon" className='google-icon'/>
          <p>Sign Up with Google</p>
        </button>
        <button className="create-account-btn">Create an Account</button>
        <p className='already-account-text'>Already have an account? <a href="/signin" className='signInText'>Sign In</a></p>
      </div>
    </div>
  );
}

export default SignupForm;
