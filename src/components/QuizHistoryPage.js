// import React from 'react';

// const QuizHistoryPage = ({ quizHistory, onBackToDashboard }) => {
//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
//       <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-xl mt-8">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Your Quiz History</h2>

//         {quizHistory.length === 0 ? (
//           <p className="text-center text-gray-600 text-lg mb-4">No quiz history found. Start a quiz to see your results here!</p>
//         ) : (
//           <div className="space-y-6">
//             {/* Sort by timestamp in descending order (most recent first) */}
//             {quizHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map((quiz, index) => (
//               <div key={index} className="border border-gray-200 rounded-md p-4 shadow-sm">
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
//                   <h3 className="text-xl font-semibold text-orange-600">
//                     Quiz #{quizHistory.length - index}
//                     <span className="text-sm text-gray-500 ml-2">
//                       ({new Date(quiz.timestamp).toLocaleString()})
//                     </span>
//                   </h3>
//                   <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     quiz.score >= 80 ? 'bg-green-100 text-green-800' :
//                     quiz.score >= 50 ? 'bg-yellow-100 text-yellow-800' :
//                     'bg-red-100 text-red-800'
//                   }`}>
//                     Score: {quiz.score}%
//                   </span>
//                 </div>
//                 <p className="text-gray-700">
//                   <span className="font-medium">Category:</span> {quiz.category}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-medium">Difficulty:</span> {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-medium">Correct Answers:</span> <span className="text-green-600">{quiz.correctAnswers}</span> / {quiz.totalQuestions}
//                 </p>
//                 {/* Idea for future: Add a "View Details" button here to show the full answer review for a past quiz */}
//               </div>
//             ))}
//           </div>
//         )}

//         <p className="text-center text-sm text-gray-500 mt-8">
//           *Note: Quiz history is currently stored in your browser's memory and will be cleared if you refresh the page or close the browser. For persistent history, a database (like Firebase or Supabase) would be needed, or for simple client-side persistence, `localStorage` could be used.
//         </p>

//         <button
//           onClick={onBackToDashboard}
//           className="mt-8 w-full bg-orange-500 text-white py-3 px-6 rounded-md shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out font-semibold"
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizHistoryPage;

// import React from 'react';

// const QuizHistoryPage = ({ quizHistory, onBackToDashboard }) => {
//   return (
//     <div className="d-flex flex-column align-items-center min-vh-100 page-gradient-bg p-4 position-relative overflow-hidden">
//       {/* Background circles */}
//       <div className="position-absolute top-25 start-25 w-64 h-64 bg-white rounded-circle opacity-10 blur-3xl animate-blob"></div>
//       <div className="position-absolute bottom-25 end-25 w-80 h-80 bg-white rounded-circle opacity-10 blur-3xl animate-blob animation-delay-2000"></div>

//       <div className="card card-glassmorphism p-5 shadow-3xl text-center w-100" style={{ maxWidth: '900px', borderRadius: '1rem' }}>
//         <h2 className="card-title h3 fw-bold text-dark mb-4">Your Quiz History</h2>

//         {quizHistory.length === 0 ? (
//           <p className="lead text-secondary mb-4">No quiz history found. Start a quiz to see your results here!</p>
//         ) : (
//           <div className="table-responsive mb-5">
//             <table className="table table-hover table-striped align-middle">
//               <thead className="table-light">
//                 <tr>
//                   <th scope="col" className="text-center">#</th>
//                   <th scope="col">Date</th>
//                   <th scope="col">Category</th>
//                   <th scope="col">Difficulty</th>
//                   <th scope="col" className="text-center">Score</th>
//                   <th scope="col" className="text-center">Correct</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {quizHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map((quiz, index) => (
//                   <tr key={index}>
//                     <th scope="row" className="text-center">{quizHistory.length - index}</th>
//                     <td>{new Date(quiz.timestamp).toLocaleString()}</td>
//                     <td>{quiz.category}</td>
//                     <td><span className={`badge ${
//                       quiz.difficulty === 'easy' ? 'bg-success' :
//                       quiz.difficulty === 'medium' ? 'bg-warning text-dark' :
//                       'bg-danger'
//                     }`}>{quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}</span></td>
//                     <td className="text-center">
//                       <span className={`fw-bold ${
//                         quiz.score >= 80 ? 'text-success' :
//                         quiz.score >= 50 ? 'text-warning' :
//                         'text-danger'
//                       }`}>{quiz.score}%</span>
//                     </td>
//                     <td className="text-center">{quiz.correctAnswers} / {quiz.totalQuestions}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         <p className="text-muted small mb-4">
//           *Note: Quiz history is currently stored in your browser's memory (using localStorage) and is tied to your browser. It will not be synced across different browsers or devices.
//         </p>

//         <button
//           onClick={onBackToDashboard}
//           className="btn btn-lg btn-gradient-orange w-100 rounded-pill py-3"
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizHistoryPage;

import React from 'react';

const QuizHistoryPage = ({ quizHistory, onBackToDashboard }) => {
  return (
    <div className="d-flex flex-column align-items-center min-vh-100 page-gradient-bg p-4 position-relative overflow-hidden">
      {/* Background circles */}
      <div className="position-absolute top-25 start-25 w-64 h-64 bg-white rounded-circle opacity-10 blur-3xl animate-blob"></div>
      <div className="position-absolute bottom-25 end-25 w-80 h-80 bg-white rounded-circle opacity-10 blur-3xl animate-blob animation-delay-2000"></div>

      <div className="card card-glassmorphism p-5 shadow-3xl text-center w-100" style={{ maxWidth: '900px', borderRadius: '1rem', marginTop: '50px' }}> {/* Added margin-top */}
        <h2 className="card-title h3 fw-bold text-dark mb-4">Your Quiz History</h2>

        {quizHistory.length === 0 ? (
          <p className="lead text-secondary mb-4">No quiz history found. Start a quiz to see your results here!</p>
        ) : (
          <div className="table-responsive mb-5">
            <table className="table table-hover table-striped align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col" className="text-center">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Category</th>
                  <th scope="col">Difficulty</th>
                  <th scope="col" className="text-center">Score</th>
                  <th scope="col" className="text-center">Correct</th>
                </tr>
              </thead>
              <tbody>
                {quizHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map((quiz, index) => (
                  <tr key={index}>
                    <th scope="row" className="text-center">{quizHistory.length - index}</th>
                    <td>{new Date(quiz.timestamp).toLocaleString()}</td>
                    <td>{quiz.category}</td>
                    <td><span className={`badge ${
                      quiz.difficulty === 'easy' ? 'bg-success' :
                      quiz.difficulty === 'medium' ? 'bg-warning text-dark' :
                      'bg-danger'
                    }`}>{quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}</span></td>
                    <td className="text-center">
                      <span className={`fw-bold ${
                        quiz.score >= 80 ? 'text-success' :
                        quiz.score >= 50 ? 'text-warning' :
                        'text-danger'
                      }`}>{quiz.score}%</span>
                    </td>
                    <td className="text-center">{quiz.correctAnswers} / {quiz.totalQuestions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-muted small mb-4">
          *Note: Quiz history is currently stored in your browser's memory (using localStorage) and is tied to your browser. It will not be synced across different browsers or devices.
        </p>

        <button
          onClick={onBackToDashboard}
          className="btn btn-lg btn-gradient-orange w-100 rounded-pill py-3"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default QuizHistoryPage;
