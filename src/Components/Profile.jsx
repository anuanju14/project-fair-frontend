import React from 'react'
import userfile from '../assets/userfile.png'
import Swal from 'sweetalert2'

function Profile() {
  const updateUser=()=>{
    Swal.fire({
      title: 'Success',
      text: 'User Details Updated',
      icon: 'success',
      confirmButtonText: 'Back'
    })
  }
  return (
    <div>
          <div className='text-center'>
            <h3>
              My profile
            </h3>
            <label >
                 <input type="file"  style={{display:'none'}}/>
                 <img  width={'100px'} src={userfile} alt="" />
            </label>
             <div className='mx-4 p-5'>
                <input type="text" placeholder='Name' className='form-control mb-2 mt-4' />
                <input type="text" placeholder='Github' className='form-control mb-2' />
                <input type="text" placeholder='Live link' className='form-control mb-2' />
                <button className=' btn btn-dark m-4' onClick={updateUser}>Update</button>
              </div>
              
          </div>
      </div>
  )
}

export default Profile