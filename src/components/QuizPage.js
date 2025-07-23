
// import React, { useState, useEffect } from 'react';

// const QuizPage = ({ quizQuestions, timeLimit, onQuizComplete }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [timeLeft, setTimeLeft] = useState(timeLimit * 60); // timeLimit is in minutes
//   const [quizEnded, setQuizEnded] = useState(false);

//   // Helper function to get the finalized list of answers
//   // This ensures all questions are accounted for, even if some were skipped or timed out
//   const getFinalAnswers = () => {
//     const answers = [...userAnswers]; // Start with already submitted answers

//     // If the current question's answer is missing from the collected answers, add it
//     // This handles cases where the timer runs out or quiz ends before 'Next Question' is clicked for the current question
//     if (answers.length <= currentQuestionIndex) {
//       const question = quizQuestions[currentQuestionIndex];
//       answers.push({
//         question: question.question,
//         selectedOption: selectedOption, // Will be null if not selected
//         correctAnswer: question.answer,
//         isCorrect: selectedOption === question.answer,
//       });
//     }

//     // Ensure all remaining questions (if any were skipped due to timer) are marked as unanswered
//     for (let i = answers.length; i < quizQuestions.length; i++) {
//       const question = quizQuestions[i];
//       answers.push({
//         question: question.question,
//         selectedOption: null, // No option selected
//         correctAnswer: question.answer,
//         isCorrect: false,
//       });
//     }
//     return answers;
//   };

//   // Timer effect
//   useEffect(() => {
//     if (quizEnded || timeLeft <= 0) return;

//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(timer);
//           setQuizEnded(true);
//           // When time runs out, finalize answers including the current one
//           const finalAnswers = getFinalAnswers(); // Get the complete list of answers
//           onQuizComplete(finalAnswers, quizQuestions);
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     // Cleanup: ensure the timer is cleared if component unmounts or dependencies change
//     return () => clearInterval(timer);
//   }, [timeLeft, quizEnded, userAnswers, currentQuestionIndex, selectedOption, quizQuestions, onQuizComplete]);

//   // Handle question submission
//   const handleNextQuestion = () => {
//     const currentQuestion = quizQuestions[currentQuestionIndex];
//     const newAnswers = [...userAnswers, {
//       question: currentQuestion.question,
//       selectedOption: selectedOption,
//       correctAnswer: currentQuestion.answer,
//       isCorrect: selectedOption === currentQuestion.answer,
//     }];
//     setUserAnswers(newAnswers);
//     setSelectedOption(null); // Reset selected option for next question

//     if (currentQuestionIndex < quizQuestions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       // This is the last question, quiz is complete
//       setQuizEnded(true);
//       // When the last question is submitted, newAnswers already contains all of them
//       onQuizComplete(newAnswers, quizQuestions);
//     }
//   };

//   const currentQuestion = quizQuestions[currentQuestionIndex];
//   if (!currentQuestion) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-600">
//         Loading questions...
//       </div>
//     );
//   }

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
//       <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-xl mt-8">
//         <div className="flex justify-end mb-4">
//           <div className={`px-4 py-2 rounded-full text-lg font-semibold ${timeLeft <= 30 ? 'bg-red-200 text-red-700' : 'bg-blue-200 text-blue-700'}`}>
//             {minutes} Minutes {seconds < 10 ? `0${seconds}` : seconds} Seconds
//           </div>
//         </div>

//         <h3 className="text-xl font-semibold text-gray-800 mb-6">
//           {currentQuestionIndex + 1}. {currentQuestion.question}
//         </h3>

//         <div className="space-y-4">
//           {currentQuestion.options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedOption(option)}
//               className={`w-full text-left p-4 rounded-md border-2 transition duration-200 ease-in-out
//                 ${selectedOption === option
//                   ? 'bg-orange-100 border-orange-500 text-orange-800 shadow-md'
//                   : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
//                 }`}
//             >
//               {String.fromCharCode(65 + index)}. {option}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={handleNextQuestion}
//           disabled={selectedOption === null}
//           className={`mt-8 w-full py-3 px-6 rounded-md shadow-lg font-semibold transition duration-300 ease-in-out
//             ${selectedOption === null
//               ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
//               : 'bg-orange-500 text-white hover:bg-orange-600'
//             }`}
//         >
//           {currentQuestionIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;


// import React, { useState, useEffect } from 'react';

// const QuizPage = ({ quizQuestions, timeLimit, onQuizComplete }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [timeLeft, setTimeLeft] = useState(timeLimit * 60); // timeLimit is in minutes
//   const [quizEnded, setQuizEnded] = useState(false);

//   // Helper function to get the finalized list of answers
//   const getFinalAnswers = () => {
//     const answers = [...userAnswers];

//     if (answers.length <= currentQuestionIndex) {
//       const question = quizQuestions[currentQuestionIndex];
//       answers.push({
//         question: question.question,
//         selectedOption: selectedOption,
//         correctAnswer: question.answer,
//         isCorrect: selectedOption === question.answer,
//       });
//     }

//     for (let i = answers.length; i < quizQuestions.length; i++) {
//       const question = quizQuestions[i];
//       answers.push({
//         question: question.question,
//         selectedOption: null,
//         correctAnswer: question.answer,
//         isCorrect: false,
//       });
//     }
//     return answers;
//   };

//   // Timer effect
//   useEffect(() => {
//     if (quizEnded || timeLeft <= 0) return;

//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(timer);
//           setQuizEnded(true);
//           const finalAnswers = getFinalAnswers();
//           onQuizComplete(finalAnswers, quizQuestions);
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft, quizEnded, userAnswers, currentQuestionIndex, selectedOption, quizQuestions, onQuizComplete]);

//   // Handle question submission
//   const handleNextQuestion = () => {
//     const currentQuestion = quizQuestions[currentQuestionIndex];
//     const newAnswers = [...userAnswers, {
//       question: currentQuestion.question,
//       selectedOption: selectedOption,
//       correctAnswer: currentQuestion.answer,
//       isCorrect: selectedOption === currentQuestion.answer,
//     }];
//     setUserAnswers(newAnswers);
//     setSelectedOption(null);

//     if (currentQuestionIndex < quizQuestions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setQuizEnded(true);
//       onQuizComplete(newAnswers, quizQuestions);
//     }
//   };

//   const currentQuestion = quizQuestions[currentQuestionIndex];
//   if (!currentQuestion) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//         <div className="text-secondary h4">Loading questions...</div>
//       </div>
//     );
//   }

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="d-flex flex-column align-items-center min-vh-100 page-gradient-bg p-4 position-relative overflow-hidden">
//       {/* Background circles */}
//       <div className="position-absolute top-25 start-25 w-64 h-64 bg-white rounded-circle opacity-10 blur-3xl animate-blob"></div>
//       <div className="position-absolute bottom-25 end-25 w-80 h-80 bg-white rounded-circle opacity-10 blur-3xl animate-blob animation-delay-2000"></div>

//       <div className="card card-glassmorphism p-5 shadow-3xl text-center w-100" style={{ maxWidth: '800px', borderRadius: '1rem' }}>
//         <div className="d-flex justify-content-end mb-4">
//           <span className={`badge rounded-pill p-3 fs-5 fw-bold ${timeLeft <= 30 ? 'bg-danger text-white' : 'bg-primary text-white'}`}>
//             {minutes} Minutes {seconds < 10 ? `0${seconds}` : seconds} Seconds
//           </span>
//         </div>

//         <h3 className="card-title h4 fw-semibold text-dark mb-5">
//           {currentQuestionIndex + 1}. {currentQuestion.question}
//         </h3>

//         <div className="d-grid gap-3 mb-5">
//           {currentQuestion.options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedOption(option)}
//               className={`btn btn-lg text-start py-3 px-4 rounded-pill border border-2 transition-all duration-200 ease-in-out
//                 ${selectedOption === option
//                   ? 'btn-primary border-primary text-white shadow-sm'
//                   : 'btn-outline-secondary text-dark hover:bg-light hover:border-secondary'
//                 }`}
//             >
//               {String.fromCharCode(65 + index)}. {option}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={handleNextQuestion}
//           disabled={selectedOption === null}
//           className={`btn btn-lg btn-gradient-orange w-100 rounded-pill py-3 ${selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}`}
//         >
//           {currentQuestionIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;


import React, { useState, useEffect } from 'react';

const QuizPage = ({ quizQuestions, timeLimit, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(timeLimit * 60); // timeLimit is in minutes
  const [quizEnded, setQuizEnded] = useState(false);

  // Helper function to get the finalized list of answers
  const getFinalAnswers = () => {
    const answers = [...userAnswers];

    if (answers.length <= currentQuestionIndex) {
      const question = quizQuestions[currentQuestionIndex];
      answers.push({
        question: question.question,
        selectedOption: selectedOption,
        correctAnswer: question.answer,
        isCorrect: selectedOption === question.answer,
      });
    }

    for (let i = answers.length; i < quizQuestions.length; i++) {
      const question = quizQuestions[i];
      answers.push({
        question: question.question,
        selectedOption: null,
        correctAnswer: question.answer,
        isCorrect: false,
      });
    }
    return answers;
  };

  // Timer effect
  useEffect(() => {
    if (quizEnded || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setQuizEnded(true);
          const finalAnswers = getFinalAnswers();
          onQuizComplete(finalAnswers, quizQuestions);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizEnded, userAnswers, currentQuestionIndex, selectedOption, quizQuestions, onQuizComplete]);

  // Handle question submission
  const handleNextQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const newAnswers = [...userAnswers, {
      question: currentQuestion.question,
      selectedOption: selectedOption,
      correctAnswer: currentQuestion.answer,
      isCorrect: selectedOption === currentQuestion.answer,
    }];
    setUserAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizEnded(true);
      onQuizComplete(newAnswers, quizQuestions);
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (!currentQuestion) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-secondary h4">Loading questions...</div>
      </div>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="d-flex flex-column align-items-center min-vh-100 page-gradient-bg p-4 position-relative overflow-hidden">
      {/* Background circles */}
      <div className="position-absolute top-25 start-25 w-64 h-64 bg-white rounded-circle opacity-10 blur-3xl animate-blob"></div>
      <div className="position-absolute bottom-25 end-25 w-80 h-80 bg-white rounded-circle opacity-10 blur-3xl animate-blob animation-delay-2000"></div>

      <div className="card card-glassmorphism p-5 shadow-3xl text-center w-100" style={{ maxWidth: '800px', borderRadius: '1rem', marginTop: '50px' }}> {/* Added margin-top */}
        <div className="d-flex justify-content-end mb-4">
          <span className={`badge rounded-pill p-3 fs-5 fw-bold ${timeLeft <= 30 ? 'bg-danger text-white' : 'bg-primary text-white'}`}>
            {minutes} Minutes {seconds < 10 ? `0${seconds}` : seconds} Seconds
          </span>
        </div>

        <h3 className="card-title h4 fw-semibold text-dark mb-5">
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </h3>

        <div className="d-grid gap-3 mb-5">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(option)}
              className={`btn btn-lg text-start py-3 px-4 rounded-pill border border-2 transition-all duration-200 ease-in-out
                ${selectedOption === option
                  ? 'btn-primary border-primary text-white shadow-sm'
                  : 'btn-outline-secondary text-dark hover:bg-light hover:border-secondary'
                }`}
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
          className={`btn btn-lg btn-gradient-orange w-100 rounded-pill py-3 ${selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {currentQuestionIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
