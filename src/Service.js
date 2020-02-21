import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import {FaBullhorn, FaBookOpen, FaLaptop, FaRegThumbsUp, FaUsersCog, FaPaperPlane, FaVideo, FaDollarSign, FaArrowsAlt, FaRegNewspaper, FaRegEnvelope, FaRegFileAlt} from 'react-icons/fa'

class Service extends Component {
  render() {
    return (
      <div>
      <Jumbotron style={{ height:"500px", backgroundColor:"#343a40"}}>
          <h3 style={{color:"white", textAlign:"center", fontWeight:"bolder", textShadow:"2px 2px black"}}>THIS IS WHAT WE DO</h3>
            <h2 style={{color:"white", textAlign:"center"}}>__________________________________________________________</h2>
            <h1 style={{color:"white", textAlign:"center", fontSize:"100px", fontWeight:"bolder", textShadow:"2px 2px black"}}>SERVICES</h1>
            <h2 style={{color:"white", textAlign:"center"}}>__________________________________________________________</h2>
            <br/>
            <p style={{color:"white", textAlign:"center", textShadow:"2px 2px black"}}>Why add a tremendous amount of work, administrative tasks and logistical concerns to your association’s busy workload when DEL has tho perfect team for you?</p>
            <p style={{color:"white", textAlign:"center", textShadow:"2px 2px black"}}>With our comprehensive knowledge and experience producing communications tools we, represent many industries through their associations. </p>
            <p style={{color:"white", textAlign:"center", textShadow:"2px 2px black"}}>Let us help you. Here are just some of the services we offer.</p>
        </Jumbotron>
        <Container>
        <CardColumns>
          <Card border="info" style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaBullhorn size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>ADVERTISING</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              DEL designs advertisements, brochures, and logos to be attention grabbing. We design to suit the needs of divergent companies, and we will do it free of charge.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="info"  style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaRegThumbsUp size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>SOCIAL MEDIA MANAGEMENT</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              From blogs to social media management, DEL can provide you with everything you need. Our services include unique content development, profile updates and posts, and metric analytics.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="info"  style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaUsersCog size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>SALES</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              DEL’s dynamic team of highly trained, experienced sales executives is able to repeatedly cultivate new advertisers while maintaining existing accounts.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="info"  style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaPaperPlane size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>DISTRIBUTION</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              DEL can direct mail magazines to all of your members and vendors at no additional cost to associations. We also distribute publications to relevant conferences and symposiums.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="danger"  style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaBookOpen size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>PRINT AND ONLINE MAGAZINES</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              DEL produces print and online publications tailored to your specific needs and has a vast range of experience working with associations and private sector companies from a large array of industries.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="danger"  style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaVideo size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>VIDEO PRODUCTION</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              DEL creates gorgeous videos to showcase your company or event. Use video to show your clients who you are and how your company works. It’s also a fantastic way to promote events.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="danger"  style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaDollarSign size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>PROFIT SHARING</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              As a means of demonstrating our commitment of each association we serve, DEL offers a profit-sharing option.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="danger"  style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaArrowsAlt size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>LAYOUT AND PRODUCTION</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              Graphic design experts continually keep your communication materials looking fresh, vibrant and visually appealing.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="warning"  style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaLaptop size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>DIGITAL PRESENCE</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              Are you looking to increase your online presence? Or maybe you’re concerned about certain social media platforms which can allow for data mining? At DEL we have you covered. Whatever your needs we are here to help.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="warning"  style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaRegNewspaper size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>NEWSLETTERS</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              Want to get your news out more often? We can create and distribute electronic newsletters to your members on a regular basis.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="warning"  style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaRegEnvelope size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>MAIL LISTS</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              DEL’s proprietary, freestanding (non-association based) mailing lists are available for sale. Contact us for further details.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="warning"  style={{height: "20em"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}><FaRegFileAlt size="50"/></Card.Title>
              <br/>
              <Card.Subtitle style={{textAlign:"center", fontWeight:"bolder"}}>ARTICLES</Card.Subtitle>
              <br/>
              <Card.Text style={{textAlign:"center"}}>
              DEL’s writers and project managers strive to create original  and engaging informative editorial content that will keep readers interested.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
        </Container>
      </div>
    );
  }
}

export default Service;