package com.studentmanagement.backend.service;

import com.studentmanagement.backend.entity.Student;
import com.studentmanagement.backend.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    public Student addStudent(Student student){
        return studentRepository.save(student);
    }

    public Student updateStudent(Long id, Student studentDetails){
        Student student = studentRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Student Not Found"));
        student.setName(studentDetails.getName());
        student.setStudentAge(studentDetails.getStudentAge());
        student.setStudentClass(studentDetails.getStudentClass());
        student.setPhoneNumber(student.getPhoneNumber());
        return studentRepository.save(student);
    }

    public void deleteStudent(Long id){
        studentRepository.deleteById(id);
    }

    public Student getStudentById(Long id){
        return studentRepository.findById(id).orElse(null);
    }

    public List<Student> searchByName(String name){
        return studentRepository.findByNameContainingIgnoreCase(name);
    }
}
