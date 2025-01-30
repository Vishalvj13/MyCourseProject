import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const UpdateCourseModal = ({ isOpen, toggle, course, updateCourseList }) => {
  const [updatedCourse, setUpdatedCourse] = useState(course);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCourse({ ...updatedCourse, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${base_url}/courses/edit`, updatedCourse).then(
      (response) => {
        toast.success("Course updated successfully!", { position: "top-center", autoClose: 2000 });
        updateCourseList(updatedCourse);
        toggle();
      },
      (error) => {
        toast.error("Something went wrong!", { position: "top-center", autoClose: 2000 });
      }
    );
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Course</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" value={updatedCourse.title} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" id="description" value={updatedCourse.description} onChange={handleChange} required />
          </FormGroup>
          <Button color="primary" type="submit">Update</Button>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateCourseModal;