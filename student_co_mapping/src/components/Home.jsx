// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Home() {
// //   const [selectBranch, setSelectBranch] = useState("Select Branch");
// //   const [selectSection, setSelectSection] = useState("Select Section");
// //   const [academicYear, setAcademicYear] = useState("");
// //   const navigate = useNavigate();

// //   const getSections = (branch) => {
// //     switch (branch) {
// //       case "CSE":
// //         return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
// //       case "CSM":
// //       case "CSD":
// //       case "IT":
// //         return ["A", "B", "C", "D"];
// //       case "EEE":
// //       case "ECE":
// //         return ["A", "B"];  
// //       case "AIDS" :
// //         return ["A"];
// //       case "AIML" :
// //         return ["A"];
// //       case "CYS":
// //         return ["A","B","C"];
// //       default:
// //         return [];
// //     }
// //   };

// //   const handleBranchChange = (e) => {
// //     setSelectBranch(e.target.value);
// //     setSelectSection("Select Section");
// //   };

// //   const handleSubmit = () => {
// //     if (academicYear && selectBranch !== "Select Branch" && selectSection !== "Select Section") {
// //       navigate("/name", { 
// //         state: { academicYear, Branch: selectBranch, Section: selectSection } 
// //       });
// //     }   
// //   };

// //   return (
// //     <div className="bg-gray-300 flex justify-center items-center min-h-screen px-4">
// //       <div className="max-w-2xl w-full bg-purple-400 flex flex-col rounded-xl p-6 m-5 items-center shadow-lg">
// //         <div className="m-4 flex flex-col items-center w-full">
// //           <h1 className="text-white text-3xl mb-4 text-center">Please Select Academic Year</h1>
// //           <input 
// //             type="text" 
// //             placeholder="Enter Academic Year" 
// //             value={academicYear}
// //             onChange={(e) => setAcademicYear(e.target.value)}
// //             className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
// //           />
// //         </div>

// //         <div className="m-4 flex flex-col items-center w-full">
// //           <h1 className="text-white text-3xl mb-4 text-center">Please Select Branch</h1>
// //           <select 
// //             value={selectBranch} 
// //             onChange={handleBranchChange}
// //             className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
// //           >
// //             <option value="Select Branch" disabled>Select Branch</option>
// //             <option value="CSE">CSE</option>
// //             <option value="IT">IT</option>
// //             <option value="ECE">ECE</option>
// //             <option value="EEE">EEE</option>
// //             <option value="CSM">CSM</option>
// //             <option value="CSD">CSD</option>
// //             <option value="AIML">AIML</option>
// //             <option value="AIDS">AIDS</option>
// //             <option value="CYS">CYS</option>
// //           </select>
// //         </div>

// //         <div className="m-4 flex flex-col items-center w-full">
// //           <h1 className="text-white text-3xl mb-4 text-center">Please Select Section</h1>
// //           <select 
// //             value={selectSection} 
// //             onChange={(e) => setSelectSection(e.target.value)}
// //             className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
// //             disabled={selectBranch === "Select Branch"}
// //           >
// //             <option value="Select Section" disabled>Select Section</option>
// //             {getSections(selectBranch).map((section) => (
// //               <option key={section} value={section}>{section}</option>
// //             ))}
// //           </select>
// //         </div>

// //         <div className="m-4 flex justify-center w-full">
// //           <button 
// //             onClick={handleSubmit} 
// //             className="bg-green-500 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
// //             disabled={selectBranch === "Select Branch" || selectSection === "Select Section"}
// //           >
// //             Submit
// //           </button>
// //         </div>
        

// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;






















































// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [selectBranch, setSelectBranch] = useState("Select Branch");
//   const [selectYear, setSelectYear] = useState("Select Year");
//   const [selectSection, setSelectSection] = useState("Select Section");
//   const [academicYear, setAcademicYear] = useState("");
//   const [examMonth, setExamMonth] = useState("");
//   const [semester, setSemester] = useState("Select Semester");
//   const [externalExaminer, setExternalExaminer] = useState("");
//   const [internalExaminer, setInternalExaminer] = useState("");
//   const [labName, setLabName] = useState("");
//   const navigate = useNavigate();

//   const getSections = (branch) => {
//     switch (branch) {
//       case "CSE":
//         return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//       case "CSM":
//       case "CSD":
//       case "IT":
//         return ["A", "B", "C", "D"];
//       case "EEE":
//       case "ECE":
//         return ["A", "B"];  
//       case "AIDS" :
//         return ["A"];
//       case "AIML" :
//         return ["A"];
//       default:
//         return [];
//     }
//   };

//   const handleBranchChange = (e) => {
//     setSelectBranch(e.target.value);
//     setSelectSection("Select Section");
//   };

//   const handleSubmit = () => {
//     if (
//       academicYear && selectBranch !== "Select Branch" && selectSection !== "Select Section" && examMonth && semester !== "Select Semester" &&
//       selectYear !== "Select Year" && labName && externalExaminer && internalExaminer
//     ) {
//       navigate("/name", { 
//         state: { academicYear, Branch: selectBranch, Section: selectSection, ExamMonth: examMonth, 
//           Semester: semester, Year: selectYear, LabName: labName, ExternalExaminer: externalExaminer, InternalExaminer: internalExaminer 
//         } 
//       });
//     }   
//   };

//   return (
//     <div className="bg-gray-300 flex justify-center items-center h-screen px-4">
//       <div className="max-w-5xl w-full bg-purple-400 flex flex-col rounded-xl p-6 m-5 items-center shadow-lg">
//         <div className="flex gap-3">
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Academic Year</h1>
//             <input 
//               type="text" 
//               placeholder="Enter Academic Year" 
//               value={academicYear}
//               onChange={(e) => setAcademicYear(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Examination Month</h1>
//             <input 
//               type="text" 
//               placeholder="Enter Examination Month" 
//               value={examMonth}
//               onChange={(e) => setExamMonth(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Year</h1>
//             <select 
//               value={selectYear} 
//               onChange={(e) => setSelectYear(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             >
//               <option value="Select Year" disabled>Select Year</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//             </select>
//           </div>
//           </div>

//           <div className="flex gap-3">
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Semester</h1>
//             <select 
//               value={semester} 
//               onChange={(e) => setSemester(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             >
//               <option value="Select Semester" disabled>Select Semester</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//             </select>
//           </div>
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Branch</h1>
//             <select 
//               value={selectBranch} 
//               onChange={handleBranchChange}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             >
//               <option value="Select Branch" disabled>Select Branch</option>
//               <option value="CSE">CSE</option>
//               <option value="IT">IT</option>
//               <option value="ECE">ECE</option>
//               <option value="EEE">EEE</option>
//               <option value="CSM">CSM</option>
//               <option value="CSD">CSD</option>
//               <option value="AIML">AIML</option>
//               <option value="AIDS">AIDS</option>
//             </select>
//           </div>
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Section</h1>
//             <select 
//               value={selectSection} 
//               onChange={(e) => setSelectSection(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//               disabled={selectBranch === "Select Branch"}
//             >
//               <option value="Select Section" disabled>Select Section</option>
//               {getSections(selectBranch).map((section) => (
//                 <option key={section} value={section}>{section}</option>
//               ))}
//             </select>
//           </div>
//           </div>
//           <div className="flex gap-3">
//           <div className="m-4 flex flex-col items-center w-full mt-11">
//             <h1 className="text-white text-xl mb-4 text-center">Name of Lab</h1>
//             <input 
//               type="text" 
//               placeholder="Enter Lab Name" 
//               value={labName}
//               onChange={(e) => setLabName(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Name & College of External Examiner</h1>
//             <input 
//               type="text" 
//               placeholder="Enter Name & College" 
//               value={externalExaminer}
//               onChange={(e) => setExternalExaminer(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
//           <div className="m-4 flex flex-col items-center w-full mt-11">
//             <h1 className="text-white text-xl mb-4 text-center">Name of Internal Examiner</h1>
//             <input 
//               type="text" 
//               placeholder="Enter Name" 
//               value={internalExaminer}
//               onChange={(e) => setInternalExaminer(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
          
//         </div>
//         <div className="m-4 flex justify-center w-full">
//           <button 
//             onClick={handleSubmit} 
//             className="bg-green-500 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
//             disabled={selectBranch === "Select Branch" || selectSection === "Select Section" || semester === "Select Semester"}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

































// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [selectBranch, setSelectBranch] = useState("Select Branch");
//   const [selectYear, setSelectYear] = useState("Select Year");
//   const [selectSection, setSelectSection] = useState("Select Section");
//   const [academicYear, setAcademicYear] = useState("");
//   const [examMonth, setExamMonth] = useState("");
//   const [semester, setSemester] = useState("Select Semester");
//   const [externalExaminer, setExternalExaminer] = useState("");
//   const [internalExaminer, setInternalExaminer] = useState("");
//   const [labName, setLabName] = useState("");
//   const [examDate, setExamDate] = useState("");  // New state for exam date
//   const [maxMarks, setMaxMarks] = useState("");  // New state for max marks
//   const navigate = useNavigate();

//   const getSections = (branch) => {
//     switch (branch) {
//       case "CSE":
//         return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//       case "CSM":
//       case "CSD":
//       case "IT":
//         return ["A", "B", "C", "D"];
//       case "EEE":
//       case "ECE":
//         return ["A", "B"];  
//       case "AIDS" :
//         return ["A"];
//       case "AIML" :
//         return ["A"];
//       default:
//         return [];
//     }
//   };

//   const handleBranchChange = (e) => {
//     setSelectBranch(e.target.value);
//     setSelectSection("Select Section");
//   };

//   const handleSubmit = () => {
//     if (
//       academicYear && selectBranch !== "Select Branch" && selectSection !== "Select Section" && examMonth && semester !== "Select Semester" &&
//       selectYear !== "Select Year" && labName && externalExaminer && internalExaminer && examDate && maxMarks
//     ) {
//       navigate("/name", { 
//         state: { academicYear, Branch: selectBranch, Section: selectSection, ExamMonth: examMonth, 
//           Semester: semester, Year: selectYear, LabName: labName, ExternalExaminer: externalExaminer, InternalExaminer: internalExaminer,
//           ExamDate: examDate, MaxMarks: maxMarks // New fields
//         } 
//       });
//     }   
//   };

//   return (
//     <div className="bg-gray-300 flex justify-center items-center h-screen px-4">
//       <div className="max-w-5xl w-full bg-purple-400 flex flex-col rounded-xl p-6 m-5 items-center shadow-lg">
//         <div className="flex gap-3">
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Academic Year</h1>
//             <input 
//               type="text" 
//               placeholder="Enter Academic Year" 
//               value={academicYear}
//               onChange={(e) => setAcademicYear(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Examination Month</h1>
//             <input 
//               type="text" 
//               placeholder="Enter Examination Month" 
//               value={examMonth}
//               onChange={(e) => setExamMonth(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Year</h1>
//             <select 
//               value={selectYear} 
//               onChange={(e) => setSelectYear(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             >
//               <option value="Select Year" disabled>Select Year</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//             </select>
//           </div>
//         </div>

//         <div className="flex gap-3">
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Semester</h1>
//             <select 
//               value={semester} 
//               onChange={(e) => setSemester(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             >
//               <option value="Select Semester" disabled>Select Semester</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//             </select>
//           </div>
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Branch</h1>
//             <select 
//               value={selectBranch} 
//               onChange={handleBranchChange}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             >
//               <option value="Select Branch" disabled>Select Branch</option>
//               <option value="CSE">CSE</option>
//               <option value="IT">IT</option>
//               <option value="ECE">ECE</option>
//               <option value="EEE">EEE</option>
//               <option value="CSM">CSM</option>
//               <option value="CSD">CSD</option>
//               <option value="AIML">AIML</option>
//               <option value="AIDS">AIDS</option>
//             </select>
//           </div>
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Select Section</h1>
//             <select 
//               value={selectSection} 
//               onChange={(e) => setSelectSection(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//               disabled={selectBranch === "Select Branch"}
//             >
//               <option value="Select Section" disabled>Select Section</option>
//               {getSections(selectBranch).map((section) => (
//                 <option key={section} value={section}>{section}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="flex gap-3">
//           <div className="m-4 flex flex-col items-center w-full mt-11">
//             <h1 className="text-white text-xl mb-4 text-center">Name of Lab</h1>
//             <input 
//               type="text" 
//               placeholder="Enter Lab Name" 
//               value={labName}
//               onChange={(e) => setLabName(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Name & College of External Examiner</h1>
//             <input 
//               type="text" 
//               placeholder="Enter Name & College" 
//               value={externalExaminer}
//               onChange={(e) => setExternalExaminer(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
//           <div className="m-4 flex flex-col items-center w-full mt-11">
//             <h1 className="text-white text-xl mb-4 text-center">Name of Internal Examiner</h1>
//             <input 
//               type="text" 
//               placeholder="Enter Name" 
//               value={internalExaminer}
//               onChange={(e) => setInternalExaminer(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
//         </div>

//         <div className="flex gap-3">
//           <div className="m-4 flex flex-col items-center w-full mt-11">
//             <h1 className="text-white text-xl mb-4 text-center">Date of Examination</h1>
//             <input 
//               type="date" 
//               value={examDate}
//               onChange={(e) => setExamDate(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
//           <div className="m-4 flex flex-col items-center w-full">
//             <h1 className="text-white text-xl mb-4 text-center">Max Marks</h1>
//             <input 
//               type="number" 
//               placeholder="Enter Max Marks" 
//               value={maxMarks}
//               onChange={(e) => setMaxMarks(e.target.value)}
//               className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             />
//           </div>
//         </div>

//         <div className="m-4 flex justify-center w-full">
//           <button 
//             onClick={handleSubmit} 
//             className="bg-green-500 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
//             disabled={selectBranch === "Select Branch" || selectSection === "Select Section" || semester === "Select Semester"}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [selectBranch, setSelectBranch] = useState("Select Branch");
  const [selectYear, setSelectYear] = useState("Select Year");
  const [selectSection, setSelectSection] = useState("Select Section");
  const [academicYear, setAcademicYear] = useState("");
  const [examMonth, setExamMonth] = useState("");
  const [semester, setSemester] = useState("Select Semester");
  const [externalExaminer, setExternalExaminer] = useState("");
  const [internalExaminer, setInternalExaminer] = useState("");
  const [labName, setLabName] = useState("");
  const [examDate, setExamDate] = useState("");
  const [maxMarks, setMaxMarks] = useState("");
  const [regulation, setRegulation] = useState("");
  const navigate = useNavigate();

  const getSections = (branch) => {
    switch (branch) {
      case "CSE":
        return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
      case "CSM":
      case "CSD":
      case "IT":
        return ["A", "B", "C", "D"];
      case "EEE":
      case "ECE":
        return ["A", "B"];  
      case "AIDS" :
        return ["A"];
      case "AIML" :
        return ["A"];
      default:
        return [];
    }
  };

  const handleBranchChange = (e) => {
    setSelectBranch(e.target.value);
    setSelectSection("Select Section");
  };

  const handleSubmit = () => {
    console.log('academicYear:', academicYear);
    console.log('selectBranch:', selectBranch);
    console.log('selectSection:', selectSection);
    console.log('examMonth:', examMonth);
    console.log('semester:', semester);
    console.log('selectYear:', selectYear);
    console.log('labName:', labName);
    console.log('externalExaminer:', externalExaminer);
    console.log('internalExaminer:', internalExaminer);
    console.log('examDate:', examDate);
    console.log('maxMarks:', maxMarks);
    console.log('regulation:', regulation);
  
    if (
      academicYear && selectBranch !== "Select Branch" && selectSection !== "Select Section" && examMonth && semester !== "Select Semester" &&
      selectYear !== "Select Year" && labName && externalExaminer && internalExaminer && examDate && maxMarks && regulation
    ) {
      navigate("/name", { 
        state: { 
          academicYear, 
          Branch: selectBranch, 
          Section: selectSection, 
          ExamMonth: examMonth, 
          Semester: semester, 
          Year: selectYear, 
          LabName: labName, 
          ExternalExaminer: externalExaminer, 
          InternalExaminer: internalExaminer,
          ExamDate: examDate,
          MaxMarks: maxMarks,
          Regulation: regulation
        } 
      });
    } else {
      console.log('Form validation failed.');
    }
  };
  

  return (
    <div className="bg-gray-300 flex justify-center items-center min-h-screen px-4">
      <div className="max-w-5xl w-full bg-purple-400 flex flex-col rounded-xl p-6 m-5 items-center shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* First row with Academic Year and Exam Month */}
          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">Select Academic Year</h1>
            <input
              type="text"
              placeholder="Enter Academic Year"
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            />
          </div>

          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">Examination Month</h1>
            <input
              type="text"
              placeholder="Enter Examination Month"
              value={examMonth}
              onChange={(e) => setExamMonth(e.target.value)}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            />
          </div>

          {/* Second row */}
          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">Select Year</h1>
            <select
              value={selectYear}
              onChange={(e) => setSelectYear(e.target.value)}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            >
              <option value="Select Year" disabled>Select Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">Select Semester</h1>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            >
              <option value="Select Semester" disabled>Select Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          {/* Third row with Date of Examination, Max Marks, Regulation */}
          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">Date of Examination</h1>
            <input
              type="date"
              placeholder="Enter Date of Examination"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            />
          </div>

          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">Max Marks</h1>
            <input
              type="text"
              placeholder="Enter Max Marks"
              value={maxMarks}
              onChange={(e) => setMaxMarks(e.target.value)}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            />
          </div>

          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">Regulation</h1>
            <input
              type="text"
              placeholder="Enter Regulation"
              value={regulation}
              onChange={(e) => setRegulation(e.target.value)}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            />
          </div>

          {/* Remaining fields (Branch, Section, Lab Name, etc.) */}
          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">Select Branch</h1>
            <select
              value={selectBranch}
              onChange={handleBranchChange}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            >
              <option value="Select Branch" disabled>Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="CSM">CSM</option>
              <option value="CSD">CSD</option>
              <option value="AIML">AIML</option>
              <option value="AIDS">AIDS</option>
            </select>
          </div>

          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">Select Section</h1>
            <select
              value={selectSection}
              onChange={(e) => setSelectSection(e.target.value)}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
              disabled={selectBranch === "Select Branch"}
            >
              <option value="Select Section" disabled>Select Section</option>
              {getSections(selectBranch).map((section) => (
                <option key={section} value={section}>{section}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">Name of Lab</h1>
            <input
              type="text"
              placeholder="Enter Lab Name"
              value={labName}
              onChange={(e) => setLabName(e.target.value)}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            />
          </div>

          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">External Examiner</h1>
            <input
              type="text"
              placeholder="Enter Name & College"
              value={externalExaminer}
              onChange={(e) => setExternalExaminer(e.target.value)}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            />
          </div>

          <div className="flex flex-col items-center w-full">
            <h1 className="text-white text-lg mb-2 text-center">Internal Examiner</h1>
            <input
              type="text"
              placeholder="Enter Name"
              value={internalExaminer}
              onChange={(e) => setInternalExaminer(e.target.value)}
              className="w-full max-w-xs bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white text-lg font-semibold px-8 py-3 rounded-lg mt-6 hover:bg-green-600 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;