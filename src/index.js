import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import './custom.css'; // Import the global custom CSS file

// Define global variables for Firebase config (replace with your actual config)
// In a real application, you'd use environment variables (e.g., .env file)
// For simplicity, you can hardcode them here for local testing.
const __firebase_config = JSON.stringify({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
});

const __app_id = "YOUR_APP_ID_FROM_FIREBASE_CONSOLE";
const __initial_auth_token = ""; // Leave empty for anonymous sign-in or provide a custom token if you have one

// Attach these to the window object so they are accessible globally,
// mimicking the Canvas environment.
window.__firebase_config = __firebase_config;
window.__app_id = __app_id;
window.__initial_auth_token = __initial_auth_token;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
