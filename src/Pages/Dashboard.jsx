import React from 'react'
import Profile from '../Components/Profile'
import MyProjects from '../Components/MyProjects'





function Dashboard() {
  return (
    <div>
        <div className="row">    
            <h2 className='text-center'>Welcome        <span className='text-light'>User</span> </h2>        
            <div className="col-lg-6">
               <MyProjects/>
            </div>
            <div className="col-lg-6">
              <Profile/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard