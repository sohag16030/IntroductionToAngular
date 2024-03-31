package com.example.EMS;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmsController {

    @Autowired
    private EmsService employeeService;

    // Create
    @PostMapping("/emsUsers")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        Employee savedEmployee = employeeService.createEmployee(employee);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // Read all
    @GetMapping("/emsUsers")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    // Read by ID
    @GetMapping("/emsUsers/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long userId) {
        Employee employee = employeeService.getEmployeeById(userId);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    // Update
    @PutMapping("/emsUsers/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long userId, @RequestBody Employee employeeDetails) {
        Employee updatedEmployee = employeeService.updateEmployee(userId, employeeDetails);
        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
    }

    // Delete
    @DeleteMapping("/emsUsers/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable("id") Long userId) {
        employeeService.deleteEmployee(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
