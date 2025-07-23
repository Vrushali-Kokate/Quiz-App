// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const Header = ({ onLogout }) => {
//   const { userId } = useAuth(); // Get userId from auth context
//   return (
//     <header className="flex justify-between items-center p-4 bg-white shadow-md rounded-b-lg">
//       <div className="text-2xl font-bold text-orange-500">Quizora</div>
//       <div className="flex items-center space-x-4">
//         {userId && (
//           <span className="text-gray-600 text-sm hidden md:block">User ID: {userId}</span>
//         )}
//         <button
//           onClick={onLogout}
//           className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
//         >
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const Header = ({ onLogout, onNavigateToHistory }) => {
//   const { userId } = useAuth();
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm rounded-bottom">
//       <div className="container-fluid">
//         <span className="navbar-brand h1 fw-bold text-orange">Quizora</span>
//         <div className="d-flex align-items-center">
//           {userId && (
//             <span className="navbar-text text-secondary me-3 d-none d-md-block">User ID: {userId}</span>
//           )}
//           <button
//             onClick={onNavigateToHistory}
//             className="btn btn-info me-2 rounded-pill"
//           >
//             History
//           </button>
//           <button
//             onClick={onLogout}
//             className="btn btn-danger rounded-pill"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React from 'react';
import { useAuth } from '../context/AuthContext';

const Header = ({ onLogout, onNavigateToHistory }) => {
  const { userId } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top header-pro-style"> {/* Added bg-dark and header-pro-style */}
      <div className="container-fluid">
        <span className="navbar-brand h1 fw-bold text-orange fs-3">Quizora</span> {/* Increased font size */}
        <div className="d-flex align-items-center">
          {userId && (
            <span className="navbar-text text-light me-3 d-none d-md-block">User ID: {userId}</span> /* Changed text-secondary to text-light */
          )}
          <button
            onClick={onNavigateToHistory}
            className="btn btn-info me-2 rounded-pill fw-bold px-4 py-2" // Added fw-bold px-4 py-2
          >
            History
          </button>
          <button
            onClick={onLogout}
            className="btn btn-danger rounded-pill fw-bold px-4 py-2" // Added fw-bold px-4 py-2
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;