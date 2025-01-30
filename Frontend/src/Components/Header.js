import React from 'react';
import { Card, CardBody } from 'reactstrap';


function Header() {
  return (
    <div style={{ height: '10%' }} className='header'>
      <Card className='my-2 bg-info'>
        <CardBody>
        <h1 className='text-center my-3'>Welcome to Course App</h1>
        </CardBody>
      </Card>
          </div>  
  );
}

export default Header;