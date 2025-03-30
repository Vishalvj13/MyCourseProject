package com.app.fsaBackend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.fsaBackend.dao.CourseDao;
import com.app.fsaBackend.entities.Course;

@Service
public class CourseServiceImpl implements CourseService{

	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImpl() {
		super();
	}
	

	public CourseServiceImpl(CourseDao courseDao) {
		super();
		this.courseDao = courseDao;
	}


	@Override
	public List<Course> findAllCourses() {
		return courseDao.findAll();
	}

	@Override
	public Course findCourse(long courseId) {
		return courseDao.getOne(courseId);
	}

	@Override
	public Course addCourse(Course courseToBeAdded) {
		courseDao.save(courseToBeAdded);
		return courseToBeAdded;
	}

	@Override
	public  Course editCourse(Course courseToBeUpdated) {
		courseDao.save(courseToBeUpdated);
		return courseToBeUpdated;
	}

	@Override
	public void deleteCourse(long courseId) {
		Course entity = courseDao.getOne(courseId);
		courseDao.delete(entity);
	}
}
