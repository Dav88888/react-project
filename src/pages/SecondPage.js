// SecondPage.jsx
import './App.css';
import React from 'react';
import { Card, Container, CardGroup, Form, FormControl,Button, Row, Col, Navbar, Nav } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {BsGeoAlt } from 'react-icons/bs';
import {BsListCheck } from 'react-icons/bs';
import {AiOutlineInfoCircle } from "react-icons/ai";
import {FaHandshake} from "react-icons/fa";
import {FaUserGraduate} from "react-icons/fa6";
import {BiSolidIdCard} from "react-icons/bi";
import {BiBuildings} from "react-icons/bi";
import CardBody from 'react-bootstrap/CardBody';
import { Link,} from 'react-router-dom';


const SecondPage = () => {
  
  return (
    <Container fluid style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589859762194-eaae75c61f64?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover',/*cover, auto, contain*/  backgroundPosition: 'center', }}>
            <Navbar expand="lg" className="bg-transparent">
            <Container>
              <Navbar.Brand href="#home">
                <img alt="" src="https://hsa.hu/wp-content/uploads/2021/02/HSA_logo-e1596540553919.png" style={{width:'150px',height:'56px',marginBottom: '20px',marginTop: '20px',marginRight: '20px'}}/>
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
          <Row id='elso(egyetlen)sor'>
            <Col sm={6}  id='elsofoszlop'>
              <Row sm={8}  id='masodiksor(A)' style={{marginBottom:'1px',marginTop:'1px'}}>
                <Col className="flex-item" sm={7} id='masodikoszlop(A)' style={{ width: '25em',height:'25em',padding: 0}}>
                  <Card  style={{backgroundImage:'url("https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',backgroundSize:'cover', position: 'relative', width: '100%', height: '100%',backgroundColor: '#00b26b',borderRadius: '0',/* marginBottom: '10px',*/}}>
                  <div
                style={{
                  position: 'absolute', bottom: 0, left: 0, width: '100%', height: '25%',backgroundColor: 'rgba(40, 40, 40, 0.5)',zIndex:'0'}}
              ></div>
                  <CardBody className="text-center"style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}></CardBody>
                    <Card.Title className='cardtitle' style={{color:'white',fontWeight:'bold',textAlign:'center',zIndex:'1' }}>Állások</Card.Title> 
                  </Card>
                </Col>
                <Col className="flex-item" sm={2} id='masodikoszlop(B)' style={{ width: '12.5rem',height:'25rem',padding: 0}}>
                  <Card  className='flex1' style={{width: '100%', height: '100%', backgroundColor: '#F5A32E',borderRadius: '0', /*marginBottom: '10px'*/}}>
                  <CardBody className="text-center"style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}></CardBody>
                  <Card.Img className='img' variant="top" as={FaUserGraduate} style={{position: 'absolute', top: '50%', left: '50%',  transform: 'translate(-50%, -50%)',fontSize:'80px',display: 'grid',placeItems: 'center',color:'white'}} />
                    <Card.Title  className='cardtitle' style={{ textAlign: 'center',color:'white',fontWeight:'normal'}}>Diplomásoknak</Card.Title>
                    
                  </Card>
                </Col>
              </Row>
            <Row  sm={4} id='masodiksor(B)' style={{marginBottom:'1px',marginTop:'1px'}}>
              <Col className="flex-item2" sm={7} id='masodikoszlop(AA)' style={{width: '25rem',height: '12.5rem',padding: 0}}>
                <Form  inline style={{width: '100%',marginTop:'5px'}}>
                  <InputGroup className='bg-transparent' style={{color:'white', borderRadius: '0', borderWidth:'2px',marginBottom: '10px'}}>
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
                <Col className="flex-item(2)" sm={2} id='masodikoszlop(BB)' style={{ width: '12.5rem',height:'12.5rem'}}>
                  <Card  className='bg-transparent' style={{width:'100%',height:'100%',borderRadius: '0', marginTop:'5px', marginBottom: '5px'}}>
                <img style={{ width: '100%',height:'100%'}} alt="workinggirl" src="https://images.unsplash.com/photo-1571365689578-618663443bd7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  </Card>
                </Col>
            </Row>      
            </Col>
            <Col sm={6} id='masodikfoszlop'>
              <Row sm={8} id='masodiksor(a)' style={{marginBottom:'1px',marginTop:'1px'}}>
                <Col className="flex-item3" sm={7} id='masodikoszlop(a)' style={{ width: '25rem',height:'25rem',padding: 0}}>
                  <Card style={{width: '99%', height: '49%',backgroundColor: '#5EBE86',borderRadius: '0', marginBottom: '10px'}}>
                  <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between'  }}></CardBody>
                    <Card.Title className='cardtitle' style={{color:'white',textAlign:'center',fontWeight:'normal'}}> Munkavállalóknak</Card.Title>
                      
                    </Card>
                  <Card  style={{width: '99%', height: '49%',backgroundColor: '#109E6A',borderRadius: '0',marginBottom: '5px', }}>
                    <CardBody>
                    <Card.Title className='cardtitle' style={{position:'absolute',top:'30px',left:'40px',color:'white',fontWeight:'normal'}}>Rólunk</Card.Title>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="flex-item3 flex2" sm={2} id='masodikoszlop(b)' style={{ width: '12.5rem',height:'25rem',padding: 0}}>
                  <Card className='bg-transparent'  style={{width: '100%', height: '100%',borderRadius: '0',border:'0px' /*margin: '5px'*/}}>
                  <img alt="groupwork" style={{ width: '100%',height:'100%',zIndex:'0',}} src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  </Card>
                </Col>
              </Row>
              <Row sm={4} id='masodiksor(b)' style={{textAlign:'center',height:'12.5rem',marginBottom:'1px',marginTop:'1px'}} >
                <Col className='flex-item4' style={{width: '37.5rem',padding: 0}}>
                  <CardGroup  style={{ display: 'flex', justifyContent: 'end', height:'100%'}}>
                    
                    <Card  style={{ width: '100%',height:'100%', backgroundColor: '#5EBE86',borderRadius: '0', marginRight: '5px',marginTop:'5px'}}>
                      <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}></CardBody>
                    <Link to="/second" style={{textDecoration:'none'}}>

                      <Card.Img className='img' variant="top" as={FaHandshake} style={{position: 'absolute', top: '50%', left: '50%',  transform: 'translate(-50%, -50%)', fontSize:'80px',display: 'grid',placeItems: 'center',color:'white'}} />
                    </Link>

                      <Card.Title className='cardtitle' style={{color:'white',fontWeight:'normal'}}>Cégeknek</Card.Title>

                    </Card>
                    <Card style={{ width: '100%',height:'100%', backgroundColor: '#00b26b',borderRadius: '0',marginLeft: '5px',marginRight: '5px',marginTop:'5px'}}>
                        <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}></CardBody>
                      <Card.Img className='img' variant="top" as={BiBuildings} style={{position: 'absolute', top: '50%', left: '50%',  transform: 'translate(-50%, -50%)', fontSize:'80px',display: 'grid',placeItems: 'center',color:'white'}} />
                        <Card.Title className='cardtitle' style={{color:'white',fontWeight:'normal'}}>Irodáink</Card.Title>
                    </Card>
                    <Card style={{width: '100%',height:'100%', backgroundColor: '#109E6A',borderRadius: '0', marginLeft: '5px',marginTop:'5px'}}>
                      <CardBody style={{float:'left', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}></CardBody>
                      <Card.Img className='img' variant="top" as={BiSolidIdCard} style={{position: 'absolute', top: '50%', left: '50%',  transform: 'translate(-50%, -50%)', fontSize:'80px',display: 'grid',placeItems: 'center',color:'white'}} />
                      <Card.Title className='cardtitle' style={{color:'white',fontWeight:'normal'}}>CV-generátor</Card.Title>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>      
            </Col>
          </Row>
          </div>
          <footer>
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
