import React, { useEffect } from "react";
import { Container, Card, CardBody, CardTitle, CardText, Button, CardImg, CardImgOverlay } from 'reactstrap';

const Home = () => {
    useEffect(() => {
        document.title = "Home || Course App";
    }, []);
    return (
        <div style={{ height: '80%' }}>
            <Container >
            <h1 className="display-3">Welcome to the Course App!</h1>
            <p className="lead">This is a simple app to manage your courses.</p>
            <hr className="my-2" />
            </Container>
        </div>
    );
}

export default Home;