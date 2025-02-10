// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const SetEntry = () => {
// //   const [sets, setSets] = useState(
// //     Array.from({ length: 10 }, () => ({
// //       setNumber: "",
// //       questions: ["", ""],
// //       coNumbers: ["", ""],
// //     }))
// //   );
// //   const navigate = useNavigate();

// //   const handleInputChange = (index, field, value, subIndex = null) => {
// //     const newSets = [...sets];

// //     if (field === "setNumber") {
// //       newSets[index].setNumber = value;
// //     } else if (field === "questions") {
// //       newSets[index].questions[subIndex] = value;
// //     } else if (field === "coNumbers") {
// //       newSets[index].coNumbers[subIndex] = value;
// //     }

// //     setSets(newSets);
// //   };

// //   const handleSubmit = async () => {
// //     const token = localStorage.getItem("token");

// //     if (!token) {
// //       alert("You are not authenticated. Please login again.");
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://localhost:5000/api/sets/add", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: token,
// //         },
// //         body: JSON.stringify({ sets }),
// //       });

// //       if (response.ok) {
// //         alert("Sets stored successfully!");
// //         navigate("/detailsentry");
// //       } else {
// //         alert("Error storing sets");
// //       }
// //     } catch (error) {
// //       console.error("Error storing sets:", error);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
// //       <h2 className="text-3xl font-bold mb-6 text-blue-700">
// //         Enter 10 Sets with Questions and CO Numbers
// //       </h2>

// //       <div className="w-full max-w-4xl">
// //         {sets.map((set, index) => (
// //           <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
// //             {/* Set Number beside heading */}
// //             <div className="flex items-center space-x-4 mb-4">
// //               <h3 className="text-xl font-semibold text-gray-800">
// //                 Set {index + 1} 
// //               </h3>
// //               <input
// //                 type="text"
// //                 placeholder="Set Number"
// //                 value={set.setNumber}
// //                 onChange={(e) => handleInputChange(index, "setNumber", e.target.value)}
// //                 className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500 w-28"
// //               />
// //             </div>

// //             {/* Question 1 & CO 1 in one line */}
// //             <div className="flex space-x-2 mb-2">
// //               <input
// //                 type="text"
// //                 placeholder="Question 1"
// //                 value={set.questions[0]}
// //                 onChange={(e) => handleInputChange(index, "questions", e.target.value, 0)}
// //                 className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// //               />
// //               <input
// //                 type="text"
// //                 placeholder="CO Number 1"
// //                 value={set.coNumbers[0]}
// //                 onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 0)}
// //                 className="w-28 border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// //               />
// //             </div>

// //             {/* Question 2 & CO 2 in next line */}
// //             <div className="flex space-x-2">
// //               <input
// //                 type="text"
// //                 placeholder="Question 2"
// //                 value={set.questions[1]}
// //                 onChange={(e) => handleInputChange(index, "questions", e.target.value, 1)}
// //                 className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// //               />
// //               <input
// //                 type="text"
// //                 placeholder="CO Number 2"
// //                 value={set.coNumbers[1]}
// //                 onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 1)}
// //                 className="w-28 border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <button
// //         onClick={handleSubmit}
// //         className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
// //       >
// //         Submit Sets
// //       </button>
// //     </div>
// //   );
// // };

// // export default SetEntry;


























// //-->success-->data subject entry


// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const SetEntry = () => {
// //   const [sets, setSets] = useState(
// //     Array.from({ length: 10 }, () => ({
// //       setNumber: "",
// //       questions: ["", ""],
// //       coNumbers: ["", ""],
// //     }))
// //   );
// //   const navigate = useNavigate();

// //   // Handle input changes for sets
// //   const handleInputChange = (index, field, value, subIndex = null) => {
// //     const newSets = [...sets];

// //     if (field === "setNumber") {
// //       newSets[index].setNumber = value;
// //     } else if (field === "questions") {
// //       newSets[index].questions[subIndex] = value;
// //     } else if (field === "coNumbers") {
// //       newSets[index].coNumbers[subIndex] = value;
// //     }

// //     setSets(newSets);
// //   };

// //   // Handle form submission
// //   const handleSubmit = async () => {
// //     const token = localStorage.getItem("token");

// //     if (!token) {
// //       alert("You are not authenticated. Please login again.");
// //       return;
// //     }

// //     const subject = document.getElementById("subject").value; // Get subject value directly from the input field
// //     if (!subject.trim()) {
// //       alert("Please enter a subject before submitting.");
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://localhost:5000/api/sets/add", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: token,
// //         },
// //         body: JSON.stringify({ subject, sets }),
// //       });

// //       if (response.ok) {
// //         alert("Sets stored successfully!");
// //         navigate("/detailsentry");
// //       } else {
// //         alert("Error storing sets");
// //       }
// //     } catch (error) {
// //       console.error("Error storing sets:", error);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
// //       {/* Ask for the subject */}
// //       <div className="mb-6">
// //         <h2 className="text-3xl font-bold text-blue-700 mb-4">Enter Lab Subject</h2>
// //         <input
// //           id="subject" // Direct access via DOM ID
// //           type="text"
// //           placeholder="Enter Subject Name"
// //           className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500 w-48"
// //         />
// //         <button
// //           onClick={handleSubmit}
// //           className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600"
// //         >
// //           Next
// //         </button>
// //       </div>

// //       <div className="w-full max-w-4xl">
// //         {/* Display the sets form after subject is entered */}
// //         <h2 className="text-3xl font-bold mb-6 text-blue-700">Enter 10 Sets with Questions and CO Numbers</h2>
// //         {sets.map((set, index) => (
// //           <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
// //             {/* Set Number beside heading */}
// //             <div className="flex items-center space-x-4 mb-4">
// //               <h3 className="text-xl font-semibold text-gray-800">Set {index + 1}</h3>
// //               <input
// //                 type="text"
// //                 placeholder="Set Number"
// //                 value={set.setNumber}
// //                 onChange={(e) => handleInputChange(index, "setNumber", e.target.value)}
// //                 className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500 w-28"
// //               />
// //             </div>

// //             {/* Question 1 & CO 1 in one line */}
// //             <div className="flex space-x-2 mb-2">
// //               <input
// //                 type="text"
// //                 placeholder="Question 1"
// //                 value={set.questions[0]}
// //                 onChange={(e) => handleInputChange(index, "questions", e.target.value, 0)}
// //                 className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// //               />
// //               <input
// //                 type="text"
// //                 placeholder="CO Number 1"
// //                 value={set.coNumbers[0]}
// //                 onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 0)}
// //                 className="w-28 border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// //               />
// //             </div>

// //             {/* Question 2 & CO 2 in next line */}
// //             <div className="flex space-x-2">
// //               <input
// //                 type="text"
// //                 placeholder="Question 2"
// //                 value={set.questions[1]}
// //                 onChange={(e) => handleInputChange(index, "questions", e.target.value, 1)}
// //                 className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// //               />
// //               <input
// //                 type="text"
// //                 placeholder="CO Number 2"
// //                 value={set.coNumbers[1]}
// //                 onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 1)}
// //                 className="w-28 border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //         <button
// //           onClick={handleSubmit}
// //           className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
// //         >
// //           Submit Sets
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SetEntry;
























//->sucess





// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const SetEntry = () => {
//   // State for existing subjects fetched from DB
//   const [existingSubjects, setExistingSubjects] = useState([]);
  
//   // State to store the selected subject (either existing or new)
//   const [selectedSubject, setSelectedSubject] = useState("");
  
//   // State for new subject input
//   const [newSubject, setNewSubject] = useState("");
  
//   // State to store sets fetched from DB
//   const [sets, setSets] = useState([]);

//   const navigate = useNavigate();

//   // ✅ Fetch existing subjects when component loads
//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch("http://localhost:5000/api/sets/fetchSubjects", {
//           headers: { Authorization: token },
//         });

//         const data = await response.json();
//         if (response.ok) {
//           setExistingSubjects(data.subjects);
//         } else {
//           console.error("Error fetching subjects:", data.error);
//         }
//       } catch (error) {
//         console.error("Server error:", error);
//       }
//     };

//     fetchSubjects();
//   }, []);

//   // ✅ Fetch sets when an existing subject is selected
//   useEffect(() => {
//     if (selectedSubject) {
//       fetchSets(selectedSubject);
//     }
//   }, [selectedSubject]);

//   const fetchSets = async (subject) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(`http://localhost:5000/api/sets/fetchSets?subject=${encodeURIComponent(subject)}`, {
//         headers: { Authorization: token },
//       });
  
//       const data = await response.json();
      
//       if (!response.ok) {
//         console.error("Error fetching sets:", data.error);
//         setSets([]); // Reset sets if not found
//         return;
//       }
  
//       setSets(data.sets || []);
//     } catch (error) {
//       console.error("Server error:", error);
//       setSets([]);
//     }
//   };
  

//   // ✅ Handle new subject addition
//   const handleAddNewSubject = () => {
//     if (!newSubject.trim()) {
//       alert("Please enter a valid subject name.");
//       return;
//     }
//     setSelectedSubject(newSubject);
//     setNewSubject("");
//     setSets(
//       Array.from({ length: 10 }, () => ({
//         setNumber: "",
//         questions: ["", ""],
//         coNumbers: ["", ""],
//       }))
//     );
//   };

//   // ✅ Handle input changes in sets
//   const handleInputChange = (index, field, value, subIndex = null) => {
//     const newSets = [...sets];

//     if (field === "setNumber") {
//       newSets[index].setNumber = value;
//     } else if (field === "questions") {
//       newSets[index].questions[subIndex] = value;
//     } else if (field === "coNumbers") {
//       newSets[index].coNumbers[subIndex] = value;
//     }

//     setSets(newSets);
//   };

//   // ✅ Handle submission
//   const handleSubmit = async () => {
//     if (!selectedSubject) {
//       alert("Please select or enter a subject before submitting.");
//       return;
//     }
  
//     const token = localStorage.getItem("token");
  
//     try {
//       const response = await fetch("http://localhost:5000/api/sets/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//         body: JSON.stringify({ subject: selectedSubject, sets }),
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         alert(data.message); // ✅ Show success message
//         navigate("/detailsentry"); // ✅ Navigate to details entry page
//       } else {
//         alert(data.error || "Error storing sets.");
//       }
//     } catch (error) {
//       console.error("Error storing sets:", error);
//       alert("Server error while storing sets.");
//     }
//   };
  

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       <h2 className="text-3xl font-bold text-blue-700 mb-6">Set Entry</h2>

//       {/* ✅ Dropdown for selecting existing subjects */}
//       <div className="mb-4 w-full max-w-md">
//         <label className="block text-gray-700">Select an existing subject:</label>
//         <select
//           value={selectedSubject}
//           onChange={(e) => setSelectedSubject(e.target.value)}
//           className="border p-2 rounded-md w-full"
//         >
//           <option value="">-- Select Subject --</option>
//           {existingSubjects.map((subject, index) => (
//             <option key={index} value={subject}>
//               {subject}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* ✅ Input for adding new subject */}
//       <div className="mb-6 w-full max-w-md">
//         <label className="block text-gray-700">Or enter a new subject:</label>
//         <input
//           type="text"
//           value={newSubject}
//           onChange={(e) => setNewSubject(e.target.value)}
//           className="border p-2 rounded-md w-full"
//           placeholder="Enter new subject"
//         />
//         <button
//           onClick={handleAddNewSubject}
//           className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
//         >
//           Add New Subject
//         </button>
//       </div>

//       {/* ✅ Display sets form if subject is selected */}
//       {selectedSubject && (
//         <div className="w-full max-w-4xl">
//           <h2 className="text-xl font-bold mb-4 text-blue-700">Enter 10 Sets</h2>

//           {sets.map((set, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-4">
//               {/* Set Number */}
//               <div className="mb-3">
//                 <label className="block text-gray-700">Set {index + 1} Number:</label>
//                 <input
//                   type="text"
//                   value={set.setNumber}
//                   onChange={(e) => handleInputChange(index, "setNumber", e.target.value)}
//                   className="border p-2 rounded-md w-full"
//                 />
//               </div>

//               {/* Question 1 & CO 1 */}
//               <div className="flex space-x-2 mb-3">
//                 <input
//                   type="text"
//                   placeholder="Question 1"
//                   value={set.questions[0]}
//                   onChange={(e) => handleInputChange(index, "questions", e.target.value, 0)}
//                   className="border p-2 rounded-md w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="CO Number 1"
//                   value={set.coNumbers[0]}
//                   onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 0)}
//                   className="border p-2 rounded-md w-24"
//                 />
//               </div>

//               {/* Question 2 & CO 2 */}
//               <div className="flex space-x-2">
//                 <input
//                   type="text"
//                   placeholder="Question 2"
//                   value={set.questions[1]}
//                   onChange={(e) => handleInputChange(index, "questions", e.target.value, 1)}
//                   className="border p-2 rounded-md w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="CO Number 2"
//                   value={set.coNumbers[1]}
//                   onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 1)}
//                   className="border p-2 rounded-md w-24"
//                 />
//               </div>
//             </div>
//           ))}

//           <button
//             onClick={handleSubmit}
//             className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
//           >
//             Submit Sets
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SetEntry;
















//->>100% success



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const SetEntry = () => {
//   const [existingSubjects, setExistingSubjects] = useState([]);
//   const [selectedSubject, setSelectedSubject] = useState("");
//   const [newSubject, setNewSubject] = useState("");
//   const [sets, setSets] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch(
//           "http://localhost:5000/api/sets/fetchSubjects",
//           {
//             headers: { Authorization: token },
//           }
//         );
//         const data = await response.json();

//         if (response.ok) {
//           setExistingSubjects(data.subjects);
//         } else {
//           console.error("Error fetching subjects:", data.error);
//         }
//       } catch (error) {
//         console.error("Server error:", error);
//       }
//     };

//     fetchSubjects();
//   }, []);

//   useEffect(() => {
//     if (selectedSubject && existingSubjects.includes(selectedSubject)) {
//       fetchSets(selectedSubject);
//     } else if (selectedSubject) {
//       setSets(
//         Array.from({ length: 10 }, () => ({
//           setNumber: "",
//           questions: ["", ""],
//           coNumbers: ["", ""],
//         }))
//       );
//     }
//   }, [selectedSubject]);

//   const fetchSets = async (subject) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSets?subject=${encodeURIComponent(
//           subject
//         )}`,
//         {
//           headers: { Authorization: token },
//         }
//       );
//       const data = await response.json();

//       if (!response.ok) {
//         console.error("Error fetching sets:", data.error);
//         setSets([]);
//         return;
//       }

//       setSets(data.sets || []);
//     } catch (error) {
//       console.error("Server error:", error);
//       setSets([]);
//     }
//   };

//   const handleAddNewSubject = () => {
//     if (!newSubject.trim()) {
//       alert("Please enter a valid subject name.");
//       return;
//     }

//     setSelectedSubject(newSubject);
//     setNewSubject("");

//     // ✅ Explicitly update sets after selecting a new subject
//     setSets(
//       Array.from({ length: 10 }, () => ({
//         setNumber: "",
//         questions: ["", ""],
//         coNumbers: ["", ""],
//       }))
//     );
//   };

//   const handleInputChange = (index, field, value, subIndex = null) => {
//     const newSets = [...sets];

//     if (field === "setNumber") {
//       newSets[index].setNumber = value;
//     } else if (field === "questions") {
//       newSets[index].questions[subIndex] = value;
//     } else if (field === "coNumbers") {
//       newSets[index].coNumbers[subIndex] = value;
//     }

//     setSets(newSets);
//   };

//   const handleSubmit = async () => {
//     if (!selectedSubject) {
//       alert("Please select or enter a subject before submitting.");
//       return;
//     }

//     const token = localStorage.getItem("token");

//     try {
//       const response = await fetch("http://localhost:5000/api/sets/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//         body: JSON.stringify({ subject: selectedSubject, sets }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message);
//         navigate("/detailsentry");
//       } else {
//         alert(data.error || "Error storing sets.");
//       }
//     } catch (error) {
//       console.error("Error storing sets:", error);
//       alert("Server error while storing sets.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       <h2 className="text-3xl font-bold text-blue-700 mb-6">Set Entry</h2>

//       <div className="mb-4 w-full max-w-md">
//         <label className="block text-gray-700">Select an existing subject:</label>
//         <select
//           value={selectedSubject}
//           onChange={(e) => setSelectedSubject(e.target.value)}
//           className="border p-2 rounded-md w-full"
//         >
//           <option value="">-- Select Subject --</option>
//           {existingSubjects.map((subject, index) => (
//             <option key={index} value={subject}>
//               {subject}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="mb-6 w-full max-w-md">
//         <label className="block text-gray-700">Or enter a new subject:</label>
//         <input
//           type="text"
//           value={newSubject}
//           onChange={(e) => setNewSubject(e.target.value)}
//           className="border p-2 rounded-md w-full"
//           placeholder="Enter new subject"
//         />
//         <button
//           onClick={handleAddNewSubject}
//           className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
//         >
//           Add New Subject
//         </button>
//       </div>

//       {selectedSubject && (
//         <div className="w-full max-w-4xl">
//           <h2 className="text-xl font-bold mb-4 text-blue-700">Enter 10 Sets</h2>

//           {sets.map((set, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-4">
//               <div className="mb-3">
//                 <label className="block text-gray-700">Set {index + 1} Number:</label>
//                 <input
//                   type="text"
//                   value={set.setNumber}
//                   onChange={(e) => handleInputChange(index, "setNumber", e.target.value)}
//                   className="border p-2 rounded-md w-full"
//                 />
//               </div>

//               <div className="flex space-x-2 mb-3">
//                 <input
//                   type="text"
//                   placeholder="Question 1"
//                   value={set.questions[0]}
//                   onChange={(e) => handleInputChange(index, "questions", e.target.value, 0)}
//                   className="border p-2 rounded-md w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="CO Number 1"
//                   value={set.coNumbers[0]}
//                   onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 0)}
//                   className="border p-2 rounded-md w-24"
//                 />
//               </div>

//               <div className="flex space-x-2">
//                 <input
//                   type="text"
//                   placeholder="Question 2"
//                   value={set.questions[1]}
//                   onChange={(e) => handleInputChange(index, "questions", e.target.value, 1)}
//                   className="border p-2 rounded-md w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="CO Number 2"
//                   value={set.coNumbers[1]}
//                   onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 1)}
//                   className="border p-2 rounded-md w-24"
//                 />
//               </div>
//             </div>
//           ))}

//           <button
//             onClick={handleSubmit}
//             className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
//           >
//             Submit Sets
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SetEntry;





















import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SetEntry = () => {
  const [existingSubjects, setExistingSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [sets, setSets] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:5000/api/sets/fetchSubjects",
          {
            headers: { Authorization: token },
          }
        );
        const data = await response.json();

        if (response.ok) {
          setExistingSubjects(data.subjects);
        } else {
          console.error("Error fetching subjects:", data.error);
        }
      } catch (error) {
        console.error("Server error:", error);
      }
    };

    fetchSubjects();
  }, []);

  useEffect(() => {
    if (selectedSubject && existingSubjects.includes(selectedSubject)) {
      fetchSets(selectedSubject);
    } else if (selectedSubject) {
      setSets(
        Array.from({ length: 10 }, () => ({
          setNumber: "",
          questions: ["", ""],
          coNumbers: ["", ""],
        }))
      );
    }
  }, [selectedSubject]);

  const fetchSets = async (subject) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/sets/fetchSets?subject=${encodeURIComponent(
          subject
        )}`,
        {
          headers: { Authorization: token },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        console.error("Error fetching sets:", data.error);
        setSets([]);
        return;
      }

      setSets(data.sets || []);
    } catch (error) {
      console.error("Server error:", error);
      setSets([]);
    }
  };

  const handleAddNewSubject = () => {
    if (!newSubject.trim()) {
      alert("Please enter a valid subject name.");
      return;
    }

    setSelectedSubject(newSubject);
    setNewSubject("");

    // ✅ Explicitly update sets after selecting a new subject
    setSets(
      Array.from({ length: 10 }, () => ({
        setNumber: "",
        questions: ["", ""],
        coNumbers: ["", ""],
      }))
    );
  };

  const handleInputChange = (setIndex, field, value, questionIndex) => {
    setSets((prevSets) => {
      const updatedSets = [...prevSets];
      if (field === "setNumber") {
        updatedSets[setIndex].setNumber = value;
      } else if (field === "questions") {
        updatedSets[setIndex].questions[questionIndex] = value;
      } else if (field === "coNumbers") {
        updatedSets[setIndex].coNumbers[questionIndex] = value;
      }
      return updatedSets;
    });
  };
  

  const handleSubmit = async () => {
    if (!selectedSubject) {
      alert("Please select or enter a subject before submitting.");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:5000/api/sets/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ subject: selectedSubject, sets }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        // ✅ Send selected subject to next page
        navigate("/detailsentry", { state: { subject: selectedSubject } });
      } else {
        alert(data.error || "Error storing sets.");
      }
    } catch (error) {
      console.error("Error storing sets:", error);
      alert("Server error while storing sets.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Set Entry</h2>

      <div className="mb-4 w-full max-w-md">
        <label className="block text-gray-700">Select an existing subject:</label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="border p-2 rounded-md w-full"
        >
          <option value="">-- Select Subject --</option>
          {existingSubjects.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6 w-full max-w-md">
        <label className="block text-gray-700">Or enter a new subject:</label>
        <input
          type="text"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          className="border p-2 rounded-md w-full"
          placeholder="Enter new subject"
        />
        <button
          onClick={handleAddNewSubject}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
        >
          Add New Subject
        </button>
      </div>

      {selectedSubject && (
        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Enter 10 Sets</h2>

          {sets.map((set, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-4">
              <div className="mb-3">
                <label className="block text-gray-700">Set {index + 1} Number:</label>
                <input
                  type="text"
                  value={set.setNumber}
                  onChange={(e) => handleInputChange(index, "setNumber", e.target.value)}
                  className="border p-2 rounded-md w-full"
                />
              </div>

              <div className="flex space-x-2 mb-3">
                <input
                  type="text"
                  placeholder="Question 1"
                  value={set.questions[0]}
                  onChange={(e) => handleInputChange(index, "questions", e.target.value, 0)}
                  className="border p-2 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="CO Number 1"
                  value={set.coNumbers[0]}
                  onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 0)}
                  className="border p-2 rounded-md w-24"
                />
              </div>

              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Question 2"
                  value={set.questions[1]}
                  onChange={(e) => handleInputChange(index, "questions", e.target.value, 1)}
                  className="border p-2 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="CO Number 2"
                  value={set.coNumbers[1]}
                  onChange={(e) => handleInputChange(index, "coNumbers", e.target.value, 1)}
                  className="border p-2 rounded-md w-24"
                />
              </div>
            </div>
          ))}

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Submit Sets
          </button>
        </div>
      )}
    </div>
  );
};

export default SetEntry;
