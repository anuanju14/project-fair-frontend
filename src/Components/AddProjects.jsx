import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 import user from '../assets/user.gif'
function AddProjects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div><button className='btn btn-light text-dark ' onClick={handleShow}>Add      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <div className='row'>
                      <div className="col-6 mt-5 p-4 ">
                          <label >
                        <input type="file"  style={{display:'none'}}/>
                        <img  width={'300px'} src={user} alt="" />
                        </label>
                    </div>
                    <div className="col-6 text-center">

                      <input type="text" placeholder='Project Title' className='form-control mb-3' />
                      <input type="text" placeholder='Project Language' className='form-control mb-3' />
                      <input type="text" placeholder='Git hub link' className='form-control mb-3' />
                      <input type="text" placeholder='Live link' className='form-control mb-3' />
                      <input type="text" placeholder='Overview' className='form-control mb-3' />
                
                    </div>
                  
            </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light">Add</Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default AddProjects