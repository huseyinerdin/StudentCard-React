import "./App.scss";
import { useState } from "react";
import Header from "./components/shared/header/Header";
import StudentForm from "./components/shared/forms/StudentForm";
import StudentCard from "./components/shared/output/StudentCard";

function App() {
  const [students, setStudents] = useState([]);
  return (
    <div className="app">
      <Header />
      <StudentForm
        AddStudent={(student) => {
          setStudents((prevSt) => [...prevSt, student]);
        }}
      />
      <hr className="bracket"/>
      <StudentCard studentList={students} />
    </div>
  );
}
export default App;
