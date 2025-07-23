// import React, { useState } from 'react';
// import { quizCategories } from '../data/quizData';

// const QuizConfigPage = ({ onBeginTest }) => {
//   const [selectedCategory, setSelectedCategory] = useState(quizCategories[0].id);
//   const [selectedDifficulty, setSelectedDifficulty] = useState('easy');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const categoryName = quizCategories.find(cat => cat.id === selectedCategory)?.name || 'General Knowledge';
//     onBeginTest({
//       category: selectedCategory,
//       categoryName: categoryName,
//       difficulty: selectedDifficulty,
//       numQuestions: 5, // Hardcoded for now, could be dynamic
//       timeLimit: 3, // In minutes
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Welcome to Quizzz</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="category" className="block text-gray-700 text-sm font-medium mb-1">
//               Select type
//             </label>
//             <select
//               id="category"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//               {quizCategories.map((cat) => (
//                 <option key={cat.id} value={cat.id}>
//                   {cat.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label htmlFor="difficulty" className="block text-gray-700 text-sm font-medium mb-1">
//               Select difficulty
//             </label>
//             <select
//               id="difficulty"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               value={selectedDifficulty}
//               onChange={(e) => setSelectedDifficulty(e.target.value)}
//             >
//               <option value="easy">Easy</option>
//               <option value="medium">Medium</option>
//               <option value="hard">Hard</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out font-semibold"
//           >
//             Begin Test
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default QuizConfigPage;

// import React, { useState } from 'react';
// import { quizCategories } from '../data/quizData';

// const QuizConfigPage = ({ onBeginTest, quizCategories, currentUser }) => {
//   const [selectedCategory, setSelectedCategory] = useState(quizCategories[0].id);
//   const [selectedDifficulty, setSelectedDifficulty] = useState('easy');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const categoryName = quizCategories.find(cat => cat.id === selectedCategory)?.name || 'General Knowledge';
//     onBeginTest({
//       category: selectedCategory,
//       categoryName: categoryName,
//       difficulty: selectedDifficulty,
//       numQuestions: 5, // Hardcoded for now, could be dynamic
//       timeLimit: 3, // In minutes
//     });
//   };

//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 page-gradient-bg p-4 position-relative overflow-hidden">
//       {/* Background circles for visual flair */}
//       <div className="position-absolute top-25 start-25 w-64 h-64 bg-white rounded-circle opacity-10 blur-3xl animate-blob"></div>
//       <div className="position-absolute bottom-25 end-25 w-80 h-80 bg-white rounded-circle opacity-10 blur-3xl animate-blob animation-delay-2000"></div>

//       <div className="card card-glassmorphism p-5 shadow-3xl text-center w-100" style={{ maxWidth: '600px', borderRadius: '1rem' }}> {/* Adjusted max-width */}
//         <h2 className="card-title display-4 fw-bold text-dark mb-3">
//           Welcome, {currentUser?.email || 'Quizzer'}!
//         </h2>
//         <p className="lead text-secondary mb-5">
//           Select your quiz preferences and prepare to challenge your mind.
//         </p>

//         <form onSubmit={handleSubmit} className="row g-4">
//           {/* Category Selection */}
//           <div className="col-12">
//             <div className="card bg-light p-4 rounded-lg shadow-sm border border-light">
//               <label htmlFor="category" className="form-label h5 fw-semibold text-dark mb-3 d-flex align-items-center">
//                 <i className="fas fa-book-open me-3 text-indigo"></i> Choose Your Topic
//               </label>
//               <select
//                 id="category"
//                 className="form-select form-select-lg rounded-pill form-select-custom"
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//               >
//                 {quizCategories.map((cat) => (
//                   <option key={cat.id} value={cat.id}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Difficulty Selection */}
//           <div className="col-12">
//             <div className="card bg-light p-4 rounded-lg shadow-sm border border-light">
//               <label htmlFor="difficulty" className="form-label h5 fw-semibold text-dark mb-3 d-flex align-items-center">
//                 <i className="fas fa-cogs me-3 text-teal"></i> Select Difficulty Level
//               </label>
//               <select
//                 id="difficulty"
//                 className="form-select form-select-lg rounded-pill form-select-custom"
//                 value={selectedDifficulty}
//                 onChange={(e) => setSelectedDifficulty(e.target.value)}
//               >
//                 <option value="easy">Easy</option>
//                 <option value="medium">Medium</option>
//                 <option value="hard">Hard</option>
//               </select>
//             </div>
//           </div>

//           {/* Begin Test Button */}
//           <div className="col-12 mt-5">
//             <button
//               type="submit"
//               className="btn btn-lg btn-gradient-orange w-100 rounded-pill py-3"
//             >
//               Start Quiz!
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default QuizConfigPage;

import React, { useState } from 'react';
import { quizCategories } from '../data/quizData';

const QuizConfigPage = ({ onBeginTest, quizCategories, currentUser }) => {
  const [selectedCategory, setSelectedCategory] = useState(quizCategories[0].id);
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryName = quizCategories.find(cat => cat.id === selectedCategory)?.name || 'General Knowledge';
    onBeginTest({
      category: selectedCategory,
      categoryName: categoryName,
      difficulty: selectedDifficulty,
      numQuestions: 5, // Hardcoded for now, could be dynamic
      timeLimit: 3, // In minutes
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 page-gradient-bg p-4 position-relative overflow-hidden">
      {/* Background circles for visual flair */}
      <div className="position-absolute top-25 start-25 w-64 h-64 bg-white rounded-circle opacity-10 blur-3xl animate-blob"></div>
      <div className="position-absolute bottom-25 end-25 w-80 h-80 bg-white rounded-circle opacity-10 blur-3xl animate-blob animation-delay-2000"></div>

      <div className="card card-glassmorphism p-5 shadow-3xl text-center w-100" style={{ maxWidth: '600px', borderRadius: '1rem', marginTop: '50px' }}> {/* Added margin-top */}
        <h2 className="card-title h3 fw-bold text-dark mb-3">
          Welcome, {currentUser?.email || 'Quizzer'}!
        </h2>
        <p className="lead text-secondary mb-5">
          Select your quiz preferences and prepare to challenge your mind.
        </p>

        <form onSubmit={handleSubmit} className="row g-4">
          {/* Category Selection */}
          <div className="col-12">
            <div className="card bg-light p-4 rounded-lg shadow-sm border border-light">
              <label htmlFor="category" className="form-label h5 fw-semibold text-dark mb-3 d-flex align-items-center">
                <i className="fas fa-book-open me-3 text-indigo"></i> Choose Your Topic
              </label>
              <select
                id="category"
                className="form-select form-select-lg rounded-pill form-select-custom"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {quizCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Difficulty Selection */}
          <div className="col-12">
            <div className="card bg-light p-4 rounded-lg shadow-sm border border-light">
              <label htmlFor="difficulty" className="form-label h5 fw-semibold text-dark mb-3 d-flex align-items-center">
                <i className="fas fa-cogs me-3 text-teal"></i> Select Difficulty Level
              </label>
              <select
                id="difficulty"
                className="form-select form-select-lg rounded-pill form-select-custom"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>

          {/* Begin Test Button */}
          <div className="col-12 mt-5">
            <button
              type="submit"
              className="btn btn-lg btn-gradient-orange w-100 rounded-pill py-3"
            >
              Start Quiz!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizConfigPage;
