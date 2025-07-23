// import React, { useState, useEffect, createContext, useContext } from 'react';

// // Auth Context for managing user state across components
// const AuthContext = createContext(null);

// // Custom hook to use AuthContext
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// // Simplified In-Memory User Storage for demonstration
// // In a real app, this would be a database or persistent storage like localStorage
// const users = {}; // Stores { email: password }

// // Auth Provider Component
// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loadingAuth, setLoadingAuth] = useState(true);
//   const [userId, setUserId] = useState(null); // In a real app, this would be a unique ID from a backend

//   useEffect(() => {
//     // Simulate initial loading and "anonymous" user if no one is logged in
//     // In this simple model, we just set a dummy user ID
//     setUserId(crypto.randomUUID()); // Generate a unique ID for the "anonymous" session
//     setLoadingAuth(false);
//   }, []);

//   const value = {
//     currentUser,
//     userId,
//     loadingAuth,
//     login: async (email, password) => {
//       // Simulate API call delay
//       await new Promise(resolve => setTimeout(resolve, 500));

//       if (users[email] && users[email] === password) {
//         // Simulate a successful login
//         setCurrentUser({ email: email, uid: email }); // Use email as uid for simplicity
//         setUserId(email); // Set userId to email for logged-in user
//         return { success: true };
//       } else {
//         return { success: false, message: "Invalid email or password." };
//       }
//     },
//     register: async (email, password) => {
//       // Simulate API call delay
//       await new Promise(resolve => setTimeout(resolve, 500));

//       if (users[email]) {
//         return { success: false, message: "Email already registered." };
//       } else {
//         users[email] = password; // Store user in memory
//         // Simulate automatic login after registration
//         setCurrentUser({ email: email, uid: email });
//         setUserId(email);
//         return { success: true };
//       }
//     },
//     logout: async () => {
//       // Simulate API call delay
//       await new Promise(resolve => setTimeout(resolve, 300));
//       setCurrentUser(null);
//       setUserId(crypto.randomUUID()); // Generate a new dummy ID for the anonymous session
//       return { success: true };
//     },
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loadingAuth && children}
//     </AuthContext.Provider>
//   );
// };


import React, { useState, useEffect, createContext, useContext } from 'react';

// Auth Context for managing user state across components
const AuthContext = createContext(null);

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Helper functions for localStorage interaction
const getStoredUsers = () => {
  try {
    const stored = localStorage.getItem('quizAppUsers');
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error("Error reading users from localStorage:", error);
    return {};
  }
};

const setStoredUsers = (usersData) => {
  try {
    localStorage.setItem('quizAppUsers', JSON.stringify(usersData));
  } catch (error) {
    console.error("Error writing users to localStorage:", error);
  }
};

const getStoredQuizHistory = () => {
  try {
    const stored = localStorage.getItem('quizAppHistory');
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error("Error reading quiz history from localStorage:", error);
    return {};
  }
};

const setStoredQuizHistory = (historyData) => {
  try {
    localStorage.setItem('quizAppHistory', JSON.stringify(historyData));
  } catch (error) {
    console.error("Error writing quiz history to localStorage:", error);
  }
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [userId, setUserId] = useState(null);

  // Load users and history from localStorage on initial render
  const [users, setUsers] = useState(getStoredUsers);
  const [quizHistory, setQuizHistory] = useState(getStoredQuizHistory);

  // Effect to load current user from session storage or simulate anonymous
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setCurrentUser(user);
        setUserId(user.uid);
      } else {
        // If no user is stored, create an anonymous session ID
        const anonId = crypto.randomUUID();
        setUserId(anonId);
        // We don't store anonymous user in localStorage for login purposes
      }
    } catch (error) {
      console.error("Error loading current user from localStorage:", error);
      const anonId = crypto.randomUUID();
      setUserId(anonId);
    } finally {
      setLoadingAuth(false);
    }
  }, []);

  // Effect to save users and history to localStorage whenever they change
  useEffect(() => {
    setStoredUsers(users);
  }, [users]);

  useEffect(() => {
    setStoredQuizHistory(quizHistory);
  }, [quizHistory]);

  // Effect to save current user to localStorage when currentUser state changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);


  // Function to add a quiz result to history
  const addQuizResult = (result) => {
    if (userId) {
      setQuizHistory(prevHistory => {
        const newHistoryForUser = [...(prevHistory[userId] || []), { ...result, timestamp: new Date().toISOString() }];
        const updatedHistory = {
          ...prevHistory,
          [userId]: newHistoryForUser
        };
        return updatedHistory;
      });
    }
  };

  // Function to get quiz history for the current user
  const getQuizHistory = () => {
    return quizHistory[userId] || [];
  };


  const value = {
    currentUser,
    userId,
    loadingAuth,
    login: async (email, password) => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call delay

      if (users[email] && users[email] === password) {
        const loggedInUser = { email: email, uid: email };
        setCurrentUser(loggedInUser);
        setUserId(email);
        return { success: true };
      } else {
        return { success: false, message: "Invalid email or password." };
      }
    },
    register: async (email, password) => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call delay

      if (users[email]) {
        return { success: false, message: "Email already registered." };
      } else {
        setUsers(prevUsers => ({
          ...prevUsers,
          [email]: password
        }));
        const registeredUser = { email: email, uid: email };
        setCurrentUser(registeredUser);
        setUserId(email);
        return { success: true };
      }
    },
    logout: async () => {
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate API call delay
      setCurrentUser(null);
      setUserId(crypto.randomUUID()); // Generate a new dummy ID for the anonymous session
      // Note: User data remains in localStorage for future logins
      return { success: true };
    },
    addQuizResult, // Expose the addQuizResult function
    getQuizHistory, // Expose the getQuizHistory function
  };

  return (
    <AuthContext.Provider value={value}>
      {!loadingAuth && children}
    </AuthContext.Provider>
  );
};
