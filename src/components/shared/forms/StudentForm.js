import React, { useState } from "react";

const StudentForm = (props) => {
  //UseStates
  const [student, setStudent] = useState({
    name: "",
    lastName: "",
    instructorName: "",
    courseName: "",
    score: "",
  });
  const [error, setError] = useState({
    nameError: false,
    lastNameError: false,
    instructorNameError: false,
    courseNameError: false,
    scoreError: false,
  });

  //Clear Functions
  const errorClear = () => {
    setError({
      nameError: false,
      lastNameError: false,
      instructorNameError: false,
      courseNameError: false,
      scoreError: false,
    });
  };
  const studentFormClear = () => {
    setStudent({
      name: "",
      lastName: "",
      instructorName: "",
      courseName: "",
      score: "",
    });
  };
  //Error Control Funtion
  const errorControl = () => {
    student.name.trim().length > 1 ||
      setError((prevErr) => ({ ...prevErr, nameError: true }));
    student.lastName.trim().length > 1 ||
      setError((prevErr) => ({ ...prevErr, lastNameError: true }));
    student.instructorName.trim().length > 1 ||
      setError((prevErr) => ({ ...prevErr, instructorNameError: true }));
    student.courseName.trim() ||
      setError((prevErr) => ({ ...prevErr, courseNameError: true }));
    (student.score <= 100 && student.score >= 0 && student.score) ||
      setError((prevErr) => ({ ...prevErr, scoreError: true }));
  };

  //Functions
  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const createStudentCard = () => {
    errorClear();
    if (
      student.name.trim().length > 1 &&
      student.lastName.trim().length > 1 &&
      student.instructorName.trim().length > 1 &&
      student.courseName.trim() &&
      student.score <= 100 &&
      student.score >= 0 &&
      student.score
    ) {
      props.AddStudent(student);
      studentFormClear();
    } else {
      errorControl();
    }
  };

  return (
    <form className="input-student-control">
      <input
        type="text"
        name="name"
        maxLength="25"
        placeholder="Please enter Name..."
        value={student.name}
        onChange={handleChange}
      />
      {error.nameError && <h6>*Student name must be greater than 2!</h6>}
      <input
        type="text"
        name="lastName"
        maxLength="25"
        placeholder="Please enter LastName..."
        value={student.lastName}
        onChange={handleChange}
      />
      {error.lastNameError && (
        <h6>*Student LastName must be greater than 2!</h6>
      )}
      <input
        type="text"
        name="instructorName"
        maxLength="25"
        placeholder="Please enter instructor name..."
        value={student.instructorName}
        onChange={handleChange}
      />
      {error.instructorNameError && (
        <h6>*Instructor name must be greater than 2!</h6>
      )}
      <input
        type="text"
        name="courseName"
        maxLength="25"
        placeholder="Please enter course name..."
        value={student.courseName}
        onChange={handleChange}
      />
      {error.courseNameError && <h6>*Course name must be filled!</h6>}
      <input
        type="number"
        min="0"
        max="100"
        name="score"
        placeholder="Please enter score..."
        value={student.score}
        onChange={handleChange}
      />
      {error.scoreError && <h6>*Score must be between 0-100</h6>}
      <button
        onClick={(event) => {
          event.preventDefault();
          createStudentCard();
        }}
      >
        Create Student Card
      </button>
    </form>
  );
};

export default StudentForm;
