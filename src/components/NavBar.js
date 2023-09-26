import React, { useState } from 'react'
import { Row, Navbar, Nav, Form, Container } from 'react-bootstrap'

const NavBar = ({searchFun}) => {
  const [word, setValue] = useState("");
  
  function handleChange(event) {
    setValue(event.target.value);
  }

  const onClick = (e) =>{
    e.preventDefault();
    searchFun(word);
    setValue("")
  }
  return (
    <Row>
        <Navbar  expand="lg" bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#">
            <div className='brand-color'>مطعم جديد</div>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث.."
              className="mx-2"
              onChange={(e)=>handleChange(e)}
              value={word}
            
            />
            <button onClick={(e)=>onClick(e)} className='btn-search'>بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  );
}

export default NavBar;
