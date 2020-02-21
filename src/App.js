import React, { Component } from "react";
import { Route,HashRouter } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Work from './Work'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './images/logo.png'

class App extends Component {
  render() {
    return (
       <HashRouter>
        <div>
          <h1>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
              alt=""
              src={Logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
               />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" style={{fontSize:"18px", padding:"10px"}}>Home</Nav.Link>
              <Nav.Link href="#service" style={{fontSize:"18px",  padding:"10px"}}>Services</Nav.Link>
              <Nav.Link href="#work" style={{fontSize:"18px",  padding:"10px"}}>Our Work</Nav.Link>
              <Nav.Link href="#contact" style={{fontSize:"18px",  padding:"10px"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
          </h1>
          <div className="content">
          <Route exact path="/home" component={Home}/>
            <Route path="/service" component={Service}/>
            <Route path="/work" component={Work}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
<footer style={{backgroundColor:"#343a40"}}>
  <div style={{color:"white"}}>

    <div class="row">
      <div class="col-md-6 mt-md-0 mt-3">
        <h5>FOOTER CONTENT</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>
      </div>
      <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">Links</h5>
        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>
      <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>

    </div>

  </div>
  <div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2020 Copyright</div>
</footer>
      </HashRouter>

    );
  }
}

export default App;