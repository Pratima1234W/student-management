import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const API_URL = "http://localhost:8080/students";


function AddStudent() {
    const { id } = useParams();  
    const [student, setStudent] = useState({ name: "", studentAge: "", studentClass: "", phoneNumber: "" });
    const navigate = useNavigate();
    

    useEffect(() => {
        if (id) {  // Fetch student data if editing
          axios.get(`${API_URL}/${id}`)
            .then((res) => setStudent(res.data))
            .catch(error => console.error("Error fetching student data:", error));
        }
      }, [id]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!student.name || !student.studentAge || !student.studentClass || !student.phoneNumber) {
          alert("All fields are required!");
          return;
        }
        console.log("Submitting student:", student);
        try {
          if (id) {
            await axios.put(`${API_URL}/${id}`, student);  // Update if id exists
          } else {
            await axios.post(`${API_URL}/addStudent`, student);  // Add new student
          }
          navigate("/");
        } catch (error) {
          console.error("Error saving student data:", error);
        }
      };

      console.log("student",student);
    
    

  return (
    <div className="container mt-4">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" placeholder="Name" value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} required />
        <input type="text" className="form-control mb-2" placeholder="Student Age" value={student.studentAge} onChange={(e) => setStudent({ ...student, studentAge: e.target.value })} required />
        <input type="text" className="form-control mb-2" placeholder="Student Class" value={student.studentClass} onChange={(e) => setStudent({ ...student, studentClass: e.target.value })} required />
        <input type="number" className="form-control mb-2" placeholder="phoneNumber" value={student.phoneNumber} onChange={(e) => setStudent({ ...student, phoneNumber: e.target.value })} required />
        <button type="submit" className="btn btn-success">Save</button>
      </form>
        
    </div>
  )
}

export default AddStudent