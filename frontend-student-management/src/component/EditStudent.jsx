import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:8080/students";

function EditStudent() {
    const [student, setStudent] = useState({ name: "", studentAge: "", studentClass: "", phoneNumber: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then((res) => setStudent(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${API_URL}/${id}`, student);
    navigate("/");
  };
  return (
    <div className="container mt-4">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" placeholder="Name" value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} required />
        <input type="text" className="form-control mb-2" placeholder="studentAge" value={student.studentAge} onChange={(e) => setStudent({ ...student, studentAge: e.target.value })} required />
        <input type="text" className="form-control mb-2" placeholder="studentClass" value={student.studentClass} onChange={(e) => setStudent({ ...student, studentClass: e.target.value })} required />
        <input type="number" className="form-control mb-2" placeholder="phoneNumber" value={student.phoneNumber} onChange={(e) => setStudent({ ...student, phoneNumber: e.target.value })} required />
        <button type="submit" className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default EditStudent