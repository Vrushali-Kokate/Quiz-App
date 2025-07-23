// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import AuthForm from './AuthForm';

// const RegisterPage = ({ onRegisterSuccess, onNavigateToLogin }) => {
//   const { register } = useAuth();
//   const [name, setName] = useState(''); // Added for consistency with image, though not used in Firebase Auth directly
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       return;
//     }
//     const result = await register(email, password);
//     if (result.success) {
//       onRegisterSuccess();
//     } else {
//       setErrorMessage(result.message || "Registration failed. Please try again.");
//     }
//   };

//   return (
//     <AuthForm
//       title="Let's improve your knowledge"
//       fields={[
//         { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', value: name, onChange: (e) => setName(e.target.value) },
//         { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', value: email, onChange: (e) => setEmail(e.target.value) },
//         { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', value: password, onChange: (e) => setPassword(e.target.value) },
//         { id: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Enter your password', value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value) },
//       ]}
//       buttonText="Sign Up"
//       onSubmit={handleSubmit}
//       linkText={{ pre: "Already have account?", link: "Sign In" }}
//       onLinkClick={onNavigateToLogin}
//       errorMessage={errorMessage}
//     />
//   );
// };

// export default RegisterPage;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthForm from './AuthForm';

const RegisterPage = ({ onRegisterSuccess, onNavigateToLogin }) => {
  const { register } = useAuth();
  const [name, setName] = useState(''); // Added for consistency with image, though not used in Firebase Auth directly
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    const result = await register(email, password);
    if (result.success) {
      onRegisterSuccess();
    } else {
      setErrorMessage(result.message || "Registration failed. Please try again.");
    }
  };

  return (
    <AuthForm
      title="Let's improve your knowledge"
      fields={[
        { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', value: name, onChange: (e) => setName(e.target.value) },
        { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', value: email, onChange: (e) => setEmail(e.target.value) },
        { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', value: password, onChange: (e) => setPassword(e.target.value) },
        { id: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Enter your password', value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value) },
      ]}
      buttonText="Sign Up"
      onSubmit={handleSubmit}
      linkText={{ pre: "Already have account?", link: "Sign In" }}
      onLinkClick={onNavigateToLogin}
      errorMessage={errorMessage}
    />
  );
};

export default RegisterPage;