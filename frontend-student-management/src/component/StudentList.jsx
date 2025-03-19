import React, { useEffect, useState } from 'react'
import SearchStudent from './SearchStudent'
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:8080/students";

const StudentList =(setSearch)=>{
  const[students, setStudents] = useState([]);
  const[search, ] = useState("");

  useEffect(() =>{
    fetchStudents();
  }, []);

  const fetchStudents = async () =>{
    const response = await axios.get(API_URL)
    setStudents(response.data)
  };

  const deleteStudent = async (id) =>{
    await axios.delete(`${API_URL}/${id}`);
    fetchStudents();
  };

  return (
    <div className='container mt-4'>
      <SearchStudent search={search} setSearch={setSearch} />
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students
          .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
          .map((student) =>(
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.studentAge}</td>
              <td>{student.studentClass}</td>
              <td>{student.phoneNumber}</td>
              <td>
                <Link to={`edit/${student.id}`} className=" btn btn-warning btn-sm">Edit</Link>
                <button onClick={() => deleteStudent(student.id)} className='btn btn-danger btn-sm ms-2'>Delete</button>
              </td>
            </tr>
          )
          )}
        </tbody>
      </table>
      
    </div>
  );
};

export default StudentList