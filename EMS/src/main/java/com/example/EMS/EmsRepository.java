package com.example.EMS;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmsRepository extends JpaRepository<Employee, Long> {
    // You can add custom query methods here if needed
}
