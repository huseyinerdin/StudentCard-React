import React from "react";

const StudentCard = ({ studentList }) => {
  return (
    <div className="student-card-container">
      {studentList.map((student, i) => (
        <div
          key={`${Date.now()}${Math.floor(Math.random() * 100)}`}
          className="student-card"
        >
          <ul>
            <li>
              <span>Name</span>
              <hr />
              {student.name}
            </li>
            <li>
              <span>LastName</span>
              <hr />
              {student.lastName}
            </li>
            <li>
              <span>Instructor</span>
              <hr />
              {student.instructorName}
            </li>
            <li>
              <span>Course</span>
              <hr />
              {student.courseName}
            </li>
            <li>
              <span>Score</span>
              <hr />
              {student.score}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
