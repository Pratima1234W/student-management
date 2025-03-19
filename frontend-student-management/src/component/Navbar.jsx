import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Navbar() {
  const path = useLocation(); 

  const exactPath = path.pathname.split('/')[1];
  
  

  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    </ul>
    <div class="d-flex">
      {(exactPath === 'add' || exactPath === 'edit') && (<Link class="btn btn-outline-success" to="/">Back</Link>)}
      {(exactPath !== 'add' && exactPath !== 'edit') && (<Link class="btn btn-outline-success" to="/add">Add Student</Link>)}
    </div>
  </div>
</div>
</nav>
  );
};
export default Navbar