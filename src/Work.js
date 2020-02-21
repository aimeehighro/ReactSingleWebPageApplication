import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Pagination from 'react-bootstrap/Pagination'

class Work extends Component {
  render() {
    return (
      <div>
      <Jumbotron style={{ height:"500px", backgroundColor:"#343a40"}}>
          {/* <h3 style={{color:"white", textAlign:"center", fontWeight:"bolder", textShadow:"2px 2px black"}}>THIS IS WHAT WE DO</h3> */}
            <h2 style={{color:"white", textAlign:"center"}}>__________________________________________________________</h2>
            <h1 style={{color:"white", textAlign:"center", fontSize:"100px", fontWeight:"bolder", textShadow:"2px 2px black"}}>OUR WORK</h1>
            <h2 style={{color:"white", textAlign:"center"}}>__________________________________________________________</h2>
            <br/>
            <p style={{color:"white", textAlign:"center", textShadow:"2px 2px black", fontStyle:"italic"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan, ligula ac tristique dapibus, augue urna sollicitudin metus, at pulvinar ante orci id nisl. Aenean sollicitudin vitae tortor ut sodales. Donec molestie lectus imperdiet risus vulputate elementum. Maecenas sed fermentum sapien. Mauris commodo tellus et quam finibus, quis pharetra tellus bibendum. Pellentesque pharetra ligula id dolor egestas, ac cursus leo placerat. Pellentesque eget ipsum purus. Nulla tincidunt porta tempor. Morbi pharetra lobortis odio ac aliquet. Integer posuere et lorem sed faucibus. Nulla elementum consequat tortor in congue. Nullam sed augue a lectus dignissim suscipit in sit amet arcu. Nulla sed semper erat. Sed nisi mi, feugiat eget enim ac, euismod viverra est. Sed non blandit odio. Nam fermentum dui vel scelerisque rutrum. Aliquam erat volutpat.</p>
        </Jumbotron>
        <Container>
        <Pagination size="lg" style={{marginLeft:"400px"}}>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        <CardColumns>
          <Card border="secondary" >
          <Card.Img variant="top" src={ require('./images/1.jpg') } />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>WORK I</Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>COMPANY NAME</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary"  >
          <Card.Img variant="top" src={ require('./images/2.jpg') } />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>WORK IV</Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>COMPANY NAME</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary"  >
          <Card.Img variant="top" src={ require('./images/3.jpg') } />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>WORK II</Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>COMPANY NAME</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary"  >
          <Card.Img variant="top" src={ require('./images/4.jpg') } />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>WORK V</Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>COMPANY NAME</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary">
          <Card.Img variant="top" src={ require('./images/5.jpg') } />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>WORK III</Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>COMPANY NAME</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary">
          <Card.Img variant="top" src={ require('./images/6.jpg') } />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>WORK VI</Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>COMPANY NAME</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
        </Container>
      </div>
    );
  }
}

export default Work;