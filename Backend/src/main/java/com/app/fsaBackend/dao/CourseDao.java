package com.app.fsaBackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.fsaBackend.entities.Course;

@Repository
public interface CourseDao extends JpaRepository<Course, Long>{
	

}
