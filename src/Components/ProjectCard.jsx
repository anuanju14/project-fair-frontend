import React from 'react'

import Card from 'react-bootstrap/Card';
import cardimg1  from'../assets/cardimg1.avif'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div> <Card style={{ width: '28rem' } }  onClick={handleShow}>
    <img src={cardimg1}alt=""  width={'100%'} height={'200px'}/>
    
    <Card.Body>
    <Card.Title className='text-center'>Project Title</Card.Title>
          
    </Card.Body>
  </Card>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className="row">
            <div className="col-6">
              <img  width={'100%'}src={cardimg1} alt=""  />
            </div>
            <div className="col-6   text-center"  >
              <h2>Project Title</h2>
              <p style={{textAlign:'justify'}}>Description:Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia eos provident tempora ipsum autem, esse animi aut at molestiae eligendi adipisci alias, eum recusandae nobis explicabo suscipit a nisi!            
              </p>
              <p>Technology Used: <b>React ,  Node</b></p>
            </div>
          
           </div>
           
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex justify-content between'>
           <Button className='me-3'><a href=""><AiFillGithub /></a></Button> 
            <Button  className='me-3'><a href=""><BsLink45Deg /></a></Button>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
            

          </div>
          
        </Modal.Footer>
      </Modal>
  </div>
  )
}

export default ProjectCard