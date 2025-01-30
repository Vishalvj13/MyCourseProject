import React, { useState, useEffect } from "react";
import {CardSubtitle, Container, Card, CardBody, CardTitle, CardText, Button, CardImg, CardImgOverlay } from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import UpdateCourseModal from "./UpdateCourseModal";

const Course = ({ course, updateCourseInList, removeCourseFromList }) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

   //Function to delete the course
   const deleteCourse =() => {
    axios.delete(`${base_url}/courses/delete/${course.id}`).then(
      (response) => {
         //Success
          toast.success("Courses deleted!", {position: "top-center", autoClose: 2000 })
          removeCourseFromList(course.id);
      },
      (error) => {
         //Error
         console.log(error);
         toast.error("Something went wrong", {position: "top-center", autoClose: 2000});
      }
    );
  };

  const updateCourseList = (updatedCourse) => {
    updateCourseInList(updatedCourse.id, updatedCourse);
  };


  return (
    <Card className="text-center" body color="info" outline>
    <CardBody>
      <CardTitle tag="h5">{course.title}</CardTitle>
      <CardText>{course.description}</CardText>
      <Container className="text-center">
        <Button color="warning" onClick={toggle} >Update</Button>
        <Button color="danger ml-3" onClick={deleteCourse} >Delete</Button>
      </Container>
    </CardBody>
    <UpdateCourseModal 
        isOpen={modal} 
        toggle={toggle} 
        course={course} 
        updateCourseList={updateCourseList} 
    />
  </Card>
  );
};

export default Course;