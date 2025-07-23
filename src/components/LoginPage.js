// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import AuthForm from './AuthForm';

// const LoginPage = ({ onLoginSuccess, onNavigateToRegister }) => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     const result = await login(email, password);
//     if (result.success) {
//       onLoginSuccess();
//     } else {
//       setErrorMessage(result.message || "Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <AuthForm
//       title="Login to Your Account"
//       fields={[
//         { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', value: email, onChange: (e) => setEmail(e.target.value) },
//         { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', value: password, onChange: (e) => setPassword(e.target.value) },
//       ]}
//       buttonText="Sign In"
//       onSubmit={handleSubmit}
//       linkText={{ pre: "Don't have account?", link: "Sign Up" }}
//       onLinkClick={onNavigateToRegister}
//       errorMessage={errorMessage}
//     />
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthForm from './AuthForm';

const LoginPage = ({ onLoginSuccess, onNavigateToRegister }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const result = await login(email, password);
    if (result.success) {
      onLoginSuccess();
    } else {
      setErrorMessage(result.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <AuthForm
      title="Login to Your Account"
      fields={[
        { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', value: email, onChange: (e) => setEmail(e.target.value) },
        { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', value: password, onChange: (e) => setPassword(e.target.value) },
      ]}
      buttonText="Sign In"
      onSubmit={handleSubmit}
      linkText={{ pre: "Don't have account?", link: "Sign Up" }}
      onLinkClick={onNavigateToRegister}
      errorMessage={errorMessage}
    />
  );
};

export default LoginPage;