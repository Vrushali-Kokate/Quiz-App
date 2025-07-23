// import React from 'react';

// const QuizInfoPage = ({ quizSettings, onStartQuiz, onBackToConfig }) => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Quizzz Info</h2>
//         <div className="space-y-4 text-lg text-gray-700">
//           <p>Number of questions: <span className="font-medium">{quizSettings.numQuestions}</span></p>
//           <p>Category: <span className="text-orange-500 font-medium">{quizSettings.categoryName}</span></p>
//           <p>Difficulty: <span className="text-green-600 font-medium">{quizSettings.difficulty.charAt(0).toUpperCase() + quizSettings.difficulty.slice(1)}</span></p>
//           <p>Time: <span className="font-medium">{quizSettings.timeLimit} mins.</span></p>
//         </div>
//         <div className="mt-8 flex flex-col space-y-4">
//           <button
//             onClick={onStartQuiz}
//             className="w-full bg-orange-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out font-semibold"
//           >
//             Start
//           </button>
//           <button
//             onClick={onBackToConfig}
//             className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-md shadow-md hover:bg-gray-400 transition duration-300 ease-in-out font-semibold"
//           >
//             Back to Configuration
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizInfoPage;

import React from 'react';

const QuizInfoPage = ({ quizSettings, onStartQuiz, onBackToConfig }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 page-gradient-bg p-4 position-relative overflow-hidden">
      {/* Background circles for visual flair */}
      <div className="position-absolute top-25 start-25 w-64 h-64 bg-white rounded-circle opacity-10 blur-3xl animate-blob"></div>
      <div className="position-absolute bottom-25 end-25 w-80 h-80 bg-white rounded-circle opacity-10 blur-3xl animate-blob animation-delay-2000"></div>

      <div className="card card-glassmorphism p-5 shadow-3xl text-center w-100" style={{ maxWidth: '400px', borderRadius: '1rem', marginTop: '50px' }}> {/* Increased max-width, added margin-top */}
        <h2 className="card-title h4 fw-bold text-dark mb-4"> {/* Changed h3 to h4 */}
          Quiz Details
        </h2>
        <p className="fs-5 text-secondary mb-4"> {/* Changed lead to fs-5 */}
          Confirm your selections before starting the quiz.
        </p>

        <div className="list-group mb-5">
          <div className="list-group-item d-flex justify-content-between align-items-center bg-light p-3 rounded-lg shadow-sm border border-light mb-3">
            <span className="fw-semibold text-indigo d-flex align-items-center fs-6"> {/* Added fs-6 */}
              <i className="fas fa-question-circle me-2"></i> Questions:
            </span>
            <span className="fw-bold text-dark fs-6">{quizSettings.numQuestions}</span> {/* Added fs-6 */}
          </div>
          <div className="list-group-item d-flex justify-content-between align-items-center bg-light p-3 rounded-lg shadow-sm border border-light mb-3">
            <span className="fw-semibold text-orange d-flex align-items-center fs-6"> {/* Added fs-6 */}
              <i className="fas fa-tags me-2"></i> Category:
            </span>
            <span className="fw-bold text-dark fs-6">{quizSettings.categoryName}</span> {/* Added fs-6 */}
          </div>
          <div className="list-group-item d-flex justify-content-between align-items-center bg-light p-3 rounded-lg shadow-sm border border-light mb-3">
            <span className="fw-semibold text-teal d-flex align-items-center fs-6"> {/* Added fs-6 */}
              <i className="fas fa-sliders-h me-2"></i> Difficulty:
            </span>
            <span className="fw-bold text-dark fs-6">{quizSettings.difficulty.charAt(0).toUpperCase() + quizSettings.difficulty.slice(1)}</span> {/* Added fs-6 */}
          </div>
          <div className="list-group-item d-flex justify-content-between align-items-center bg-light p-3 rounded-lg shadow-sm border border-light">
            <span className="fw-semibold text-blue d-flex align-items-center fs-6"> {/* Added fs-6 */}
              <i className="fas fa-clock me-2"></i> Time Limit:
            </span>
            <span className="fw-bold text-dark fs-6">{quizSettings.timeLimit} mins.</span> {/* Added fs-6 */}
          </div>
        </div>

        <div className="d-grid gap-3">
          <button
            onClick={onStartQuiz}
            className="btn btn-lg btn-gradient-green rounded-pill py-3"
          >
            Start Quiz!
          </button>
          <button
            onClick={onBackToConfig}
            className="btn btn-lg btn-gradient-secondary rounded-pill py-3"
          >
            Back to Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizInfoPage;