import React from 'react'
import AddProjects from './AddProjects'
import { FaGithubSquare } from "react-icons/fa";

import { AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";

function MyProjects() {
  return (
    <div>
        <div className='d-flex justify-content-between'> 
            <h3 className='ms-5'> My Projects</h3>
            <AddProjects/>
        </div>

        <div className='row shadow m-4 p-5 '>
          
                <div className="col-6">
                    <h4>Project Title</h4>
                </div>
                <div className="col-6 d-flex justify-content-evenly">
                    <button className='btn'><FaGithubSquare /></button>
                    <button className='btn'><MdOutlineModeEdit /></button>
                    <button className='btn'><AiTwotoneDelete /></button>
                </div>
              

        </div>
    </div>
  )
}

export default MyProjects