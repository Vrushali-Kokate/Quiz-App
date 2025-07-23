// import React from 'react';

// const ResultsPage = ({ userAnswers, quizQuestions, onBackToDashboard }) => {
//   const totalQuestions = quizQuestions.length;
//   const correctAnswersCount = userAnswers.filter(answer => answer.isCorrect).length;
//   const wrongAnswersCount = totalQuestions - correctAnswersCount;
//   const score = (correctAnswersCount / totalQuestions) * 100; // Calculate score as percentage

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
//       <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-xl mt-8">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Your Final Score is</h2>

//         <div className="flex flex-col items-center mb-8">
//           <div className="flex items-center justify-center w-32 h-32 rounded-full bg-orange-500 text-white text-5xl font-bold mb-4 shadow-lg">
//             {Math.round(score)}
//           </div>
//           <p className="text-lg text-gray-700">Correct Answer: <span className="font-semibold text-green-600">{correctAnswersCount}</span></p>
//           <p className="text-lg text-gray-700">Wrong Answer: <span className="font-semibold text-red-600">{wrongAnswersCount}</span></p>
//           <p className="text-lg text-gray-700">Answer Submitted: <span className="font-semibold text-blue-600">{userAnswers.length}</span></p>
//         </div>

//         <button
//           onClick={onBackToDashboard}
//           className="w-full bg-orange-500 text-white py-3 px-6 rounded-md shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out font-semibold mb-8"
//         >
//           Back to dashboard
//         </button>

//         <h3 className="text-xl font-semibold text-gray-800 mb-4">Answer Review</h3>
//         <div className="space-y-6">
//           {userAnswers.map((answer, index) => (
//             <div key={index} className="border-b pb-4 last:border-b-0">
//               <p className="text-lg font-medium text-gray-800 mb-2">
//                 {index + 1}. {answer.question}
//               </p>
//               <div className="space-y-2">
//                 {quizQuestions[index].options.map((option, optIndex) => (
//                   <div
//                     key={optIndex}
//                     className={`p-3 rounded-md transition duration-200 ease-in-out
//                       ${option === answer.correctAnswer
//                         ? 'bg-green-100 text-green-800 font-semibold border border-green-400'
//                         : option === answer.selectedOption && !answer.isCorrect
//                           ? 'bg-red-100 text-red-800 font-semibold border border-red-400'
//                           : 'bg-gray-50 text-gray-700 border border-gray-200'
//                       }`}
//                   >
//                     {String.fromCharCode(65 + optIndex)}. {option}
//                     {option === answer.correctAnswer && (
//                       <span className="ml-2 text-green-600">&#10003; Correct Answer</span>
//                     )}
//                     {option === answer.selectedOption && !answer.isCorrect && (
//                       <span className="ml-2 text-red-600">&#10007; Your Answer</span>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;


// import React from 'react';

// const ResultsPage = ({ userAnswers, quizQuestions, onBackToDashboard }) => {
//   const totalQuestions = quizQuestions.length;
//   const correctAnswersCount = userAnswers.filter(answer => answer.isCorrect).length;
//   const wrongAnswersCount = totalQuestions - correctAnswersCount;
//   const score = (correctAnswersCount / totalQuestions) * 100;

//   return (
//     <div className="d-flex flex-column align-items-center min-vh-100 page-gradient-bg p-4 position-relative overflow-hidden">
//       {/* Background circles */}
//       <div className="position-absolute top-25 start-25 w-64 h-64 bg-white rounded-circle opacity-10 blur-3xl animate-blob"></div>
//       <div className="position-absolute bottom-25 end-25 w-80 h-80 bg-white rounded-circle opacity-10 blur-3xl animate-blob animation-delay-2000"></div>

//       <div className="card card-glassmorphism p-5 shadow-3xl text-center w-100" style={{ maxWidth: '800px', borderRadius: '1rem' }}>
//         <h2 className="card-title h3 fw-bold text-dark mb-4">Your Final Score is</h2>

//         <div className="d-flex flex-column align-items-center mb-5">
//           <div className="d-flex justify-content-center align-items-center bg-primary text-white rounded-circle mb-4 shadow-lg" style={{ width: '120px', height: '120px', fontSize: '3rem', fontWeight: 'bold' }}>
//             {Math.round(score)}%
//           </div>
//           <p className="fs-5 text-secondary mb-2">Correct Answers: <span className="fw-semibold text-success">{correctAnswersCount}</span></p>
//           <p className="fs-5 text-secondary mb-2">Wrong Answers: <span className="fw-semibold text-danger">{wrongAnswersCount}</span></p>
//           <p className="fs-5 text-secondary mb-4">Questions Attempted: <span className="fw-semibold text-info">{userAnswers.length}</span></p>
//         </div>

//         <button
//           onClick={onBackToDashboard}
//           className="btn btn-lg btn-gradient-orange w-100 rounded-pill py-3 mb-5"
//         >
//           Back to Dashboard
//         </button>

//         <h3 className="h4 fw-bold text-dark mb-4">Answer Review</h3>
//         <div className="list-group">
//           {userAnswers.map((answer, index) => (
//             <div key={index} className="list-group-item bg-light p-4 rounded-lg shadow-sm border border-light mb-3">
//               <p className="fw-medium text-dark mb-3">
//                 {index + 1}. {answer.question}
//               </p>
//               <div className="d-grid gap-2">
//                 {quizQuestions[index].options.map((option, optIndex) => (
//                   <div
//                     key={optIndex}
//                     className={`p-3 rounded-pill text-start border border-2
//                       ${option === answer.correctAnswer
//                         ? 'bg-success bg-opacity-10 text-success border-success fw-semibold'
//                         : option === answer.selectedOption && !answer.isCorrect
//                           ? 'bg-danger bg-opacity-10 text-danger border-danger fw-semibold'
//                           : 'bg-white text-secondary border-secondary'
//                       }`}
//                   >
//                     {String.fromCharCode(65 + optIndex)}. {option}
//                     {option === answer.correctAnswer && (
//                       <span className="ms-2 text-success">&#10003; Correct Answer</span>
//                     )}
//                     {option === answer.selectedOption && !answer.isCorrect && (
//                       <span className="ms-2 text-danger">&#10007; Your Answer</span>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;

import React from 'react';

const ResultsPage = ({ userAnswers, quizQuestions, onBackToDashboard }) => {
  const totalQuestions = quizQuestions.length;
  const correctAnswersCount = userAnswers.filter(answer => answer.isCorrect).length;
  const wrongAnswersCount = totalQuestions - correctAnswersCount;
  const score = (correctAnswersCount / totalQuestions) * 100;

  return (
    <div className="d-flex flex-column align-items-center min-vh-100 page-gradient-bg p-4 position-relative overflow-hidden">
      {/* Background circles */}
      <div className="position-absolute top-25 start-25 w-64 h-64 bg-white rounded-circle opacity-10 blur-3xl animate-blob"></div>
      <div className="position-absolute bottom-25 end-25 w-80 h-80 bg-white rounded-circle opacity-10 blur-3xl animate-blob animation-delay-2000"></div>

      <div className="card card-glassmorphism p-5 shadow-3xl text-center w-100" style={{ maxWidth: '800px', borderRadius: '1rem', marginTop: '50px' }}> {/* Added margin-top */}
        <h2 className="card-title h3 fw-bold text-dark mb-4">Your Final Score is</h2>

        <div className="d-flex flex-column align-items-center mb-5">
          <div className="d-flex justify-content-center align-items-center bg-primary text-white rounded-circle mb-4 shadow-lg" style={{ width: '150px', height: '150px', fontSize: '3.5rem', fontWeight: 'bold' }}> {/* Increased width, height, and font-size */}
            {Math.round(score)}%
          </div>
          <p className="fs-5 text-secondary mb-2">Correct Answers: <span className="fw-semibold text-success">{correctAnswersCount}</span></p>
          <p className="fs-5 text-secondary mb-2">Wrong Answers: <span className="fw-semibold text-danger">{wrongAnswersCount}</span></p>
          <p className="fs-5 text-secondary mb-4">Questions Attempted: <span className="fw-semibold text-info">{userAnswers.length}</span></p>
        </div>

        <button
          onClick={onBackToDashboard}
          className="btn btn-lg btn-gradient-orange w-100 rounded-pill py-3 mb-5"
        >
          Back to Dashboard
        </button>

        <h3 className="h4 fw-bold text-dark mb-4">Answer Review</h3>
        <div className="list-group">
          {userAnswers.map((answer, index) => (
            <div key={index} className="list-group-item bg-light p-4 rounded-lg shadow-sm border border-light mb-3">
              <p className="fw-medium text-dark mb-3">
                {index + 1}. {answer.question}
              </p>
              <div className="d-grid gap-2">
                {quizQuestions[index].options.map((option, optIndex) => (
                  <div
                    key={optIndex}
                    className={`p-3 rounded-pill text-start border border-2
                      ${option === answer.correctAnswer
                        ? 'bg-success bg-opacity-10 text-success border-success fw-semibold'
                        : option === answer.selectedOption && !answer.isCorrect
                          ? 'bg-danger bg-opacity-10 text-danger border-danger fw-semibold'
                          : 'bg-white text-secondary border-secondary'
                      }`}
                  >
                    {String.fromCharCode(65 + optIndex)}. {option}
                    {option === answer.correctAnswer && (
                      <span className="ms-2 text-success">&#10003; Correct Answer</span>
                    )}
                    {option === answer.selectedOption && !answer.isCorrect && (
                      <span className="ms-2 text-danger">&#10007; Your Answer</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;