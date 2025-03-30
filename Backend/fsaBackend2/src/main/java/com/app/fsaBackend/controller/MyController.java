package com.app.fsaBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.fsaBackend.entities.Course;
import com.app.fsaBackend.services.CourseService;

@CrossOrigin("*")
@RestController
@RequestMapping("/courses")
public class MyController {

	@Autowired
	private CourseService courseServiceIntfLayer;

	@GetMapping("/home")
	public String home() {
		return "Welcome Home.";
	}

	// Get all courses

//	@GetMapping("/")
//	public ResponseEntity<?> getCourses() {
//		List<Course> getAllCourses = courseServiceIntfLayer.findAllCourses();
//		if(getAllCourses!=null)
//			 return Response.success(getAllCourses);
//		return Response.error(getAllCourses +" There are no courses present currently!");
//	}
	
	@GetMapping("/")
	public List<Course> getCourses() {
		List<Course> getAllCourses = courseServiceIntfLayer.findAllCourses();
		return getAllCourses;
	}

	// Get single course

	@GetMapping("/{courseId}")
	public ResponseEntity<?> getCourse(@PathVariable String courseId) {
		Course singleCourse = courseServiceIntfLayer.findCourse(Long.parseLong(courseId));
		if(singleCourse!=null)
		   return Response.success(singleCourse);
		return Response.error(singleCourse +" The course does not exist!");
	}

	// Add course

	@PostMapping("/add")
	public Course addCourse(@RequestBody Course course) {
		Course addedCourse = courseServiceIntfLayer.addCourse(course);
		return addedCourse;
	}

	// Update the course

	@PutMapping("/edit")
	public Course updateCourse(@RequestBody Course course) {
		Course courseUpdatedMap = courseServiceIntfLayer.editCourse(course);
		return courseUpdatedMap;
	}
	
	
	// Delete the course

	@DeleteMapping("/delete/{courseId}")
	public void deleteCourseTC(@PathVariable String courseId) {
	  courseServiceIntfLayer.deleteCourse(Long.parseLong(courseId));
	}

}
