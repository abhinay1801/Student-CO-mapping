// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const LoginSignup = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [isSignup, setIsSignup] = useState(true); // Toggle between login/signup
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const url = isSignup
// //       ? "http://localhost:5000/api/auth/signup"
// //       : "http://localhost:5000/api/auth/login";

// //     try {
// //       const response = await axios.post(url, { email, password });
// //       if (response.data.token) {
// //         // Store the JWT token in local storage
// //         localStorage.setItem("token", response.data.token);
// //         navigate("/home");
// //       }
// //     } catch (error) {
// //       console.error("Error during login/signup:", error.response?.data || error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>{isSignup ? "Sign Up" : "Login"}</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Email</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
// //       </form>
// //       <button onClick={() => setIsSignup((prev) => !prev)}>
// //         Switch to {isSignup ? "Login" : "Sign Up"}
// //       </button>
// //     </div>
// //   );
// // };

// // export default LoginSignup;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignup, setIsSignup] = useState(true); // Toggle between login/signup
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isSignup
//       ? "http://localhost:5000/api/auth/signup"
//       : "http://localhost:5000/api/auth/login";

//     try {
//       const response = await axios.post(url, { email, password });
//       if (response.data.token) {
//         // Store the JWT token in local storage
//         localStorage.setItem("token", response.data.token);

//         // If the user is signing up, redirect them to SetEntry page
//         if (isSignup && response.data.isFirstTime) {
//           navigate("/setentry"); // Redirect to SetEntry page
//         } else {
//           navigate("/home"); // Redirect to Home page after login
//         }
//       }
//     } catch (error) {
//       console.error("Error during login/signup:", error.response?.data || error);
//     }
//   };

//   return (
//     <div>
//       <h1>{isSignup ? "Sign Up" : "Login"}</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
//       </form>
//       <button onClick={() => setIsSignup((prev) => !prev)}>
//         Switch to {isSignup ? "Login" : "Sign Up"}
//       </button>
//     </div>
//   );
// };

// export default LoginSignup;








































// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignup, setIsSignup] = useState(true); // Toggle between login/signup
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isSignup
//       ? "http://localhost:5000/api/auth/signup"
//       : "http://localhost:5000/api/auth/login";

//     try {
//       const response = await axios.post(url, { email, password });
//       if (response.data.token) {
//         // Store the JWT token in local storage
//         localStorage.setItem("token", response.data.token);

//         // If the user is signing up, redirect them to SetEntry page
//         if (isSignup && response.data.isFirstTime) {
//           navigate("/setentry"); // Redirect to SetEntry page
//         } else {
//           navigate("/home"); // Redirect to Home page after login
//         }
//       }
//     } catch (error) {
//       console.error("Error during login/signup:", error.response?.data || error);
//     }
//   };

//   return (
//     <div>
//       <h1>{isSignup ? "Sign Up" : "Login"}</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
//       </form>
//       <button onClick={() => setIsSignup((prev) => !prev)}>
//         Switch to {isSignup ? "Login" : "Sign Up"}
//       </button>
//     </div>
//   );
// };

// export default LoginSignup;




















//-->suceess excetuted 

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignup, setIsSignup] = useState(true);
//   const [error, setError] = useState(""); // Store login errors
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Reset error message

//     const url = isSignup
//       ? "http://localhost:5000/api/auth/signup"
//       : "http://localhost:5000/api/auth/login";

//     try {
//       const response = await axios.post(url, { email, password });

//       if (response.data.token) {
//         localStorage.setItem("token", response.data.token);

//         if (isSignup && response.data.isFirstTime) {
//           navigate("/setentry");
//         } else {
//           navigate("/home");
//         }
//       }
//     } catch (error) {
//       if (error.response?.status === 401) {
//         setError("Incorrect email or password. Please try again.");
//       } else {
//         setError("An error occurred. Please try again later.");
//       }
//       console.error("Error during login/signup:", error.response?.data || error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           {isSignup ? "Sign Up" : "Login"}
//         </h1>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             {isSignup ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         <button
//           onClick={() => setIsSignup((prev) => !prev)}
//           className="mt-4 text-blue-500 hover:underline block text-center"
//         >
//           Switch to {isSignup ? "Login" : "Sign Up"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;















//-->success


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignup, setIsSignup] = useState(true);
//   const [error, setError] = useState(""); // Store login errors
//   const [loading, setLoading] = useState(false); // Handle loading state
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Reset error message
//     setLoading(true); // Disable button during the request

//     const url = isSignup
//       ? "http://localhost:5000/api/auth/signup"
//       : "http://localhost:5000/api/auth/login";

//     try {
//       const response = await axios.post(url, { email, password });

//       if (response.data.token) {
//         // Store the token in localStorage (or sessionStorage for session-only persistence)
//         localStorage.setItem("token", response.data.token);

//         // If it's a signup and the user is signing up for the first time
//         if (isSignup && response.data.isFirstTime) {
//           navigate("/setentry");
//         } else {
//           navigate("/home");
//         }
//       }
//     } catch (error) {
//       if (error.response?.status === 401) {
//         setError("Incorrect email or password. Please try again.");
//       } else {
//         setError("An error occurred. Please try again later.");
//       }
//       console.error("Error during login/signup:", error.response?.data || error);
//     } finally {
//       setLoading(false); // Re-enable button after the request
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           {isSignup ? "Sign Up" : "Login"}
//         </h1>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
//             disabled={loading} // Disable button while loading
//           >
//             {loading ? "Loading..." : isSignup ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         <button
//           onClick={() => setIsSignup((prev) => !prev)}
//           className="mt-4 text-blue-500 hover:underline block text-center"
//         >
//           Switch to {isSignup ? "Login" : "Sign Up"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

























// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignup, setIsSignup] = useState(true);
//   const [error, setError] = useState(""); // Store login errors
//   const [loading, setLoading] = useState(false); // Track loading state
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Reset error message
//     setLoading(true); // Disable button during the request

//     const url = isSignup
//       ? "http://localhost:5000/api/auth/signup"
//       : "http://localhost:5000/api/auth/login";

//     try {
//       const response = await axios.post(url, { email, password });

//       if (response.data.token) {
//         localStorage.setItem("token", response.data.token);

//         if (isSignup && response.data.isFirstTime) {
//           navigate("/setentry");
//         } else {
//           navigate("/home");
//         }
//       }
//     } catch (error) {
//       if (error.response?.status === 401) {
//         setError("Incorrect email or password. Please try again.");
//       } else if (error.response?.data?.message) {
//         setError(error.response.data.message); // Show detailed backend validation message
//       } else {
//         setError("An error occurred. Please try again later.");
//       }
//       console.error("Error during login/signup:", error.response?.data || error);
//     } finally {
//       setLoading(false); // Re-enable button after the request
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           {isSignup ? "Sign Up" : "Login"}
//         </h1>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : isSignup ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         <button
//           onClick={() => setIsSignup((prev) => !prev)}
//           className="mt-4 text-blue-500 hover:underline block text-center"
//         >
//           Switch to {isSignup ? "Login" : "Sign Up"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;






import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const [error, setError] = useState(""); // Store login errors
  const [loading, setLoading] = useState(false); // Track loading state
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setLoading(true); // Disable button during the request

    const url = isSignup
      ? "http://localhost:5000/api/auth/signup"
      : "http://localhost:5000/api/auth/login";

    try {
      const response = await axios.post(url, { email, password });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);

        if (isSignup && response.data.isFirstTime) {
          navigate("/setentry");
        } else {
          navigate("/home");
        }
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setError("Incorrect email or password. Please try again.");
      } else if (error.response?.data?.message) {
        setError(error.response.data.message); // Show detailed backend validation message
      } else {
        setError("An error occurred. Please try again later.");
      }
      console.error("Error during login/signup:", error.response?.data || error);
    } finally {
      setLoading(false); // Re-enable button after the request
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {isSignup ? "Sign Up" : "Login"}
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Show checkbox only when the password length is greater than 0 */}
          {password.length > 0 && (
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={showPassword} // Bind checkbox to showPassword state
                onChange={() => setShowPassword((prev) => !prev)} // Toggle password visibility when checked
                id="showPassword"
                className="text-blue-500 focus:ring-2 focus:ring-blue-500"
                style={{ pointerEvents: 'auto' }} // Ensure the checkbox is clickable
              />
              <label htmlFor="showPassword" className="text-sm text-gray-700 ml-2">
                Show password
              </label>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <button
          onClick={() => setIsSignup((prev) => !prev)}
          className="mt-4 text-blue-500 hover:underline block text-center"
        >
          Switch to {isSignup ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
