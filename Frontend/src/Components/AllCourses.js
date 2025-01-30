import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi"; 
import axios from "axios"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AllCourses = () => {

  const [courses, setCourses] = useState([]);

   useEffect(() => {
           document.title = "All Courses";
           getAllCoursesFromServer();
       },[]);
    
       //Function to call server:
        const getAllCoursesFromServer =() => {
          axios.get(`${base_url}/courses/`).then(
            (response) => {
               //Success
               setCourses(response.data);
           //  toast.success("Courses has been loaded", {position: "top-center", autoClose: 2000 });
               
            },
            (error) => {
               //Error
               console.log(error);
               toast.error("Something went wrong", {position: "top-center"});
            }
          );
        };

        const updateCourseInList = (id, updatedCourse) => {
          setCourses(courses.map((course) => (course.id === id ? updatedCourse : course)));
        };
      
        const removeCourseFromList = (id) => {
          setCourses(courses.filter((course) => course.id !== id));
        };        

    // const updateCourses = (id) =>{
    //   setCourses(courses.filter((c) => c.id !== id))
    // };

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows:</p>
            
            {courses.length>0 
               ? courses.map((item) => (
                 <Course 
                   key={item.id} 
                   course={item} 
                   updateCourseInList={updateCourseInList} 
                   removeCourseFromList={removeCourseFromList} 
                 />
                ))
               : "No Courses"}
        </div>
    );
};

export default AllCourses;