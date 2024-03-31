package com.example.EMS;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
@Service
public class EmsService {

    @Autowired
    private EmsRepository employeeRepository;

    // Create
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // Read all
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Read by ID
    public Employee getEmployeeById(Long userId) {
        Optional<Employee> employeeOptional = employeeRepository.findById(userId);
        return employeeOptional.orElse(null);
    }

    // Update
    public Employee updateEmployee(Long userId, Employee employeeDetails) {
        Employee existingEmployee = getEmployeeById(userId);
        if (existingEmployee != null) {
            existingEmployee.setName(employeeDetails.getName());
            existingEmployee.setMobileNumber(employeeDetails.getMobileNumber());
            existingEmployee.setEmail(employeeDetails.getEmail());
            existingEmployee.setIsActive(employeeDetails.getIsActive());
            return employeeRepository.save(existingEmployee);
        }
        return null;
    }

    // Delete
    public void deleteEmployee(Long userId) {
        employeeRepository.deleteById(userId);
    }
}
