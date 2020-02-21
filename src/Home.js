import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import background from './images/bg.jpg'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron style={{ height:"500px", backgroundImage:`url(${background})`}}>
          <h1 style={{color:"white", textAlign:"center", fontWeight:"bolder", textShadow:"2px 2px black"}}>IGNITING INDUSTRY IDEAS</h1>
            <h2 style={{color:"white", textAlign:"center"}}>__________________________________________________________</h2>
            <h1 style={{color:"white", textAlign:"center", fontSize:"100px", fontWeight:"bolder", textShadow:"2px 2px black"}}>WE ARE DEL</h1>
            <h2 style={{color:"white", textAlign:"center"}}>__________________________________________________________</h2>
            <ButtonToolbar style={{marginLeft:"825px"}}>
              <Button variant="primary">AD Spec</Button>
              <Button variant="primary" style={{marginLeft:"5px"}}>File Upload</Button>
            </ButtonToolbar>
        </Jumbotron>
        <Container>
          <h1 style={{textAlign:"center", textDecoration:"underline"}}>ABOUT US</h1>
        <Row className="justify-content-md-center">
          <Col></Col>
          <Col md="auto">
          <iframe src='https://www.youtube.com/embed/cUeKlA6f2m0'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                            height='500px'
                            width='1000px'
                    />
          </Col>
          <Col></Col>
        </Row>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>

        <p>According to the caption on the bronze marker placed by the Multnomah Chapter of the Daughters of the American Revolution on May 12, 1939, “College Hall (is) the oldest building in continuous use for Educational purposes west of the Rocky Mountains. Here were educated men and women who have won recognition throughout the world in all the learned professions.”</p>
        <p>You can decide what you want to do in life, but I suggest doing something that creates. Something that leaves a tangible thing once you're done. That way even after you're gone, you will still live on in the things you created.</p>
        <p>Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them.</p>
        </Container>
        <Container>
        <h1 style={{textAlign:"center", textDecoration:"underline"}}>OUR TEAM</h1>
        <CardDeck style={{ width: "1300px", marginBottom:"20px", marginLeft:"-100px", marginTop:"20px"}}>
          <Card border="dark" >
            <Card.Img variant="top" src={ require('./images/david.jpg') }  />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>DAVID LANGSTAFF</Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                President
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="dark">
            <Card.Img variant="top" src={ require('./images/dayna.jpg') } />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>DAYNA OULION</Card.Title>
              <Card.Text style={{textAlign:"center"}}>
              Advertising Sales Manager
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="dark">
            <Card.Img variant="top" src={ require('./images/shayna.jpg') }  />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>SHAYNA WIWIERSKI</Card.Title>
              <Card.Text style={{textAlign:"center"}}>
              Editorial Manager
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="dark">
            <Card.Img variant="top" src={ require('./images/cindy.jpg') }  />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>Cindy Chan</Card.Title>
              <Card.Text style={{textAlign:"center"}}>
              Managing Editor
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="dark">
            <Card.Img variant="top" src={ require('./images/laydon.jpg') }  />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>LYNDON MCLEAN</Card.Title>
              <Card.Text style={{textAlign:"center"}}>
              Managing Editor
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Home;