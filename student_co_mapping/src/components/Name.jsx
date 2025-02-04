// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import { debounce } from "lodash";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import * as XLSX from "xlsx";

// function Name() {
//   const location = useLocation();
//   const { academicYear = "", Branch = "", Section = "" } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});
//   const [setDetails, setSetDetails] = useState({});

//   // Update the marks when the input changes
//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   // Fetch the set details from the server when setNumber or rollNumber changes
//   const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();
//       //console.log(data); // Debugging the data structure
//       if (response.ok) {
//         const setData = data.sets[0];  // Accessing the first object in the sets array
//         if (setData) {
//           // Divide questions into Program 1 (CO1) and Program 2 (CO2)
//           const dividedQuestions = {
//             program1: setData.questions?.slice(0, setData.questions.length / 2),
//             program2: setData.questions?.slice(setData.questions.length / 2),
//             co1: setData.coNumbers?.slice(0, setData.coNumbers.length / 2),
//             co2: setData.coNumbers?.slice(setData.coNumbers.length / 2),
//           };
//           setSetDetails((prev) => ({
//             ...prev,
//             [rollNumber]: dividedQuestions,
//           }));
//         } else {
//           alert("Set number not found.");
//         }
//       } else {
//         alert("No set details found for the given set number.");
//       }
//     } catch (error) {
//       console.error("Error fetching set details:", error);
//     }
//   }, 500);

//   // Effect hook to fetch set details whenever setNumbers change
//   useEffect(() => {
//     if (Object.keys(setNumbers).length) {
//       Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
//         fetchSetDetailsDebounced(setNum, rollNumber);
//       });
//     }
//   }, [setNumbers]);

//   // Handle changes in the set number for each roll number
//   const handleSetNumberChange = (rollNumber, value) => {
//     setSetNumbers((prev) => ({ ...prev, [rollNumber]: value }));
//   };

//   // Calculate total marks for each student
//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};

//     // Parse marks or set to 0 if empty or invalid
//     const writeUp = parseInt(studentMarks.writeUp) || 0;
//     const compileErrors = parseInt(studentMarks.compileErrors) || 0;
//     const execution = parseInt(studentMarks.execution) || 0;
//     const programSyntax = parseInt(studentMarks.programSyntax) || 0;
//     const vivaVoice = parseInt(studentMarks.vivaVoice) || 0;

//     // Calculate total marks by adding all fields
//     return writeUp + compileErrors + execution + programSyntax + vivaVoice;
//   };

//   // Download PDF function
//   // const downloadPDF = () => {
//   //   const doc = new jsPDF();

//   //   // Set table headers
//   //   const headers = [
//   //     ["S. No.", "Set No.", "Hall Ticket", "Program 1 Executed", "Mapping CO 1", "Write Up (10M)", "Compile Errors (15M)", "Execution (15M)", "Program 2 Executed", "Mapping CO 2", "Program & Syntax (10M)", "Viva-Voice (10M)", "Total Marks (60M)"],
//   //   ];

//   //   // Format data for the table
//   //   const data = rollNumbers.map((rollNumber, index) => {
//   //     return [
//   //       index + 1,
//   //       setNumbers[rollNumber] || "",
//   //       rollNumber,
//   //       setDetails[rollNumber]?.program1?.join(", ") || "-",
//   //       setDetails[rollNumber]?.co1?.join(", ") || "-",
//   //       marks[rollNumber]?.writeUp || "",
//   //       marks[rollNumber]?.compileErrors || "",
//   //       marks[rollNumber]?.execution || "",
//   //       setDetails[rollNumber]?.program2?.join(", ") || "-",
//   //       setDetails[rollNumber]?.co2?.join(", ") || "-",
//   //       marks[rollNumber]?.programSyntax || "",
//   //       marks[rollNumber]?.vivaVoice || "",
//   //       calculateTotalMarks(rollNumber),
//   //     ];
//   //   });

//   //   // Add the table to the PDF
//   //   doc.autoTable({
//   //     head: headers,
//   //     body: data,
//   //   });

//   //   // Save the PDF
//   //   doc.save("marksheet.pdf");
//   // };

//   const downloadPDF = ()=>{
//     window.print();
//   }

//   // Download Excel function
//   const downloadExcel = () => {
//     const data = rollNumbers.map((rollNumber, index) => {
//       return {
//         "S. No.": index + 1,
//         "Set No.": setNumbers[rollNumber] || "",
//         "Hall Ticket": rollNumber,
//         "Program 1 Executed": setDetails[rollNumber]?.program1?.join(", ") || "-",
//         "Mapping CO 1": setDetails[rollNumber]?.co1?.join(", ") || "-",
//         "Write Up (10M)": marks[rollNumber]?.writeUp || "",
//         "Compile Errors (15M)": marks[rollNumber]?.compileErrors || "",
//         "Execution (15M)": marks[rollNumber]?.execution || "",
//         "Program 2 Executed": setDetails[rollNumber]?.program2?.join(", ") || "-",
//         "Mapping CO 2": setDetails[rollNumber]?.co2?.join(", ") || "-",
//         "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || "",
//         "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || "",
//         "Total Marks (60M)": calculateTotalMarks(rollNumber),
//       };
//     });

//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Marks Data");
//     XLSX.writeFile(wb, "marksheet.xlsx");
//   };

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-md border">
//         <div className="flex justify-center items-center border w-full h-23">
//           <div className="text-center border-r w-[820px] h-full">
//             <h1 className="text-2xl font-bold font-serif ">CVR COLLEGE OF ENGINEERING</h1>
//             <p className="text-lg font-semibold font-serif">An UGC Autonomous Institution Affiliated to JNTUH</p>
//             <p className="text-sm font-semibold font-serif">Vastunagar, Mangalpally (V), Ibrahimpatnam (M), Ranga Reddy District - 501510</p>
//           </div>
//           <div className="flex flex-col justify-center items-center w-[180px] h-full">
//             <h1 className="text-center text-xl font-bold font-serif ">College Code</h1>
//             <h1 className="text-2xl font-bold font-serif ">B8</h1>
//           </div>
//         </div>

//         {/* Other form inputs */}
//         <div className="flex flex-col gap-2 mt-4">
//           <h2 className="text-lg font-bold mt-2 mb-3 text-center underline ">AWARD LIST (LABORATORY)</h2>
//           <div className="flex gap-3 w-full">
//             <div className="w-[60%]">
//               <label className=" inline text-sm font-semibold font-serif ">Name of Exam:</label>
//               <input
//                 type="text"
//                 className="text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="flex w-[40%]  ">
//               <label className=" inline text-sm font-semibold font-serif ">(Reg./Supp)Month:</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               />
//               <label className=" inline text-sm font-semibold ">20</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[10%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className="mt-3 w-full">
//             <label className=" inline text-sm font-semibold font-serif ">Branch & Section:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               value={`${Branch}-${Section}`}
//               // onChange={(e) => setSection(e.target.value)}
//             />
//             <label className=" pl-2 inline text-sm font-semibold font-serif  ">Regulation:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[17.2%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex mt-3  w-full">
//             <div className="w-[50%]">
//               <label className="text-sm font-semibold font-serif ">Name of Lab:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[30%]">
//               <label className="text-sm font-semibold font-serif ">Date of Examination:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[47%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[20%]">
//               <label className="text-sm font-semibold font-serif ">Max.Marks:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[55%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className=" w-full flex mt-3 ">
//             <label className="text-sm font-semibold font-serif ">Name & College of External Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[71.5%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex w-full mt-3">
//             <label className="text-sm font-semibold font-serif ">Name of Internal Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[79%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//         </div>
//       {/* </div> */}



      

      // <div className="overflow-x-auto">
      //   <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
      //     <thead>
      //       <tr className="bg-gray-200">
      //         <th className="border border-gray-300 p-1">S. No.</th>
      //         <th className="border border-gray-300 p-1">Set No.</th>
      //         <th className="border border-gray-300 p-1">Hall Ticket</th>
      //         <th className="border border-gray-300 p-1">Program 1 Executed</th>
      //         <th className="border border-gray-300 p-1">Mapping CO 1</th>
      //         <th className="border border-gray-300 p-1">Write Up (10M)</th>
      //         <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
      //         <th className="border border-gray-300 p-1">Execution (15M)</th>
      //         <th className="border border-gray-300 p-1">Program 2 Executed</th>
      //         <th className="border border-gray-300 p-1">Mapping CO 2</th>
      //         <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
      //         <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
      //         <th className="border border-gray-300 p-1">Total Marks (60M)</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {rollNumbers.map((rollNumber, index) => (
      //         <tr key={index}>
      //           <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
      //           <td className="border border-gray-300 p-1">
      //             <input
      //               type="number"
      //               className="w-full border-none outline-none text-sm"
      //               value={setNumbers[rollNumber] || ""}
      //               onChange={(e) => handleSetNumberChange(rollNumber, e.target.value)}
      //             />
      //           </td>
      //           <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
      //           <td className="border border-gray-300 p-1">
      //             {setDetails[rollNumber]?.program1?.join(", ") || "-"}
      //           </td>
      //           <td className="border border-gray-300 p-1">
      //             {setDetails[rollNumber]?.co1?.join(", ") || "-"}
      //           </td>
      //           <td className="border border-gray-300 p-1">
      //             <input
      //               type="number"
      //               className="w-full border-none outline-none text-sm"
      //               value={marks[rollNumber]?.writeUp || ""}
      //               onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
      //             />
      //           </td>
      //           <td className="border border-gray-300 p-1">
      //             <input
      //               type="number"
      //               className="w-full border-none outline-none text-sm"
      //               value={marks[rollNumber]?.compileErrors || ""}
      //               onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
      //             />
      //           </td>
      //           <td className="border border-gray-300 p-1">
      //             <input
      //               type="number"
      //               className="w-full border-none outline-none text-sm"
      //               value={marks[rollNumber]?.execution || ""}
      //               onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
      //             />
      //           </td>
      //           <td className="border border-gray-300 p-1">
      //             {setDetails[rollNumber]?.program2?.join(", ") || "-"} {/* Program 2 Executed */}
      //           </td>
      //           <td className="border border-gray-300 p-1">
      //             {setDetails[rollNumber]?.co2?.join(", ") || "-"} {/* CO Mapping 2 */}
      //           </td>
      //           <td className="border border-gray-300 p-1">
      //             <input
      //               type="number"
      //               className="w-full border-none outline-none text-sm"
      //               value={marks[rollNumber]?.programSyntax || ""}
      //               onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
      //             />
      //           </td>
      //           <td className="border border-gray-300 p-1">
      //             <input
      //               type="number"
      //               className="w-full border-none outline-none text-sm"
      //               value={marks[rollNumber]?.vivaVoice || ""}
      //               onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
      //             />
      //           </td>
      //           <td className="border border-gray-300 p-1 text-center">
      //             {calculateTotalMarks(rollNumber)}
      //           </td>
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
      // </div>

      // <div className="flex justify-center mt-6">
      //   <button
      //     onClick={downloadPDF}
      //     className="bg-blue-500 text-white p-2 rounded-md mr-4"
      //   >
      //     Download PDF
      //   </button>
      //   <button
      //     onClick={downloadExcel}
      //     className="bg-green-500 text-white p-2 rounded-md"
      //   >
      //     Download Excel
      //   </button>
      // </div>
//     </div>
//   </div>
//   );
// }

// export default Name;






















































//->>100% success



// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import { debounce } from "lodash";
// import * as XLSX from "xlsx";
// import '../App.css';

// function Name() {
//   const location = useLocation();
//   const { 
//     academicYear = "", 
//     Branch = "", 
//     Section = "", 
//     ExamMonth = "", 
//     Semester = "", 
//     Year = "", 
//     LabName = "", 
//     ExternalExaminer = "", 
//     InternalExaminer = "", 
//     ExamDate = "", 
//     MaxMarks = "" ,
//     Regulation=""
//   } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});
//   const [setDetails, setSetDetails] = useState({});

//   // Update the marks when the input changes
//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   // Fetch the set details from the server when setNumber or rollNumber changes
//   const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         const setData = data.sets[0];
//         if (setData) {
//           // Divide questions into Program 1 (CO1) and Program 2 (CO2)
//           const dividedQuestions = {
//             program1: setData.questions?.slice(0, setData.questions.length / 2),
//             program2: setData.questions?.slice(setData.questions.length / 2),
//             co1: setData.coNumbers?.slice(0, setData.coNumbers.length / 2),
//             co2: setData.coNumbers?.slice(setData.coNumbers.length / 2),
//           };
//           setSetDetails((prev) => ({
//             ...prev,
//             [rollNumber]: dividedQuestions,
//           }));
//         } else {
//           alert("Set number not found.");
//         }
//       } else {
//         alert("No set details found for the given set number.");
//       }
//     } catch (error) {
//       console.error("Error fetching set details:", error);
//     }
//   }, 500);

//   // Effect hook to fetch set details whenever setNumbers change
//   useEffect(() => {
//     if (Object.keys(setNumbers).length) {
//       Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
//         fetchSetDetailsDebounced(setNum, rollNumber);
//       });
//     }
//   }, [setNumbers]);

//   // Handle changes in the set number for each roll number
//   const handleSetNumberChange = (rollNumber, value) => {
//     setSetNumbers((prev) => ({ ...prev, [rollNumber]: value }));
//   };

//   // Calculate total marks for each student
//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};

//     // Parse marks or set to 0 if empty or invalid
//     const writeUp = parseInt(studentMarks.writeUp) || 0;
//     const compileErrors = parseInt(studentMarks.compileErrors) || 0;
//     const execution = parseInt(studentMarks.execution) || 0;
//     const programSyntax = parseInt(studentMarks.programSyntax) || 0;
//     const vivaVoice = parseInt(studentMarks.vivaVoice) || 0;

//     // Calculate total marks by adding all fields
//     return writeUp + compileErrors + execution + programSyntax + vivaVoice;
//   };

//   // Download PDF function
//   const downloadPDF = () => {
//     window.print();
//   };

//   // Download Excel function
//   const downloadExcel = () => {
//     const data = rollNumbers.map((rollNumber, index) => {
//       return {
//         "S. No.": index + 1,
//         "Set No.": setNumbers[rollNumber] || "",
//         "Hall Ticket": rollNumber,
//         "Program 1 Executed": setDetails[rollNumber]?.program1?.join(", ") || "-",
//         "Mapping CO 1": setDetails[rollNumber]?.co1?.join(", ") || "-",
//         "Write Up (10M)": marks[rollNumber]?.writeUp || "",
//         "Compile Errors (15M)": marks[rollNumber]?.compileErrors || "",
//         "Execution (15M)": marks[rollNumber]?.execution || "",
//         "Program 2 Executed": setDetails[rollNumber]?.program2?.join(", ") || "-",
//         "Mapping CO 2": setDetails[rollNumber]?.co2?.join(", ") || "-",
//         "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || "",
//         "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || "",
//         "Total Marks (60M)": calculateTotalMarks(rollNumber),
//       };
//     });

//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Marks Data");
//     XLSX.writeFile(wb, "marksheet.xlsx");
//   };

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <div className="max-w-6xl mx-auto bg-white ">
//         <div className="flex justify-center items-center border w-full h-23">
//           <div className="text-center border-r w-[820px] h-full">
//             <h1 className="text-2xl font-bold font-serif ">CVR COLLEGE OF ENGINEERING</h1>
//             <p className="text-lg font-semibold font-serif">An UGC Autonomous Institution Affiliated to JNTUH</p>
//             <p className="text-sm font-semibold font-serif">Vastunagar, Mangalpally (V), Ibrahimpatnam (M), Ranga Reddy District - 501510</p>
//           </div>
//           <div className="flex flex-col justify-center items-center w-[180px] h-full">
//             <h1 className="text-center text-xl font-bold font-serif">College Code</h1>
//             <h1 className="text-2xl font-bold font-serif ">B8</h1>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 mt-4">
//           <h2 className="text-lg font-bold mt-2 mb-3 text-center underline ">AWARD LIST (LABORATORY)</h2>
//           <div className="flex gap-3 w-full">
//             <div className="w-[60%]">
//               <label className=" inline text-sm font-semibold font-serif ">Name of Exam:</label>
//               <input
//                 type="text"
//                 className="text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//                 value={`  B-TECH ${Year} YEAR SEM-${Semester}`}
//                 readOnly
//               />
//             </div>
//             <div className="flex w-[40%]">
//               <label className=" inline text-sm font-semibold font-serif ">(Reg./Supp)Month:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//                 value={ExamMonth}
//                 readOnly
//               />
//               {/* <label className=" inline text-sm font-semibold ">20</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[10%] border-b focus:outline-none border-black inline-block"
//               /> */}
//             </div>
//           </div>
//           <div className="mt-3 w-full">
//             <label className=" inline text-sm font-semibold font-serif ">Branch & Section:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               value={`${Branch}-${Section}`}
//               readOnly
//             />
//             <label className="pl-2 inline text-sm font-semibold font-serif">Regulation:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[17.2%] border-b focus:outline-none border-black inline-block"
//               value={Regulation}
//               readOnly
//             />
//           </div>
//           <div className="flex mt-3 w-full">
//             <div className="w-[50%]">
//               <label className="text-sm font-semibold font-serif ">Name of Lab:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//                 value={LabName}
//                 readOnly
//               />
//             </div>
//             <div className="w-[30%]">
//               <label className="text-sm font-semibold font-serif ">Date of Examination:</label>
//               <input
//                 type="date"
//                 className="pl-2 text-sm w-[47%] border-b focus:outline-none border-black inline-block"
//                 value={ExamDate}
//                 readOnly
//               />
//             </div>
//             <div className="w-[20%]">
//               <label className="text-sm font-semibold font-serif ">Max.Marks:</label>
//               <input
//                 type="number"
//                 className="pl-2 text-sm w-[55%] border-b focus:outline-none border-black inline-block"
//                 value={MaxMarks}
//                 readOnly
//               />
//             </div>
//           </div>
//           <div className="w-full flex mt-3">
//             <label className="text-sm font-semibold font-serif ">Name & College of External Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[71.5%] border-b focus:outline-none border-black inline-block"
//               value={ExternalExaminer}
//               readOnly
//             />
//           </div>
//           <div className="flex w-full mt-3">
//             <label className="text-sm font-semibold font-serif ">Name of Internal Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[74%] border-b focus:outline-none border-black inline-block"
//               value={InternalExaminer}
//               readOnly
//             />
//           </div>
//         </div>
//         <div className="w-full mt-3">
//        <div className="flex items-start">
//     <p className="text-sm font-semibold font-serif mr-2">Note:</p>
//     <p>1) Please enter the marks in the serial order of the Hall Ticket Numbers of the students.</p>
//       </div>
//   <p className="ml-12">2) The award list must be submitted to the Controller of Examinations along with a Statement of Attendance.</p>
//      </div>



//         <div className="overflow-x-auto">
//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1 no-print">Set No.</th>
//               <th className="border border-gray-300 p-1">Hall Ticket Number</th>
//               <th className="border border-gray-300 p-1">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program 2 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 2</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1 no-print">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => handleSetNumberChange(rollNumber, e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program2?.join(", ") || "-"} {/* Program 2 Executed */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co2?.join(", ") || "-"} {/* CO Mapping 2 */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.vivaVoice || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-center mt-6">
//         <button
//           onClick={downloadPDF}
//           className="bg-blue-500 text-white p-2 rounded-md mr-4 no-print"
//         >
//           Download PDF
//         </button>
//         <button
//           onClick={downloadExcel}
//           className="bg-green-500 text-white p-2 rounded-md no-print"
//         >
//           Download Excel
//         </button>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Name;













































//-->200% success



// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import { debounce } from "lodash";
// import * as XLSX from "xlsx";
// import '../App.css';

// function Name() {
  // const location = useLocation();
  // const { 
  //   academicYear = "", 
  //   Branch = "", 
  //   Section = "", 
  //   ExamMonth = "", 
  //   Semester = "", 
  //   Year = "", 
  //   LabName = "", 
  //   ExternalExaminer = "", 
  //   InternalExaminer = "", 
  //   ExamDate = "", 
  //   MaxMarks = "" ,
  //   Regulation=""
  // } = location.state || {};

  // if (!academicYear || !Branch || !Section) {
  //   return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
  // }

  // const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
  // const [setNumbers, setSetNumbers] = useState({});
  // const [marks, setMarks] = useState({});
  // const [setDetails, setSetDetails] = useState({});

  // // Update the marks when the input changes
  // const handleMarksChange = (rollNumber, field, value) => {
  //   setMarks((prev) => ({
  //     ...prev,
  //     [rollNumber]: {
  //       ...prev[rollNumber],
  //       [field]: value,
  //     },
  //   }));
  // };

  // // Fetch the set details from the server when setNumber or rollNumber changes
  // const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     alert("You are not authenticated. Please login.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     const data = await response.json();
  //     if (response.ok) {
  //       const setData = data.sets[0];
  //       if (setData) {
  //         // Divide questions into Program 1 (CO1) and Program 2 (CO2)
  //         const dividedQuestions = {
  //           program1: setData.questions?.slice(0, setData.questions.length / 2),
  //           program2: setData.questions?.slice(setData.questions.length / 2),
  //           co1: setData.coNumbers?.slice(0, setData.coNumbers.length / 2),
  //           co2: setData.coNumbers?.slice(setData.coNumbers.length / 2),
  //         };
  //         setSetDetails((prev) => ({
  //           ...prev,
  //           [rollNumber]: dividedQuestions,
  //         }));
  //       } else {
  //         alert("Set number not found.");
  //       }
  //     } else {
  //       alert("No set details found for the given set number.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching set details:", error);
  //   }
  // }, 500);

  // // Effect hook to fetch set details whenever setNumbers change
  // useEffect(() => {
  //   if (Object.keys(setNumbers).length) {
  //     Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
  //       fetchSetDetailsDebounced(setNum, rollNumber);
  //     });
  //   }
  // }, [setNumbers]);

  // // Handle changes in the set number for each roll number
  // const handleSetNumberChange = (rollNumber, value) => {
  //   setSetNumbers((prev) => ({ ...prev, [rollNumber]: value }));
  // };

  // // Calculate total marks for each student
  // const calculateTotalMarks = (rollNumber) => {
  //   const studentMarks = marks[rollNumber] || {};

  //   // Parse marks or set to 0 if empty or invalid
  //   const writeUp = parseInt(studentMarks.writeUp) || 0;
  //   const compileErrors = parseInt(studentMarks.compileErrors) || 0;
  //   const execution = parseInt(studentMarks.execution) || 0;
  //   const programSyntax = parseInt(studentMarks.programSyntax) || 0;
  //   const vivaVoice = parseInt(studentMarks.vivaVoice) || 0;

  //   // Calculate total marks by adding all fields
  //   return writeUp + compileErrors + execution + programSyntax + vivaVoice;
  // };

  // // Download PDF function
  // const downloadPDF = () => {
  //   window.print();
  // };

  // // Download Excel function
  // const downloadExcel = () => {
  //   const data = rollNumbers.map((rollNumber, index) => {
  //     return {
  //       "S. No.": index + 1,
  //       "Set No.": setNumbers[rollNumber] || "",
  //       "Hall Ticket": rollNumber,
  //       "Program 1 Executed": setDetails[rollNumber]?.program1?.join(", ") || "-",
  //       "Mapping CO 1": setDetails[rollNumber]?.co1?.join(", ") || "-",
  //       "Write Up (10M)": marks[rollNumber]?.writeUp || "",
  //       "Compile Errors (15M)": marks[rollNumber]?.compileErrors || "",
  //       "Execution (15M)": marks[rollNumber]?.execution || "",
  //       "Program 2 Executed": setDetails[rollNumber]?.program2?.join(", ") || "-",
  //       "Mapping CO 2": setDetails[rollNumber]?.co2?.join(", ") || "-",
  //       "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || "",
  //       "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || "",
  //       "Total Marks (60M)": calculateTotalMarks(rollNumber),
  //     };
  //   });

  //   const ws = XLSX.utils.json_to_sheet(data);
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Marks Data");
  //   XLSX.writeFile(wb, "marksheet.xlsx");
  // };

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <div className="max-w-6xl mx-auto bg-white p-2">
//         <div className="flex justify-center items-center border w-full h-23">
//           <div className="text-center border-r w-[820px] h-full">
//             <h1 className="text-2xl font-bold font-serif ">CVR COLLEGE OF ENGINEERING</h1>
//             <p className="text-lg font-semibold font-serif">An UGC Autonomous Institution Affiliated to JNTUH</p>
//             <p className="text-sm font-semibold font-serif">Vastunagar, Mangalpally (V), Ibrahimpatnam (M), Ranga Reddy District - 501510</p>
//           </div>
//           <div className="flex flex-col justify-center items-center w-[180px] h-full">
//             <h1 className="text-center text-xl font-bold font-serif">College Code</h1>
//             <h1 className="text-2xl font-bold font-serif ">B8</h1>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 mt-4">
//           <h2 className="text-lg font-bold mt-2 mb-3 text-center underline ">AWARD LIST (LABORATORY)</h2>
//           <div className="flex gap-3 w-full">
//             <div className="w-[60%]">
//               <label className=" inline text-sm font-semibold font-serif ">Name of Exam:</label>
//               <input
//                 type="text"
//                 className="text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//                 value={`  B-TECH ${Year} YEAR SEM-${Semester}`}
//                 readOnly
//               />
//             </div>
//             <div className="flex w-[40%]">
//               <label className=" inline text-sm font-semibold font-serif ">(Reg./Supp)Month:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//                 value={ExamMonth}
//                 readOnly
//               />
//               {/* <label className=" inline text-sm font-semibold ">20</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[10%] border-b focus:outline-none border-black inline-block"
//               /> */}
//             </div>
//           </div>
//           <div className="mt-3 w-full">
//             <label className=" inline text-sm font-semibold font-serif ">Branch & Section:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               value={`${Branch}-${Section}`}
//               readOnly
//             />
//             <label className="pl-2 inline text-sm font-semibold font-serif">Regulation:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[17.2%] border-b focus:outline-none border-black inline-block"
//               value={Regulation}
//               readOnly
//             />
//           </div>
//           <div className="flex mt-3 w-full">
//             <div className="w-[50%]">
//               <label className="text-sm font-semibold font-serif ">Name of Lab:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//                 value={LabName}
//                 readOnly
//               />
//             </div>
//             <div className="w-[30%]">
//               <label className="text-sm font-semibold font-serif ">Date of Examination:</label>
//               <input
//                 type="date"
//                 className="pl-2 text-sm w-[47%] border-b focus:outline-none border-black inline-block"
//                 value={ExamDate}
//                 readOnly
//               />
//             </div>
//             <div className="w-[20%]">
//               <label className="text-sm font-semibold font-serif ">Max.Marks:</label>
//               <input
//                 type="number"
//                 className="pl-2 text-sm w-[55%] border-b focus:outline-none border-black inline-block"
//                 value={MaxMarks}
//                 readOnly
//               />
//             </div>
//           </div>
//           <div className="w-full flex mt-3">
//             <label className="text-sm font-semibold font-serif ">Name & College of External Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[71.5%] border-b focus:outline-none border-black inline-block"
//               value={ExternalExaminer}
//               readOnly
//             />
//           </div>
//           <div className="flex w-full mt-3">
//             <label className="text-sm font-semibold font-serif ">Name of Internal Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[74%] border-b focus:outline-none border-black inline-block"
//               value={InternalExaminer}
//               readOnly
//             />
//           </div>
//         </div>
//         <div className="w-full mt-3">
//        <div className="flex items-start">
//     <p className="text-sm font-semibold font-serif mr-2">Note:</p>
//     <p>1) Please enter the marks in the serial order of the Hall Ticket Numbers of the students.</p>
//       </div>
//   <p className="ml-12">2) The award list must be submitted to the Controller of Examinations along with a Statement of Attendance.</p>
//      </div>



//         <div className="overflow-x-auto">
//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1 no-print">Set No.</th>
//               <th className="border border-gray-300 p-1">Hall Ticket Number</th>
//               <th className="border border-gray-300 p-1">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program 2 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 2</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1 no-print">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => handleSetNumberChange(rollNumber, e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program2?.join(", ") || "-"} {/* Program 2 Executed */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co2?.join(", ") || "-"} {/* CO Mapping 2 */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.vivaVoice || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
                
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-center mt-6">
//         <button
//           onClick={downloadPDF}
//           className="bg-blue-500 text-white p-2 rounded-md mr-4 no-print"
//         >
//           Download PDF
//         </button>
//         <button
//           onClick={downloadExcel}
//           className="bg-green-500 text-white p-2 rounded-md no-print"
//         >
//           Download Excel
//         </button>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Name;

























//->paritialy working with delet function but ot with add row




// import React, { useState, useEffect } from "react";
// import { debounce } from "lodash";
// import * as XLSX from "xlsx";

// function Name() {
//   const [academicYear, setAcademicYear] = useState("2024");
//   const [Branch, setBranch] = useState("CSE");
//   const [Section, setSection] = useState("A");
//   const [rollNumbers, setRollNumbers] = useState(generateRollNumbers(academicYear, Branch, Section));
//   const [marks, setMarks] = useState({});
//   const [setNumbers, setSetNumbers] = useState({});
//   const [setDetails, setSetDetails] = useState({});
//   const [numRowsToAdd, setNumRowsToAdd] = useState(1); // Number of rows to add at once

//   // Function to generate roll numbers (assuming it's dynamic)
//   function generateRollNumbers(year, branch, section) {
//     let numbers = [];
//     for (let i = 1; i <= 30; i++) {
//       numbers.push(`R${i}`);
//     }
//     return numbers;
//   }

//   // Handler for marks change
//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prevMarks) => ({
//       ...prevMarks,
//       [rollNumber]: {
//         ...prevMarks[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   // Handler for set number change
//   const handleSetNumberChange = (rollNumber, value) => {
//     setSetNumbers((prevSetNumbers) => ({
//       ...prevSetNumbers,
//       [rollNumber]: value,
//     }));
//   };

//   // Add rows handler
//   const addRows = () => {
//     const newRollNumbers = [];
//     const newMarks = {};
//     const newSetNumbers = {};

//     // Create new roll numbers and initialize their corresponding marks and set numbers
//     for (let i = 0; i < numRowsToAdd; i++) {
//       const newRollNumber = `R${rollNumbers.length + i + 1}`; // Generate new roll number
//       newRollNumbers.push(newRollNumber);
//       newMarks[newRollNumber] = {}; // Initialize marks for new roll number
//       newSetNumbers[newRollNumber] = ""; // Initialize set number for new roll number
//     }

//     setRollNumbers((prevRollNumbers) => [...prevRollNumbers, ...newRollNumbers]);
//     setMarks((prevMarks) => ({ ...prevMarks, ...newMarks }));
//     setSetNumbers((prevSetNumbers) => ({ ...prevSetNumbers, ...newSetNumbers }));
//   };

//   // Delete row handler
//   const deleteRow = (rollNumberToDelete) => {
//     setRollNumbers((prevRollNumbers) => prevRollNumbers.filter((rollNumber) => rollNumber !== rollNumberToDelete));
//     const { [rollNumberToDelete]: _, ...remainingMarks } = marks;
//     setMarks(remainingMarks);
//     const { [rollNumberToDelete]: __, ...remainingSetNumbers } = setNumbers;
//     setSetNumbers(remainingSetNumbers);
//   };

//   // Dummy data for set details
//   const fetchSetDetails = debounce(() => {
//     const data = {};
//     rollNumbers.forEach((rollNumber) => {
//       data[rollNumber] = {
//         program1: [`Program1-${rollNumber}`],
//         co1: [`CO1-${rollNumber}`],
//         program2: [`Program2-${rollNumber}`],
//         co2: [`CO2-${rollNumber}`],
//       };
//     });
//     setSetDetails(data);
//   }, 500);

//   useEffect(() => {
//     fetchSetDetails();
//   }, [rollNumbers]);

//   // Calculate total marks
//   const calculateTotalMarks = (rollNumber) => {
//     const markData = marks[rollNumber];
//     return (
//       (parseInt(markData?.writeUp || 0) +
//         parseInt(markData?.compileErrors || 0) +
//         parseInt(markData?.execution || 0) +
//         parseInt(markData?.programSyntax || 0) +
//         parseInt(markData?.vivaVoice || 0)) || 0
//     );
//   };

//   // Download PDF function (dummy placeholder)
//   const downloadPDF = () => {
//     console.log("Download PDF clicked");
//   };

//   // Download Excel function (dummy placeholder)
//   const downloadExcel = () => {
//     console.log("Download Excel clicked");
//   };

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <div className="text-center">
//         <h1 className="text-2xl font-semibold">Marks Entry</h1>
//       </div>

//       <div className="flex justify-center mt-4">
//         <input
//           type="number"
//           min="1"
//           value={numRowsToAdd}
//           onChange={(e) => setNumRowsToAdd(Number(e.target.value))}
//           className="border border-gray-300 p-2 rounded-md mr-4 w-20"
//         />
//         <button onClick={addRows} className="bg-blue-500 text-white p-2 rounded-md">
//           Add Rows
//         </button>
//       </div>

//       <div className="overflow-x-auto mt-6">
//         <table className="w-full text-sm border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1 no-print">Set No.</th>
//               <th className="border border-gray-300 p-1">Hall Ticket Number</th>
//               <th className="border border-gray-300 p-1">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program 2 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 2</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//               <th className="border border-gray-300 p-1">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1 no-print">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => handleSetNumberChange(rollNumber, e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program2?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co2?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.vivaVoice || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <button
//                     onClick={() => deleteRow(rollNumber)}
//                     className="bg-red-500 text-white p-1 rounded-md"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-center mt-6">
//         <button onClick={downloadPDF} className="bg-blue-500 text-white p-2 rounded-md mr-4 no-print">
//           Download PDF
//         </button>
//         <button onClick={downloadExcel} className="bg-green-500 text-white p-2 rounded-md no-print">
//           Download Excel
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Name;









































//-fail



// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import { debounce } from "lodash";
// import * as XLSX from "xlsx";
// import '../App.css';
// function Name() {
//   // existing states
//   const location = useLocation();
//   const { 
//     academicYear = "", 
//     Branch = "", 
//     Section = "", 
//     ExamMonth = "", 
//     Semester = "", 
//     Year = "", 
//     LabName = "", 
//     ExternalExaminer = "", 
//     InternalExaminer = "", 
//     ExamDate = "", 
//     MaxMarks = "" ,
//     Regulation=""
//   } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});
//   const [setDetails, setSetDetails] = useState({});

//   // Update the marks when the input changes
//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   // Fetch the set details from the server when setNumber or rollNumber changes
//   const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         const setData = data.sets[0];
//         if (setData) {
//           // Divide questions into Program 1 (CO1) and Program 2 (CO2)
//           const dividedQuestions = {
//             program1: setData.questions?.slice(0, setData.questions.length / 2),
//             program2: setData.questions?.slice(setData.questions.length / 2),
//             co1: setData.coNumbers?.slice(0, setData.coNumbers.length / 2),
//             co2: setData.coNumbers?.slice(setData.coNumbers.length / 2),
//           };
//           setSetDetails((prev) => ({
//             ...prev,
//             [rollNumber]: dividedQuestions,
//           }));
//         } else {
//           alert("Set number not found.");
//         }
//       } else {
//         alert("No set details found for the given set number.");
//       }
//     } catch (error) {
//       console.error("Error fetching set details:", error);
//     }
//   }, 500);

//   // Effect hook to fetch set details whenever setNumbers change
//   useEffect(() => {
//     if (Object.keys(setNumbers).length) {
//       Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
//         fetchSetDetailsDebounced(setNum, rollNumber);
//       });
//     }
//   }, [setNumbers]);

//   // Handle changes in the set number for each roll number
//   const handleSetNumberChange = (rollNumber, value) => {
//     setSetNumbers((prev) => ({ ...prev, [rollNumber]: value }));
//   };

//   // Calculate total marks for each student
//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};

//     // Parse marks or set to 0 if empty or invalid
//     const writeUp = parseInt(studentMarks.writeUp) || 0;
//     const compileErrors = parseInt(studentMarks.compileErrors) || 0;
//     const execution = parseInt(studentMarks.execution) || 0;
//     const programSyntax = parseInt(studentMarks.programSyntax) || 0;
//     const vivaVoice = parseInt(studentMarks.vivaVoice) || 0;

//     // Calculate total marks by adding all fields
//     return writeUp + compileErrors + execution + programSyntax + vivaVoice;
//   };

//   // Download PDF function
//   const downloadPDF = () => {
//     window.print();
//   };

//   // Download Excel function
//   const downloadExcel = () => {
//     const data = rollNumbers.map((rollNumber, index) => {
//       return {
//         "S. No.": index + 1,
//         "Set No.": setNumbers[rollNumber] || "",
//         "Hall Ticket": rollNumber,
//         "Program 1 Executed": setDetails[rollNumber]?.program1?.join(", ") || "-",
//         "Mapping CO 1": setDetails[rollNumber]?.co1?.join(", ") || "-",
//         "Write Up (10M)": marks[rollNumber]?.writeUp || "",
//         "Compile Errors (15M)": marks[rollNumber]?.compileErrors || "",
//         "Execution (15M)": marks[rollNumber]?.execution || "",
//         "Program 2 Executed": setDetails[rollNumber]?.program2?.join(", ") || "-",
//         "Mapping CO 2": setDetails[rollNumber]?.co2?.join(", ") || "-",
//         "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || "",
//         "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || "",
//         "Total Marks (60M)": calculateTotalMarks(rollNumber),
//       };
//     });

//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Marks Data");
//     XLSX.writeFile(wb, "marksheet.xlsx");
//   };

  
//   // Existing code for fetching set details, marks handling, etc.
  
//   // Add row handler
//   const addRow = () => {
//     const newRollNumber = `R${rollNumbers.length + 1}`; // Assuming we want to add a new roll number in sequence.
//     setRollNumbers((prevRollNumbers) => [...prevRollNumbers, newRollNumber]);
//     setMarks((prevMarks) => ({ ...prevMarks, [newRollNumber]: {} }));
//     setSetNumbers((prevSetNumbers) => ({ ...prevSetNumbers, [newRollNumber]: "" }));
//   };

//   // Delete row handler
//   const deleteRow = (rollNumberToDelete) => {
//     setRollNumbers((prevRollNumbers) => prevRollNumbers.filter((rollNumber) => rollNumber !== rollNumberToDelete));
//     const { [rollNumberToDelete]: _, ...remainingMarks } = marks;
//     setMarks(remainingMarks);
//     const { [rollNumberToDelete]: __, ...remainingSetNumbers } = setNumbers;
//     setSetNumbers(remainingSetNumbers);
//   };

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       {/* Rest of your layout */}
      
//       {/* Buttons to add and delete rows */}
//       <div className="flex justify-center mt-4">
//         <button onClick={addRow} className="bg-blue-500 text-white p-2 rounded-md">
//           Add Row
//         </button>
//       </div>
      
//       <div className="overflow-x-auto mt-6">
//         <table className="w-full text-sm border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1 no-print">Set No.</th>
//               <th className="border border-gray-300 p-1">Hall Ticket Number</th>
//               <th className="border border-gray-300 p-1">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program 2 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 2</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//               <th className="border border-gray-300 p-1">Action</th> {/* Added Action Column */}
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1 no-print">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => handleSetNumberChange(rollNumber, e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program2?.join(", ") || "-"} {/* Program 2 Executed */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co2?.join(", ") || "-"} {/* CO Mapping 2 */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.vivaVoice || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <button
//                     onClick={() => deleteRow(rollNumber)}
//                     className="bg-red-500 text-white p-1 rounded-md"
//                   >
//                     Delete
//                   </button>
//                 </td> {/* Delete button */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-center mt-6">
//         <button onClick={downloadPDF} className="bg-blue-500 text-white p-2 rounded-md mr-4 no-print">
//           Download PDF
//         </button>
//         <button onClick={downloadExcel} className="bg-green-500 text-white p-2 rounded-md no-print">
//           Download Excel
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Name;
















//->success delete and add button




// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import { debounce } from "lodash";
// import * as XLSX from "xlsx";
// import '../App.css';

// function Name() {
//   const location = useLocation();
//   const { academicYear = "", Branch = "", Section = "" } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const initialRollNumbers = generateRollNumbers(academicYear, Branch, Section);
//   const [rollNumbers, setRollNumbers] = useState(initialRollNumbers);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});
//   const [setDetails, setSetDetails] = useState({});
  
//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   const handleSetNumberChange = (rollNumber, value) => {
//     setSetNumbers((prev) => ({ ...prev, [rollNumber]: value }));
//   };

//   const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
//         { method: "GET", headers: { Authorization: `Bearer ${token}` } }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         setSetDetails((prev) => ({ ...prev, [rollNumber]: data.sets[0] || {} }));
//       } else {
//         alert("No set details found for the given set number.");
//       }
//     } catch (error) {
//       console.error("Error fetching set details:", error);
//     }
//   }, 500);

//   useEffect(() => {
//     Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
//       fetchSetDetailsDebounced(setNum, rollNumber);
//     });
//   }, [setNumbers]);

//   const addRow = () => {
//     setRollNumbers((prevRollNumbers) => [...prevRollNumbers, ""]);
//   };

//   const deleteRow = (index) => {
//     setRollNumbers((prevRollNumbers) => prevRollNumbers.filter((_, i) => i !== index));
//   };

//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};
//     return (
//       (parseInt(studentMarks.writeUp) || 0) +
//       (parseInt(studentMarks.compileErrors) || 0) +
//       (parseInt(studentMarks.execution) || 0) +
//       (parseInt(studentMarks.programSyntax) || 0) +
//       (parseInt(studentMarks.vivaVoice) || 0)
//     );
//   };

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <div className="flex justify-center mt-4">
//         <button onClick={addRow} className="bg-blue-500 text-white p-2 rounded-md">Add Row</button>
//       </div>
//       <div className="overflow-x-auto mt-6">
//         <table className="w-full text-sm border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1">Roll Number</th>
//               <th className="border border-gray-300 p-1">Set No.</th>
//               <th className="border border-gray-300 p-1">Total Marks</th>
//               <th className="border border-gray-300 p-1">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="text"
//                     className="w-full border-none outline-none text-sm"
//                     value={rollNumber}
//                     onChange={(e) => {
//                       const newRollNumbers = [...rollNumbers];
//                       newRollNumbers[index] = e.target.value;
//                       setRollNumbers(newRollNumbers);
//                     }}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => handleSetNumberChange(rollNumber, e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{calculateTotalMarks(rollNumber)}</td>
//                 <td className="border border-gray-300 p-1">
//                   <button onClick={() => deleteRow(index)} className="bg-red-500 text-white p-1 rounded-md">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Name;


























import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { generateRollNumbers } from "./rollNumberHelper";
import { debounce } from "lodash";
import * as XLSX from "xlsx";
import '../App.css';

function Name() {
  const location = useLocation();
  const {
    academicYear = "",
    Branch = "",
    Section = "",
    ExamMonth = "",
    Semester = "",
    Year = "",
    LabName = "",
    ExternalExaminer = "",
    InternalExaminer = "",
    ExamDate = "",
    MaxMarks = "",
    Regulation = ""
  } = location.state || {};

  if (!academicYear || !Branch || !Section) {
    return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
  }

  const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
  const [rows, setRows] = useState(rollNumbers.map((rollNumber) => ({ rollNumber })));
  const [newRollNumber, setNewRollNumber] = useState("");

  const addRow = () => {
    if (newRollNumber) {
      setRows([...rows, { rollNumber: newRollNumber }]);
      setNewRollNumber("");
    }
  };

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white p-4">
        <h2 className="text-lg font-bold text-center underline">AWARD LIST (LABORATORY)</h2>
        <div className="mb-4">
          <input
            type="text"
            value={newRollNumber}
            onChange={(e) => setNewRollNumber(e.target.value)}
            placeholder="Enter Roll Number"
            className="border p-2"
          />
          <button onClick={addRow} className="btn btn-primary ml-2">Add Row</button>
        </div>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Roll Number</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{row.rollNumber}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => deleteRow(index)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Name;




























//->pariatlly success


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import { debounce } from "lodash";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import * as XLSX from "xlsx";

// function Name() {
//   const location = useLocation();
//   const { academicYear = "", Branch = "", Section = "" } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});
//   const [setDetails, setSetDetails] = useState({});

//   // Update the marks when the input changes
//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   // Fetch the set details from the server when setNumber or rollNumber changes
//   const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();
//       //console.log(data); // Debugging the data structure
//       if (response.ok) {
//         const setData = data.sets[0];  // Accessing the first object in the sets array
//         if (setData) {
//           // Divide questions into Program 1 (CO1) and Program 2 (CO2)
//           const dividedQuestions = {
//             program1: setData.questions?.slice(0, setData.questions.length / 2),
//             program2: setData.questions?.slice(setData.questions.length / 2),
//             co1: setData.coNumbers?.slice(0, setData.coNumbers.length / 2),
//             co2: setData.coNumbers?.slice(setData.coNumbers.length / 2),
//           };
//           setSetDetails((prev) => ({
//             ...prev,
//             [rollNumber]: dividedQuestions,
//           }));
//         } else {
//           alert("Set number not found.");
//         }
//       } else {
//         alert("No set details found for the given set number.");
//       }
//     } catch (error) {
//       console.error("Error fetching set details:", error);
//     }
//   }, 500);

//   // Effect hook to fetch set details whenever setNumbers change
//   useEffect(() => {
//     if (Object.keys(setNumbers).length) {
//       Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
//         fetchSetDetailsDebounced(setNum, rollNumber);
//       });
//     }
//   }, [setNumbers]);

//   // Handle changes in the set number for each roll number
//   const handleSetNumberChange = (rollNumber, value) => {
//     setSetNumbers((prev) => ({ ...prev, [rollNumber]: value }));
//   };

//   // Calculate total marks for each student
//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};

//     // Parse marks or set to 0 if empty or invalid
//     const writeUp = parseInt(studentMarks.writeUp) || 0;
//     const compileErrors = parseInt(studentMarks.compileErrors) || 0;
//     const execution = parseInt(studentMarks.execution) || 0;
//     const programSyntax = parseInt(studentMarks.programSyntax) || 0;
//     const vivaVoice = parseInt(studentMarks.vivaVoice) || 0;

//     // Calculate total marks by adding all fields
//     return writeUp + compileErrors + execution + programSyntax + vivaVoice;
//   };

//   // Download PDF function
//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     // Set table headers
//     const headers = [
//       ["S. No.", "Set No.", "Hall Ticket", "Program 1 Executed", "Mapping CO 1", "Write Up (10M)", "Compile Errors (15M)", "Execution (15M)", "Program 2 Executed", "Mapping CO 2", "Program & Syntax (10M)", "Viva-Voice (10M)", "Total Marks (60M)"],
//     ];

//     // Format data for the table
//     const data = rollNumbers.map((rollNumber, index) => {
//       return [
//         index + 1,
//         setNumbers[rollNumber] || "",
//         rollNumber,
//         setDetails[rollNumber]?.program1?.join(", ") || "-",
//         setDetails[rollNumber]?.co1?.join(", ") || "-",
//         marks[rollNumber]?.writeUp || "",
//         marks[rollNumber]?.compileErrors || "",
//         marks[rollNumber]?.execution || "",
//         setDetails[rollNumber]?.program2?.join(", ") || "-",
//         setDetails[rollNumber]?.co2?.join(", ") || "-",
//         marks[rollNumber]?.programSyntax || "",
//         marks[rollNumber]?.vivaVoice || "",
//         calculateTotalMarks(rollNumber),
//       ];
//     });

//     // Add the table to the PDF
//     doc.autoTable({
//       head: headers,
//       body: data,
//     });

//     // Save the PDF
//     doc.save("marksheet.pdf");
//   };

//   // Download Excel function
//   const downloadExcel = () => {
//     const data = rollNumbers.map((rollNumber, index) => {
//       return {
//         "S. No.": index + 1,
//         "Set No.": setNumbers[rollNumber] || "",
//         "Hall Ticket": rollNumber,
//         "Program 1 Executed": setDetails[rollNumber]?.program1?.join(", ") || "-",
//         "Mapping CO 1": setDetails[rollNumber]?.co1?.join(", ") || "-",
//         "Write Up (10M)": marks[rollNumber]?.writeUp || "",
//         "Compile Errors (15M)": marks[rollNumber]?.compileErrors || "",
//         "Execution (15M)": marks[rollNumber]?.execution || "",
//         "Program 2 Executed": setDetails[rollNumber]?.program2?.join(", ") || "-",
//         "Mapping CO 2": setDetails[rollNumber]?.co2?.join(", ") || "-",
//         "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || "",
//         "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || "",
//         "Total Marks (60M)": calculateTotalMarks(rollNumber),
//       };
//     });

//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Marks Data");
//     XLSX.writeFile(wb, "marksheet.xlsx");
//   };

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <div id="content-to-download" className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md border">
//         <div className="flex justify-center items-center border w-full h-23">
//           <div className="text-center border-r w-[820px] h-full">
//             <h1 className="text-2xl font-bold font-serif ">CVR COLLEGE OF ENGINEERING</h1>
//             <p className="text-lg font-semibold font-serif">An UGC Autonomous Institution Affiliated to JNTUH</p>
//             <p className="text-sm font-semibold font-serif">Vastunagar, Mangalpally (V), Ibrahimpatnam (M), Ranga Reddy District - 501510</p>
//           </div>
//           <div className="flex flex-col justify-center items-center w-[180px] h-full">
//             <h1 className="text-center text-xl font-bold font-serif ">College Code</h1>
//             <h1 className="text-2xl font-bold font-serif ">B8</h1>
//           </div>
//         </div>

//         {/* Other form inputs */}
//         <div className="flex flex-col gap-2 mt-4">
//           <h2 className="text-lg font-bold mt-2 mb-3 text-center underline ">AWARD LIST (LABORATORY)</h2>
//           <div className="flex gap-3 w-full">
//             <div className="w-[60%]">
//               <label className=" inline text-sm font-semibold font-serif ">Name of Exam:</label>
//               <input
//                 type="text"
//                 className="text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="flex w-[40%]  ">
//               <label className=" inline text-sm font-semibold font-serif ">(Reg./Supp)Month:</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               />
//               <label className=" inline text-sm font-semibold ">20</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[10%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className="mt-3 w-full">
//             <label className=" inline text-sm font-semibold font-serif ">Branch & Section:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               value={`${Branch}-${Section}`}
//               // onChange={(e) => setSection(e.target.value)}
//             />
//             <label className=" pl-2 inline text-sm font-semibold font-serif  ">Regulation:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[17.2%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex mt-3  w-full">
//             <div className="w-[50%]">
//               <label className="text-sm font-semibold font-serif ">Name of Lab:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[30%]">
//               <label className="text-sm font-semibold font-serif ">Date of Examination:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[47%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[20%]">
//               <label className="text-sm font-semibold font-serif ">Max.Marks:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[55%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className=" w-full flex mt-3 ">
//             <label className="text-sm font-semibold font-serif ">Name & College of External Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[71.5%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex w-full mt-3">
//             <label className="text-sm font-semibold font-serif ">Name of Internal Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[79%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//         </div>
//       {/* </div> */}



      

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1">Set No.</th>
//               <th className="border border-gray-300 p-1">Hall Ticket</th>
//               <th className="border border-gray-300 p-1">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 1</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program 2 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 2</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => handleSetNumberChange(rollNumber, e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program2?.join(", ") || "-"} {/* Program 2 Executed */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co2?.join(", ") || "-"} {/* CO Mapping 2 */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.vivaVoice || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-center mt-6">
//         <button
//           onClick={downloadPDF}
//           className="bg-blue-500 text-white p-2 rounded-md mr-4"
//         >
//           Download PDF
//         </button>
//         <button
//           onClick={downloadExcel}
//           className="bg-green-500 text-white p-2 rounded-md"
//         >
//           Download Excel
//         </button>
//       </div>
//     </div>
//   </div>
//   );
// }

// export default Name;
























































































//-->partrial sucesses













// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import { debounce } from "lodash";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import * as XLSX from "xlsx";


// import html2canvas from "html2canvas";


// function Name() {
//   const location = useLocation();
//   const { academicYear = "", Branch = "", Section = "" } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});
//   const [setDetails, setSetDetails] = useState({});

//   // Update the marks when the input changes
//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   // Fetch the set details from the server when setNumber or rollNumber changes
//   const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();
//       //console.log(data); // Debugging the data structure
//       if (response.ok) {
//         const setData = data.sets[0];  // Accessing the first object in the sets array
//         if (setData) {
//           // Divide questions into Program 1 (CO1) and Program 2 (CO2)
//           const dividedQuestions = {
//             program1: setData.questions?.slice(0, setData.questions.length / 2),
//             program2: setData.questions?.slice(setData.questions.length / 2),
//             co1: setData.coNumbers?.slice(0, setData.coNumbers.length / 2),
//             co2: setData.coNumbers?.slice(setData.coNumbers.length / 2),
//           };
//           setSetDetails((prev) => ({
//             ...prev,
//             [rollNumber]: dividedQuestions,
//           }));
//         } else {
//           alert("Set number not found.");
//         }
//       } else {
//         alert("No set details found for the given set number.");
//       }
//     } catch (error) {
//       console.error("Error fetching set details:", error);
//     }
//   }, 500);

//   // Effect hook to fetch set details whenever setNumbers change
//   useEffect(() => {
//     if (Object.keys(setNumbers).length) {
//       Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
//         fetchSetDetailsDebounced(setNum, rollNumber);
//       });
//     }
//   }, [setNumbers]);

//   // Handle changes in the set number for each roll number
//   const handleSetNumberChange = (rollNumber, value) => {
//     setSetNumbers((prev) => ({ ...prev, [rollNumber]: value }));
//   };

//   // Calculate total marks for each student
//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};

//     // Parse marks or set to 0 if empty or invalid
//     const writeUp = parseInt(studentMarks.writeUp) || 0;
//     const compileErrors = parseInt(studentMarks.compileErrors) || 0;
//     const execution = parseInt(studentMarks.execution) || 0;
//     const programSyntax = parseInt(studentMarks.programSyntax) || 0;
//     const vivaVoice = parseInt(studentMarks.vivaVoice) || 0;

//     // Calculate total marks by adding all fields
//     return writeUp + compileErrors + execution + programSyntax + vivaVoice;
//   };

//   // Download PDF function
//   // const downloadPDF = () => {
//   //   const doc = new jsPDF();

//   //   // Set table headers
//   //   const headers = [
//   //     ["S. No.", "Set No.", "Hall Ticket", "Program 1 Executed", "Mapping CO 1", "Write Up (10M)", "Compile Errors (15M)", "Execution (15M)", "Program 2 Executed", "Mapping CO 2", "Program & Syntax (10M)", "Viva-Voice (10M)", "Total Marks (60M)"],
//   //   ];

//   //   // Format data for the table
//   //   const data = rollNumbers.map((rollNumber, index) => {
//   //     return [
//   //       index + 1,
//   //       setNumbers[rollNumber] || "",
//   //       rollNumber,
//   //       setDetails[rollNumber]?.program1?.join(", ") || "-",
//   //       setDetails[rollNumber]?.co1?.join(", ") || "-",
//   //       marks[rollNumber]?.writeUp || "",
//   //       marks[rollNumber]?.compileErrors || "",
//   //       marks[rollNumber]?.execution || "",
//   //       setDetails[rollNumber]?.program2?.join(", ") || "-",
//   //       setDetails[rollNumber]?.co2?.join(", ") || "-",
//   //       marks[rollNumber]?.programSyntax || "",
//   //       marks[rollNumber]?.vivaVoice || "",
//   //       calculateTotalMarks(rollNumber),
//   //     ];
//   //   });

//   //   // Add the table to the PDF
//   //   doc.autoTable({
//   //     head: headers,
//   //     body: data,
//   //   });

//   //   // Save the PDF
//   //   doc.save("marksheet.pdf");
//   // };





//   // const downloadPDF = () => {
//   //   // Select the element that you want to export
//   //   const content = document.getElementById('content-to-export'); 
  
//   //   // Use html2canvas to capture the element as a canvas
//   //   html2canvas(content, { 
//   //     useCORS: true, // For cross-origin images
//   //     scale: 2, // You can adjust this for better resolution
//   //   }).then((canvas) => {
//   //     // Create a new jsPDF instance
//   //     const doc = new jsPDF();
  
//   //     // Add the image from the canvas to the PDF
//   //     const imgData = canvas.toDataURL('image/png');
//   //     doc.addImage(imgData, 'PNG', 10, 10, 180, 0); // Adjust positioning and size as needed
  
//   //     // Save the PDF
//   //     doc.save("marksheet.pdf");
//   //   }).catch((error) => {
//   //     console.error("Error capturing content:", error);
//   //   });
//   // };
  
//   // const handlePrint = () => {
//   //       window.print();
//   //     };
  



//   const handlePrint = () => {
//     // Store the original body content
//     const originalBody = document.body.innerHTML;
  
//     // Extract the content of the main div you want to print
//     const printContent = document.querySelector('.main-content').innerHTML;
  
//     // Modify the body for printing (adding the timestamp at the top)
//     document.body.innerHTML = `
//       <div class="print-container">
//         <div>
//           ${printContent}
//         </div>
//       </div>
//     `;
  
//     // Open the print dialog
//     window.print();
  
//     // Restore the original body content after printing
//     document.body.innerHTML = originalBody;
//   };


//   // Download Excel function
//   const downloadExcel = () => {
//     const data = rollNumbers.map((rollNumber, index) => {
//       return {
//         "S. No.": index + 1,
//         "Set No.": setNumbers[rollNumber] || "",
//         "Hall Ticket": rollNumber,
//         "Program 1 Executed": setDetails[rollNumber]?.program1?.join(", ") || "-",
//         "Mapping CO 1": setDetails[rollNumber]?.co1?.join(", ") || "-",
//         "Write Up (10M)": marks[rollNumber]?.writeUp || "",
//         "Compile Errors (15M)": marks[rollNumber]?.compileErrors || "",
//         "Execution (15M)": marks[rollNumber]?.execution || "",
//         "Program 2 Executed": setDetails[rollNumber]?.program2?.join(", ") || "-",
//         "Mapping CO 2": setDetails[rollNumber]?.co2?.join(", ") || "-",
//         "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || "",
//         "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || "",
//         "Total Marks (60M)": calculateTotalMarks(rollNumber),
//       };
//     });

//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Marks Data");
//     XLSX.writeFile(wb, "marksheet.xlsx");
//   };

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <div  className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow-md border main-content">
//         <div className="flex justify-center items-center border w-full h-23">
//           <div className="text-center border-r w-[820px] h-full">
//             <h1 className="text-2xl font-bold font-serif ">CVR COLLEGE OF ENGINEERING</h1>
//             <p className="text-lg font-semibold font-serif">An UGC Autonomous Institution Affiliated to JNTUH</p>
//             <p className="text-sm font-semibold font-serif">Vastunagar, Mangalpally (V), Ibrahimpatnam (M), Ranga Reddy District - 501510</p>
//           </div>
//           <div className="flex flex-col justify-center items-center w-[180px] h-full">
//             <h1 className="text-center text-xl font-bold font-serif ">College Code</h1>
//             <h1 className="text-2xl font-bold font-serif ">B8</h1>
//           </div>
//         </div>

//         {/* Other form inputs */}
//         <div className="flex flex-col gap-2 mt-4">
//           <h2 className="text-lg font-bold mt-2 mb-3 text-center underline ">AWARD LIST (LABORATORY)</h2>
//           <div className="flex gap-3 w-full">
//             <div className="w-[60%]">
//               <label className=" inline text-sm font-semibold font-serif ">Name of Exam:</label>
//               <input
//                 type="text"
//                 className="text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="flex w-[40%]  ">
//               <label className=" inline text-sm font-semibold font-serif ">(Reg./Supp)Month:</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               />
//               <label className=" inline text-sm font-semibold ">20</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[10%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className="mt-3 w-full">
//             <label className=" inline text-sm font-semibold font-serif ">Branch & Section:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               value={`${Branch}-${Section}`}
//               // onChange={(e) => setSection(e.target.value)}
//             />
//             <label className=" pl-2 inline text-sm font-semibold font-serif  ">Regulation:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[17.2%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex mt-3  w-full">
//             <div className="w-[50%]">
//               <label className="text-sm font-semibold font-serif ">Name of Lab:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[30%]">
//               <label className="text-sm font-semibold font-serif ">Date of Examination:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[47%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[20%]">
//               <label className="text-sm font-semibold font-serif ">Max.Marks:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[55%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className=" w-full flex mt-3 ">
//             <label className="text-sm font-semibold font-serif ">Name & College of External Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[71.5%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex w-full mt-3">
//             <label className="text-sm font-semibold font-serif ">Name of Internal Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[79%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//         </div>
//       {/* </div> */}



      

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1">Set No.</th>
//               <th className="border border-gray-300 p-1">Hall Ticket</th>
//               <th className="border border-gray-300 p-1">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 1</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program 2 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 2</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => handleSetNumberChange(rollNumber, e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program2?.join(", ") || "-"} {/* Program 2 Executed */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co2?.join(", ") || "-"} {/* CO Mapping 2 */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.vivaVoice || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* <div className="flex justify-center mt-6">
//         <button
//           onClick={handlePrint}
//           className="bg-blue-500 text-white p-2 rounded-md mr-4"
//         >
//           Download PDF
//         </button>
//         <button
//           onClick={downloadExcel}
//           className="bg-green-500 text-white p-2 rounded-md"
//         >
//           Download Excel
//         </button>
//       </div> */}
//     </div>
//     <div className="flex justify-center mt-6">
//         <button
//           onClick={handlePrint}
//           className="bg-blue-500 text-white p-2 rounded-md mr-4"
//         >
//           Download PDF
//         </button>
//         <button
//           onClick={downloadExcel}
//           className="bg-green-500 text-white p-2 rounded-md"
//         >
//           Download Excel
//         </button>
//       </div>
//   </div>
  
//   );
// }

// export default Name;