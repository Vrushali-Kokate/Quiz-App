// import React, { useState, useEffect } from 'react';
// import { useAuth } from './context/AuthContext';
// import Header from './components/Header';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';
// import QuizConfigPage from './components/QuizConfigPage';
// import QuizInfoPage from './components/QuizInfoPage';
// import QuizPage from './components/QuizPage';
// import ResultsPage from './components/ResultsPage';
// import { dummyQuestions, quizCategories } from './data/quizData';

// const App = () => {
//   const { currentUser, userId, loadingAuth, logout } = useAuth();
//   const [currentPage, setCurrentPage] = useState('login'); // Initial page
//   const [quizSettings, setQuizSettings] = useState(null);
//   const [quizQuestions, setQuizQuestions] = useState([]);
//   const [userQuizResults, setUserQuizResults] = useState([]); // To store results for display

//   // Effect to handle initial page redirection after auth loads
//   useEffect(() => {
//     if (!loadingAuth) {
//       if (currentUser) {
//         setCurrentPage('quizConfig');
//       } else {
//         setCurrentPage('login');
//       }
//     }
//   }, [loadingAuth, currentUser]);

//   // Function to fetch questions based on settings
//   const fetchQuizQuestions = (settings) => {
//     // In a real app, you'd make an API call here, e.g.:
//     // const response = await fetch(`https://opentdb.com/api.php?amount=${settings.numQuestions}&category=${settings.category}&difficulty=${settings.difficulty}&type=multiple`);
//     // const data = await response.json();
//     // setQuizQuestions(data.results.map(q => ({ question: q.question, options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5), answer: q.correct_answer })));

//     // For now, use dummy data
//     const key = `${settings.categoryName}-${settings.difficulty}`;
//     const questions = dummyQuestions[key] || dummyQuestions['General Knowledge-easy']; // Fallback
//     setQuizQuestions(questions.map(q => ({
//       ...q,
//       options: [...q.options].sort(() => Math.random() - 0.5) // Shuffle options
//     })));
//   };

//   const handleBeginTest = (settings) => {
//     setQuizSettings(settings);
//     fetchQuizQuestions(settings);
//     setCurrentPage('quizInfo');
//   };

//   const handleStartQuiz = () => {
//     setCurrentPage('quiz');
//   };

//   const handleQuizComplete = (answers, questions) => {
//     setUserQuizResults(answers);
//     setCurrentPage('results');
//   };

//   const handleLogout = async () => {
//     const result = await logout();
//     if (result.success) {
//       setCurrentPage('login');
//       setQuizSettings(null); // Clear quiz state on logout
//       setQuizQuestions([]);
//       setUserQuizResults([]);
//     } else {
//       console.error("Logout failed:", result.message);
//       // Optionally show an error message to the user
//     }
//   };

//   if (loadingAuth) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-2xl text-gray-700">Loading application...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 font-inter">
//       {currentUser && currentPage !== 'login' && currentPage !== 'register' && (
//         <Header onLogout={handleLogout} />
//       )}
//       <main>
//         {(() => {
//           switch (currentPage) {
//             case 'login':
//               return (
//                 <LoginPage
//                   onLoginSuccess={() => setCurrentPage('quizConfig')}
//                   onNavigateToRegister={() => setCurrentPage('register')}
//                 />
//               );
//             case 'register':
//               return (
//                 <RegisterPage
//                   onRegisterSuccess={() => setCurrentPage('quizConfig')}
//                   onNavigateToLogin={() => setCurrentPage('login')}
//                 />
//               );
//             case 'quizConfig':
//               return <QuizConfigPage onBeginTest={handleBeginTest} quizCategories={quizCategories} />;
//             case 'quizInfo':
//               return (
//                 <QuizInfoPage
//                   quizSettings={quizSettings}
//                   onStartQuiz={handleStartQuiz}
//                   onBackToConfig={() => setCurrentPage('quizConfig')}
//                 />
//               );
//             case 'quiz':
//               return (
//                 <QuizPage
//                   quizQuestions={quizQuestions}
//                   timeLimit={quizSettings?.timeLimit || 3}
//                   onQuizComplete={handleQuizComplete}
//                 />
//               );
//             case 'results':
//               return (
//                 <ResultsPage
//                   userAnswers={userQuizResults}
//                   quizQuestions={quizQuestions}
//                   onBackToDashboard={() => setCurrentPage('quizConfig')}
//                 />
//               );
//             default:
//               return <LoginPage onLoginSuccess={() => setCurrentPage('quizConfig')} onNavigateToRegister={() => setCurrentPage('register')} />;
//           }
//         })()}
//       </main>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import QuizConfigPage from './components/QuizConfigPage';
import QuizInfoPage from './components/QuizInfoPage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import QuizHistoryPage from './components/QuizHistoryPage';
import { dummyQuestions, quizCategories } from './data/quizData';

const App = () => {
  const { currentUser, userId, loadingAuth, logout, addQuizResult, getQuizHistory } = useAuth();
  const [currentPage, setCurrentPage] = useState('login'); // Initial page
  const [quizSettings, setQuizSettings] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [userQuizResults, setUserQuizResults] = useState([]); // To store results for display

  // Effect to handle initial page redirection after auth loads
  useEffect(() => {
    if (!loadingAuth) {
      if (currentUser) {
        setCurrentPage('quizConfig');
      } else {
        setCurrentPage('login');
      }
    }
  }, [loadingAuth, currentUser]);

  // Function to fetch questions based on settings
  const fetchQuizQuestions = (settings) => {
    const key = `${settings.categoryName}-${settings.difficulty}`;
    const questions = dummyQuestions[key] || dummyQuestions['General Knowledge-easy']; // Fallback
    setQuizQuestions(questions.map(q => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5) // Shuffle options
    })));
  };

  const handleBeginTest = (settings) => {
    setQuizSettings(settings);
    fetchQuizQuestions(settings);
    setCurrentPage('quizInfo');
  };

  const handleStartQuiz = () => {
    setCurrentPage('quiz');
  };

  const handleQuizComplete = (answers, questions, quizSettings) => {
    setUserQuizResults(answers);
    // Calculate score and other details to save
    const totalQuestions = questions.length;
    const correctAnswersCount = answers.filter(answer => answer.isCorrect).length;
    const score = (correctAnswersCount / totalQuestions) * 100;

    addQuizResult({
      score: Math.round(score),
      category: quizSettings.categoryName,
      difficulty: quizSettings.difficulty,
      totalQuestions: totalQuestions,
      correctAnswers: correctAnswersCount,
      answers: answers // Store detailed answers for review
    });
    setCurrentPage('results');
  };

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      setCurrentPage('login');
      setQuizSettings(null); // Clear quiz state on logout
      setQuizQuestions([]);
      setUserQuizResults([]);
    } else {
      console.error("Logout failed:", result.message);
    }
  };

  if (loadingAuth) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-2xl text-secondary">Loading application...</div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light font-inter"> {/* Changed to Bootstrap classes */}
      {currentUser && currentPage !== 'login' && currentPage !== 'register' && (
        <Header onLogout={handleLogout} onNavigateToHistory={() => setCurrentPage('quizHistory')} />
      )}
      <main>
        {(() => {
          switch (currentPage) {
            case 'login':
              return (
                <LoginPage
                  onLoginSuccess={() => setCurrentPage('quizConfig')}
                  onNavigateToRegister={() => setCurrentPage('register')}
                />
              );
            case 'register':
              return (
                <RegisterPage
                  onRegisterSuccess={() => setCurrentPage('quizConfig')}
                  onNavigateToLogin={() => setCurrentPage('login')}
                />
              );
            case 'quizConfig':
              return <QuizConfigPage onBeginTest={handleBeginTest} quizCategories={quizCategories} currentUser={currentUser} />;
            case 'quizInfo':
              return (
                <QuizInfoPage
                  quizSettings={quizSettings}
                  onStartQuiz={handleStartQuiz}
                  onBackToConfig={() => setCurrentPage('quizConfig')}
                />
              );
            case 'quiz':
              return (
                <QuizPage
                  quizQuestions={quizQuestions}
                  timeLimit={quizSettings?.timeLimit || 3}
                  onQuizComplete={(answers, questions) => handleQuizComplete(answers, questions, quizSettings)}
                />
              );
            case 'results':
              return (
                <ResultsPage
                  userAnswers={userQuizResults}
                  quizQuestions={quizQuestions}
                  onBackToDashboard={() => setCurrentPage('quizConfig')}
                />
              );
            case 'quizHistory': // Case for history page
              return (
                <QuizHistoryPage
                  quizHistory={getQuizHistory()}
                  onBackToDashboard={() => setCurrentPage('quizConfig')}
                />
              );
            default:
              return <LoginPage onLoginSuccess={() => setCurrentPage('quizConfig')} onNavigateToRegister={() => setCurrentPage('register')} />;
          }
        })()}
      </main>
    </div>
  );
};

export default App;