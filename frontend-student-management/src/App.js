import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar";
import StudentList from './component/StudentList';
import AddStudent from "./component/AddStudent";
import EditStudent from "./component/EditStudent";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentList />}></Route>
        <Route path="/add" element={<AddStudent />}></Route>
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
