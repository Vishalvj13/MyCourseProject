import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

const AddCourse=()=>{
    useEffect(() => {
            document.title = "Add Courses";
        },[]);

    const [course,setCourse] = useState([]);
    const navigate = useNavigate();

    //Submit form function
    const formHandler = (e) =>{
        console.log(course);
        postDataOnserver(course);
        e.preventDefault();
    }

    const [userId, setUserId]=useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    //Function to post data on the server
    const postDataOnserver = (data) =>{
        if(userId.length == 0){
            toast.warning("Please enter course id!", {position: "top-center", autoClose: 2000});
            return;
        }else if(title.length == 0){
            toast.warning("Please enter course title!", {position: "top-center", autoClose: 2000});
            return;
        }else if(description.length == 0){
            toast.warning("Please enter course description!", {position: "top-center", autoClose: 2000});
            return;
        }
        axios.post(`${base_url}/courses/add`, data).then(
          (response) =>{
            toast.success("Course added successfully!", {position: "top-center", autoClose: 2000 });
          //  setCourse({id:"", title: "", description: ""}); // To empty the field place empty
            navigate("/view-courses");
          },
          (error)=>{
            toast.error("Something went wrong!", {position: "top-center", autoClose: 2000});
          }
        )}

    return(
     <Fragment>
        <h1 className="text-center my-3">Fill Course Details:</h1>
        <Form onSubmit={formHandler}>
            <FormGroup>
                <label for="userId">Course Id: </label>
                <Input type="number" 
                       placeholder="Enter Id here"
                       name="userId" 
                       id="userId" 
                       onChange={(e)=>{
                            setCourse({...course, id:e.target.value});
                            setUserId(e.target.value);
                      }}>
                </Input>
            </FormGroup>
            <FormGroup>
                <label for="title">Course Title: </label>
                <Input type="text" 
                       placeholder="Enter title here" 
                       name="title" 
                       id="title"
                       onChange={(e)=>{
                            setCourse({...course, title:e.target.value});
                            setTitle(e.target.value);
                        }}>
                </Input>
            </FormGroup>
            <FormGroup>
                <label for="description">Description: </label>
                <Input type="textarea" 
                       placeholder="Enter description here" 
                       name="description" 
                       id="description"
                       style={{height:150}}
                       onChange={(e)=>{
                            setCourse({...course, description:e.target.value});
                            setDescription(e.target.value);
                       }}>
                </Input>
            </FormGroup>
            <Container className="text-center">
                <Button color="success" type="submit">Add Course</Button>
                <Button color="warning" type="reset" className="mx-2">Clear</Button>
            </Container>
        </Form>
     </Fragment>
    );
};

export default AddCourse;