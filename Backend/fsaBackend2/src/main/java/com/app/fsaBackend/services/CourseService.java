package com.app.fsaBackend.services;

import java.util.List;

import com.app.fsaBackend.entities.Course;


public interface CourseService {

	public List<Course> findAllCourses();

	public Course findCourse(long courseId);

	public Course addCourse(Course course);

	public  Course editCourse(Course course);
	
	public void deleteCourse(long courseId);
	
}
