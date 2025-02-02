// import React, { useState } from "react";

// const SetEntry = () => {
//   const [sets, setSets] = useState(
//     Array(10).fill({ setNumber: "", questions: ["", ""], coNumbers: ["", ""] })
//   );

//   const handleInputChange = (index, field, value) => {
//     const newSets = [...sets];
//     newSets[index][field] = value;
//     setSets(newSets);
//   };

//   const handleSubmit = async () => {
//     const userId = localStorage.getItem("userId"); // Fetch user ID
//     try {
//       const response = await fetch("/api/sets/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ userId, sets }),
//       });

//       if (response.ok) {
//         alert("Sets stored successfully!");
//       } else {
//         alert("Error storing sets");
//       }
//     } catch (error) {
//       console.error("Error sending data:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Enter 10 Sets with Questions and CO Numbers</h2>
//       {sets.map((set, index) => (
//         <div key={index}>
//           <h3>Set {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="Set Number"
//             value={set.setNumber}
//             onChange={(e) => handleInputChange(index, "setNumber", e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Question 1"
//             value={set.questions[0]}
//             onChange={(e) =>
//               handleInputChange(index, "questions", [e.target.value, set.questions[1]])
//             }
//           />
//           <input
//             type="text"
//             placeholder="CO Number 1"
//             value={set.coNumbers[0]}
//             onChange={(e) =>
//               handleInputChange(index, "coNumbers", [e.target.value, set.coNumbers[1]])
//             }
//           />
//           <input
//             type="text"
//             placeholder="Question 2"
//             value={set.questions[1]}
//             onChange={(e) =>
//               handleInputChange(index, "questions", [set.questions[0], e.target.value])
//             }
//           />
//           <input
//             type="text"
//             placeholder="CO Number 2"
//             value={set.coNumbers[1]}
//             onChange={(e) =>
//               handleInputChange(index, "coNumbers", [set.coNumbers[0], e.target.value])
//             }
//           />
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Save Sets</button>
//     </div>
//   );
// };

// export default SetEntry;


















// import React, { useState } from "react";

// const SetEntry = () => {
//   const [sets, setSets] = useState(
//     Array(10).fill({ setNumber: "", questions: ["", ""], coNumbers: ["", ""] })
//   );

//   const handleInputChange = (index, field, value) => {
//     const newSets = [...sets];
//     newSets[index][field] = value;
//     setSets(newSets);
//   };

//   const handleSubmit = async () => {
//     const userId = localStorage.getItem("userId"); // Fetch user ID
//     try {
//       const response = await fetch("/api/sets/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ userId, sets }),
//       });

//       if (response.ok) {
//         alert("Sets stored successfully!");
//         navigate("/home"); // Redirect to home after filling the sets
//       } else {
//         alert("Error storing sets");
//       }
//     } catch (error) {
//       console.error("Error sending data:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Enter 10 Sets with Questions and CO Numbers</h2>
//       {sets.map((set, index) => (
//         <div key={index}>
//           <h3>Set {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="Set Number"
//             value={set.setNumber}
//             onChange={(e) => handleInputChange(index, "setNumber", e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Question 1"
//             value={set.questions[0]}
//             onChange={(e) =>
//               handleInputChange(index, "questions", [e.target.value, set.questions[1]])
//             }
//           />
//           <input
//             type="text"
//             placeholder="CO Number 1"
//             value={set.coNumbers[0]}
//             onChange={(e) =>
//               handleInputChange(index, "coNumbers", [e.target.value, set.coNumbers[1]])
//             }
//           />
//           <input
//             type="text"
//             placeholder="Question 2"
//             value={set.questions[1]}
//             onChange={(e) =>
//               handleInputChange(index, "questions", [set.questions[0], e.target.value])
//             }
//           />
//           <input
//             type="text"
//             placeholder="CO Number 2"
//             value={set.coNumbers[1]}
//             onChange={(e) =>
//               handleInputChange(index, "coNumbers", [set.coNumbers[0], e.target.value])
//             }
//           />
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit Sets</button>
//     </div>
//   );
// };

// export default SetEntry;










































// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // To navigate after form submission

// const SetEntry = () => {
//   // Initialize sets array with distinct objects
//   const [sets, setSets] = useState(
//     Array.from({ length: 10 }, () => ({
//       setNumber: "",
//       questions: ["", ""],
//       coNumbers: ["", ""],
//     }))
//   );
//   const navigate = useNavigate();

//   const handleInputChange = (index, field, value, subIndex = null) => {
//     const newSets = [...sets]; // Create a new array to maintain immutability

//     // Determine the type of input to update (setNumber, questions, coNumbers)
//     if (field === "setNumber") {
//       newSets[index].setNumber = value; // Update only the setNumber of the current index
//     } else if (field === "questions") {
//       newSets[index].questions[subIndex] = value; // Update specific question
//     } else if (field === "coNumbers") {
//       newSets[index].coNumbers[subIndex] = value; // Update specific CO number
//     }

//     setSets(newSets); // Set the updated state array
//   };

//   const handleSubmit = async () => {
//     const token = localStorage.getItem('token'); // Get token from localStorage
    
//     if (!token) {
//       alert('You are not authenticated. Please login again.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/sets/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token, // Send token for authentication
//         },
//         body: JSON.stringify({ sets }),
//       });

//       if (response.ok) {
//         alert('Sets stored successfully!');
//         navigate('/home'); // Redirect to home after successful submission
//       } else {
//         alert('Error storing sets');
//       }
//     } catch (error) {
//       console.error('Error storing sets:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Enter 10 Sets with Questions and CO Numbers</h2>
//       {sets.map((set, index) => (
//         <div key={index} style={{ marginBottom: "20px" }}>
//           <h3>Set {index + 1}</h3>
          
//           {/* Set Number Input */}
//           <input
//             type="text"
//             placeholder="Set Number"
//             value={set.setNumber}
//             onChange={(e) => handleInputChange(index, "setNumber", e.target.value)}
//           />
          
//           {/* Question 1 Input */}
//           <input
//             type="text"
//             placeholder="Question 1"
//             value={set.questions[0]}
//             onChange={(e) =>
//               handleInputChange(index, "questions", e.target.value, 0) // Update question 1
//             }
//           />
          
//           {/* CO Number 1 Input */}
//           <input
//             type="text"
//             placeholder="CO Number 1"
//             value={set.coNumbers[0]}
//             onChange={(e) =>
//               handleInputChange(index, "coNumbers", e.target.value, 0) // Update CO Number 1
//             }
//           />
          
//           {/* Question 2 Input */}
//           <input
//             type="text"
//             placeholder="Question 2"
//             value={set.questions[1]}
//             onChange={(e) =>
//               handleInputChange(index, "questions", e.target.value, 1) // Update question 2
//             }
//           />
          
//           {/* CO Number 2 Input */}
//           <input
//             type="text"
//             placeholder="CO Number 2"
//             value={set.coNumbers[1]}
//             onChange={(e) =>
//               handleInputChange(index, "coNumbers", e.target.value, 1) // Update CO Number 2
//             }
//           />
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit Sets</button>
//     </div>
//   );
// };

// export default SetEntry;













import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SetEntry = () => {
  const [sets, setSets] = useState(
    Array.from({ length: 10 }, () => ({
      setNumber: "",
      questions: ["", ""],
      coNumbers: ["", ""],
    }))
  );
  const navigate = useNavigate();

  const handleInputChange = (index, field, value, subIndex = null) => {
    const newSets = [...sets];

    if (field === "setNumber") {
      newSets[index].setNumber = value;
    } else if (field === "questions") {
      newSets[index].questions[subIndex] = value;
    } else if (field === "coNumbers") {
      newSets[index].coNumbers[subIndex] = value;
    }

    setSets(newSets);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not authenticated. Please login again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/sets/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ sets }),
      });

      if (response.ok) {
        alert("Sets stored successfully!");
        navigate("/home");
      } else {
        alert("Error storing sets");
      }
    } catch (error) {
      console.error("Error storing sets:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">
        Enter 10 Sets with Questions and CO Numbers
      </h2>

      <div className="w-full max-w-4xl">
        {sets.map((set, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
            {/* Set Number beside heading */}
            <div className="flex items-center space-x-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Set {index + 1} 
              </h3>
              <input
                type="text"
                placeholder="Set Number"
                value={set.setNumber}
                onChange={(e) => handleInputChange(index, "setNumber", e.target.value)}
                className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500 w-28"
              />
            </div>

            {/* Question 1 & CO 1 in one line */}
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Question 1"
                value={set.questions[0]}
                onChange={(e) => handleInputChange(index, "questions", e.target.value, 0)}
                className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="CO Number 1"
                value={set.coNumbers[0]}
                onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 0)}
                className="w-28 border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Question 2 & CO 2 in next line */}
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Question 2"
                value={set.questions[1]}
                onChange={(e) => handleInputChange(index, "questions", e.target.value, 1)}
                className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="CO Number 2"
                value={set.coNumbers[1]}
                onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 1)}
                className="w-28 border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
      >
        Submit Sets
      </button>
    </div>
  );
};

export default SetEntry;
