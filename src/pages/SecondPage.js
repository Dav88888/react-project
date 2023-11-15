// SecondPage.jsx
import '../App.css';
import React from 'react';
import { Card, Container, Form, FormControl,Button, Row, Col, Navbar, Nav } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {BsGeoAlt } from 'react-icons/bs';
import {BsListCheck } from 'react-icons/bs';
import {AiOutlineInfoCircle } from "react-icons/ai";
import {BiSolidIdCard} from "react-icons/bi";
import {BiBuildings} from "react-icons/bi";
import CardBody from 'react-bootstrap/CardBody';
import { Link,} from 'react-router-dom';
import { FiXSquare } from "react-icons/fi"


const SecondPage = () => {
  
  return (
    <Container className='MainContainer' fluid style={{ backgroundImage: `url('https://images.unsplash.com/photo-1614279629245-d7a138f035f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover',/*cover, auto, contain*/  backgroundPosition: 'center' }}>
            <Navbar id="navbar" expand="lg" className="bg-transparent" style={{}}>
            <Container>
              <Navbar.Brand href="#home">
                <img alt="" src="https://hsa.hu/wp-content/uploads/2020/08/HSA_logo_wh-e1596540575453.png" style={{width:'90%',height:'56px',marginBottom:'1rem'}}/>
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav"style={{ margin: 'auto' }} >
                <Nav className="mx-auto" >
                  <Nav.Link as={Link} to="/" href="#allasok" style={{ color: 'white',}}>Állások</Nav.Link>
                  <Nav.Link  className="hide-on-small-screen" style={{ color: 'white' }}>|</Nav.Link>
                  <Nav.Link as={Link} to="/" href="#munkavallaloknak" style={{ color: 'white' }}>Munkavállalóknak</Nav.Link>
                  <Nav.Link className="hide-on-small-screen" style={{ color: 'white' }}>|</Nav.Link>
                  <Nav.Link as={Link} to="/" href="#rolunk" style={{ color: 'white' }}>Rólunk</Nav.Link>
                  <Nav.Link   className="hide-on-small-screen" style={{ color: 'white' }}>|</Nav.Link>
                  <Nav.Link as={Link} to="/" href="#cegeknek" style={{ color: 'white' }}>Cégeknek</Nav.Link>
                  <Nav.Link  className="hide-on-small-screen" style={{ color: 'white' }}>|</Nav.Link>
                  <Nav.Link as={Link} to="/second" href="#irodaink" style={{ color: 'white' }}>Irodáink</Nav.Link>
                  <Nav.Link  className="hide-on-small-screen" style={{ color: 'white' }}>|</Nav.Link>
                  <Nav.Link as={Link} to="/" href="#cvgenerator" style={{ color: 'white' }}>CV-generátor</Nav.Link>
                  <Nav.Link  className="hide-on-small-screen" style={{ color: 'white' }}>|</Nav.Link>
                  <Nav.Link as={Link} to="/" href="#kapcsolat" style={{ color: 'white' }}>Kapcsolat</Nav.Link>
                </Nav>
                <Nav style={{textAlign:'right'}}>
                <Nav.Link href="#HU" style={{ color: 'white',textAlign:'right' }}><strong>HU</strong></Nav.Link>
                  <Nav.Link  className="hide-on-small-screen" style={{ color: 'white',textAlign:'right' }}>|</Nav.Link> 
                  <Nav.Link href="#EN" style={{ color: 'white', textAlign:'right'}}>EN</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      <div className="flex-container">
        <Row id='elsoegyetlensor'style={{width:'77.5rem',height:'38.438rem',backgroundPosition: 'center' }} >
            <Col sm={4}  id='elsofoszlop' style={{}}>
                <Col className="flex-item" sm={7}  style={{ width: '25em',height:'25em',marginRight:'5px'}}>
                  <Card  style={{backgroundImage:'url("https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',backgroundSize:'cover', position: 'relative', width: '100%', height: '100%',backgroundColor: '#00b26b',borderRadius: '0',/* marginBottom: '10px',*/}}>
                  <div
                style={{
                  position: 'absolute', bottom: 0, left: 0, width: '100%', height: '25%',backgroundColor: 'rgba(40, 40, 40, 0.5)',zIndex:'0'}}
                ></div>
                  <CardBody className="text-center"style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}></CardBody>
                    <Card.Title className='cardtitle' style={{color:'white',fontWeight:'bold',textAlign:'center',zIndex:'1' }}>Állások</Card.Title> 
                  </Card>
                </Col> 
              <Col className="flex-item" sm={7}  style={{width: '25rem',height: '12.5rem',padding: 0}}>
                <Form  inline style={{marginTop:'5px',}}>
                  <InputGroup className='bg-transparent' style={{width: '100%',color:'white', borderRadius: '0', borderWidth:'2px',marginBottom: '10px'}}>
                      <InputGroup.Text className='bg-transparent' style={{ borderRight: 'none',borderRadius: '0',borderWidth: '2px',}}>
                          <BsListCheck size={24} color="white"/>
                      </InputGroup.Text>
                    <FormControl type="search" color="white" className='bg-transparent' placeholder="Mit keresel" style={{color:'white', borderLeft: 'none',borderRadius: '0',borderWidth:'2px' }} />
                  </InputGroup>
                  <InputGroup className='bg-transparent' style={{width: '100%',color:'white', borderRadius: '0', borderWidth:'2px'}}>
                      <InputGroup.Text className='bg-transparent' style={{ borderRight: 'none',borderRadius: '0',borderWidth: '2px', }}>
                          <BsGeoAlt  size={24} color="white"/>
                      </InputGroup.Text>
                    <FormControl type="search" color="white" className='bg-transparent' placeholder="Hol keresel" style={{color:'white', borderLeft: 'none',borderRadius: '0',borderWidth:'2px' }} />
                  </InputGroup>
                  <Button variant="outline-success" style={{fontWeight: 'bold',width: '150px',color:'white', borderRadius: '0', borderWidth:'0px',backgroundColor:'#00b26b',marginTop: '10px', }}>Keresés</Button>
                </Form>
              </Col> 
            </Col>

            <Col sm={6}  id='masodikfoszlop-flex-item2' style={{}}>
              <Col className="flex-item2" style={{ width: '100%',height:'98.5%',}}>
                <Card style={{ width: '100%',height:'100%', backgroundColor: '#00b26b',borderRadius: '0',/*marginLeft: '5px',marginRight: '5px',marginTop:'5px'*/}}>
                <Card.Title className='cardtitle' style={{position: 'absolute', top: '8%', left: '28%',  transform: 'translate(-50%, -50%)', color:'white',fontWeight:'bold'}}>Irodáink</Card.Title>
                      <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between',placeItems: 'center' }}>
                      <Card.Img className='img' variant="top" as={BiBuildings} style={{position: 'absolute', top: '8%', left: '8%',  transform: 'translate(-50%, -50%)', fontSize:'80px',display: 'grid',placeItems: 'center',color:'white'}} />
                      <Link to="/" style={{textDecoration:'none'}}>
                      <Card.Img  className='img' variant="top" as={FiXSquare} style={{position: 'absolute', top: '8%', left: '93%',  transform: 'translate(-50%, -50%)', fontSize:'60px',display: 'grid',placeItems: 'center',color:'white'}} />
                      </Link>
                      <img className='hsamap' style={{ top: '18%',}} src='https://i.pinimg.com/originals/b8/19/c1/b819c1673909b8d6c63d68d9e5cf140b.gif' alt='HSA kep' />
                       <text style={{position: 'absolute', top: '70%',margin: '0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                       ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                       ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                       sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                       </text>
                      </CardBody>
                </Card>
              </Col>
            </Col>
            
            <Col sm={2} id='harmadikdikfoszlop' style={{width: '12.5rem',height:'25rem',padding: 0, margin:'0px'}}>
                <Col className="flex-item3" sm={2}  style={{ width: '100%',height:'25rem',}}>
                  <Card className='bg-transparent'  style={{width: '100%', height: '100%',borderRadius: '0',border:'0px' /*margin: '5px'*/}}>
                  <img alt="groupwork" style={{ width: '100%',height:'100%'}} src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  </Card>
                </Col>
                <Col className='flex-item3' style={{width: '100%',height:'12.25rem',textAlign:'center',marginTop:'10px'}}>
                    <Card style={{width: '100%',height:'100%', backgroundColor: '#109E6A',borderRadius: '0', /*marginLeft: '5px'*/}}>
                      <CardBody style={{float:'left', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}></CardBody>
                      <Card.Img className='img' variant="top" as={BiSolidIdCard} style={{position: 'absolute', top: '50%', left: '50%',  transform: 'translate(-50%, -50%)', fontSize:'80px',display: 'grid',placeItems: 'center',color:'white'}} />
                      <Card.Title className='cardtitle' style={{color:'white',fontWeight:'normal'}}>CV-generátor</Card.Title>
                    </Card>
                </Col>
            </Col>
       </Row>
       </div>
          
          <footer id = "footer">
            <Navbar bg="dark" variant="dark" expand="lg" className="bg-transparent" >
              <Nav className="w-100 justify-content-end" style={{backgroundcolor: '#1A1F37'}}> 
                <Nav.Link href="#home" style={{ color: 'white' }}>© 2022 HSA Kft.  <AiOutlineInfoCircle size={24} style={{margin: '5px'}}/> </Nav.Link>
                <Nav.Link className="hide-on-small-screen" >|</Nav.Link>
                <Nav.Link href="#about" style={{ color: 'white' }}>DES&DEV: <strong>OUTCLASS™</strong></Nav.Link>
                <Nav.Link className="hide-on-small-screen"  >|</Nav.Link>
                <Nav.Link href="#contact" style={{ color: 'white' }}>Adatvédelmi tájékoztató</Nav.Link>
              </Nav>
            </Navbar>
          </footer>
      
    </Container>
  );
}

export default SecondPage;
