// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import React from 'react';
// import { Button, Col, Container, Row } from "reactstrap";
// import { ToastContainer, toast } from 'react-toastify';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Home from './Components/Home';
// import AllCourses from './Components/AllCourses';
// import AddCourse from './Components/AddCourse';
// import Header from './Components/Header';
// import Menus from './Components/Menus';
// import Footer from './Components/Footer/Footer';
// import AboutUs from './Components/AboutUs/AboutUs';
// import ContactUs from './Components/ContactUs/ContactUs';

// function App(){
//   const notify = () => {
//      toast.success('SUCCESS')  
//   };
//   return (
//     <div>
//       <Router>
//       <ToastContainer />
//       <Container>
//         <Header/>
//         <Row>
//           <Col md={4}><Menus/></Col>
//           <Col md={8}>
//           <Routes>
//             <Route path='/'             Component={Home}       exact/>
//             <Route path='/add-course'   Component={AddCourse}  exact/>
//             <Route path='/view-courses' Component={AllCourses} exact/>
//             <Route path='/about-us'     Component={AboutUs}    exact/>
//             <Route path='/contact-us'   Component={ContactUs}  exact/>
//             </Routes>
//           </Col>
//         </Row>
//         {/* <Footer/> */}
//       </Container>
//       </Router>
//     </div>
//   );
// }

// export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Menus from './Components/Menus';
import Home from './Components/Home';
import AddCourse from './Components/AddCourse';
import AllCourses from './Components/AllCourses';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <Header />
        </header>
        <main className="app-main">
          <Container>
            <Row>
              <Col md={4}><Menus /></Col>
              <Col md={8}>
                <Routes>
                  <Route path='/' element={<Home />} exact />
                  <Route path='/add-course' element={<AddCourse />} exact />
                  <Route path='/view-courses' element={<AllCourses />} exact />
                  <Route path='/about-us' element={<AboutUs />} exact />
                  <Route path='/contact-us' element={<ContactUs />} exact />
                </Routes>
              </Col>
            </Row>
          </Container>
        </main>
        <footer className="app-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;