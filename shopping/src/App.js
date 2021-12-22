/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import React, {useContext, useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import imgA from './shoes1.jpg';
import imgB from './shoes4.jpg';
import imgC from './shoes3.jpg';
import Data from './data';
import Detail from './Detail.js';
import {Link, Route, Switch} from 'react-router-dom';
import{CSSTransition} from "react-transition-group";

let 재고context = React.createContext();

function App() {

  let[shoes, shoes변경] = useState(Data);
  let[photos, photos변경] = useState([imgA, imgB, imgC])
  let[재고, 재고변경] = useState([10, 11, 12])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll >
              <Nav.Link> <Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to ="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/">
          <div>
            <div className="jumbotron">
              <h1 className="display-4">20% Season Off</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            </div>
          </div>

          <재고context.Provider value={재고}>

          <div className="container">
            <div className="row">
              {
                shoes.map((v, index)=>{
                  return (<Col shoes={shoes[index]} index={index} photos={photos[index]}/>)
                })
              }
            </div>
          </div>

          </재고context.Provider>
        </Route>

        <Route path="/detail">
            <Detail/>
      </Route>

      <Route path ="/:id">
        <div>아무거나 적었을 때 이거 보여주셈</div>
      </Route>




      </Switch>

      
 



      
   </div>
  );
}



function Col(props) {
  let 재고 = useContext(재고context);
  return (
    <div className="col-md-4">
      <img src={props.photos} width="100%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
      {재고}
    </div>)
}

export default App;
