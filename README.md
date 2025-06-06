# Student Exam Roll Number and CO Mapping System

A web application built using **React.js**, **Node.js**, **Express.js**, **MongoDB**, and **Tailwind CSS** that streamlines the management of student roll numbers and Course Outcome (CO) mapping for academic evaluations.

## Features

 **Auto Roll Number Generation:**  
  Automatically populates student roll numbers based on the selected section, reducing manual input and saving time for educators.

**CO Mapping System:**  
  Allows teachers to map Course Outcomes (COs) to individual exam questions, supporting structured and outcome-based evaluation.

**Secure Authentication:**  
  Implements JSON Web Token (JWT) authentication to ensure secure and controlled access to sensitive academic records.

**Report Generation:**  
  Generates downloadable **PDF** and **Excel** reports with automatic total marks calculation.

**Efficient Data Management:**  
  Uses **MongoDB** to store and manage student, marks, and CO mapping data, ensuring fast access and scalability.


##  Tech Stack

**Frontend:** React.js, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Authentication:** JWT  

## Security

- Authentication is handled using **JWT** for secure login and access control.  
- Sensitive student academic records are protected using proper **access roles** and **encryption mechanisms**.

## Future Improvements

- Add user role-based dashboards (Admin, Teacher, Student)  
- Visual analytics for performance per CO  
- Import students via CSV  
- CO attainment calculation  
