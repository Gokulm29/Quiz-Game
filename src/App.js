
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   // State to handle the form inputs
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple form validation (you can expand this logic)
//     if (username === '' || password === '') {
//       setError('Please enter both username and password.');
//     } else {
//       setError('');
//       alert(`Logged in as: ${username}`);
//       // Here, you could make an API call to authenticate the user
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Login Form</h1>
//       <form onSubmit={handleSubmit} className="login-form">
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter username"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//           />
//         </div>
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
// export default App;

import React from "react";
import Quiz from "./Quiz";
import "./style.css";
function App() {
return (
<div className="App">
<h1>React Quiz App</h1>
<Quiz />
</div>
);
}
export default App;