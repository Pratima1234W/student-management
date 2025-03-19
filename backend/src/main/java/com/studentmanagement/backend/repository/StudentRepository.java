package com.studentmanagement.backend.repository;

import com.studentmanagement.backend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{
    List<Student> findByNameContainingIgnoreCase(String name);
}
