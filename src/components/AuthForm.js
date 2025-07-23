// import React from 'react';

// const AuthForm = ({ title, fields, buttonText, onSubmit, linkText, onLinkClick, errorMessage }) => (
//   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//     <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{title}</h2>
//       {errorMessage && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
//           <span className="block sm:inline">{errorMessage}</span>
//         </div>
//       )}
//       <form onSubmit={onSubmit} className="space-y-4">
//         {fields.map((field) => (
//           <div key={field.id}>
//             <label htmlFor={field.id} className="block text-gray-700 text-sm font-medium mb-1">
//               {field.label}
//             </label>
//             <input
//               type={field.type}
//               id={field.id}
//               name={field.id}
//               value={field.value}
//               onChange={field.onChange}
//               placeholder={field.placeholder}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               required
//             />
//           </div>
//         ))}
//         <button
//           type="submit"
//           className="w-full bg-orange-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out font-semibold"
//         >
//           {buttonText}
//         </button>
//       </form>
//       {linkText && (
//         <p className="text-center text-gray-600 mt-6">
//           {linkText.pre}{' '}
//           <button onClick={onLinkClick} className="text-orange-500 hover:underline font-medium">
//             {linkText.link}
//           </button>
//         </p>
//       )}
//     </div>
//   </div>
// );

// export default AuthForm;

import React from 'react';

const AuthForm = ({ title, fields, buttonText, onSubmit, linkText, onLinkClick, errorMessage }) => (
  <div className="d-flex justify-content-center align-items-center min-vh-100 page-gradient-bg p-3 position-relative overflow-hidden">
    {/* Background circles for visual flair */}
    <div className="position-absolute top-25 start-25 w-64 h-64 bg-white rounded-circle opacity-10 blur-3xl animate-blob"></div>
    <div className="position-absolute bottom-25 end-25 w-80 h-80 bg-white rounded-circle opacity-10 blur-3xl animate-blob animation-delay-2000"></div>

    <div className="card card-glassmorphism p-5 shadow-3xl text-center w-100" style={{ maxWidth: '400px', borderRadius: '1rem' }}>
      <h2 className="card-title h3 fw-bold text-dark mb-4">{title}</h2>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={onSubmit} className="mb-4">
        {fields.map((field) => (
          <div className="mb-3" key={field.id}>
            <label htmlFor={field.id} className="form-label text-dark fw-medium d-block text-start mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={field.value}
              onChange={field.onChange}
              placeholder={field.placeholder}
              className="form-control form-control-lg rounded-pill form-control-shadow-inner"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="btn btn-lg btn-gradient-orange w-100 rounded-pill mt-4"
        >
          {buttonText}
        </button>
      </form>
      {linkText && (
        <p className="text-secondary mb-0">
          {linkText.pre}{' '}
          <button onClick={onLinkClick} className="btn btn-link p-0 text-decoration-none fw-medium text-orange">
            {linkText.link}
          </button>
        </p>
      )}
    </div>
  </div>
);

export default AuthForm;
