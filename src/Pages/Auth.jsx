import React from 'react'
import  login  from '../assets/login.gif'
import {Link} from 'react-router-dom'

function Auth({register}) {      //or   Auth(props)
  return (
    <div>
        <div className="row">
            <div className="col-6">
                <img src={login} alt=""  width={'100%'}className='p-4'/>
            </div>
            <div className="col-6">
                <form  className='shadow bg-black'>
                       <h2 className='text-center mt-5' >Project Fair</h2>
                         <h4  className='text-center '>
                                    {
                                    register?`Register Here ...` : `Login Here...`//(conditional rendering )  OR  -->props.register`Register Here ...` : `Login Here...`
                                    
                                }
                         </h4>

                         <div className='mx-5 px-5 mt-3'>
                            {
                               register && // truty operator
                                <input type='text' placeholder='username' className='form-control mb-2'/>

                            }
                            
                                <input type="email"  placeholder='email' className='form-control mb-2'/>
                                <input type="password"  placeholder='password'  className='form-control mb-2'/>
                            
                         </div>
                       
                           <div className='text-center'>
                            {
                              register?
                            <div>
                                 <button className='btn btn-dark mt-2 mb-2' >Register</button>
                                 <p>Already register ? <Link to={'/login'}>Login here..</Link></p>
                            </div>
                            :
                            <div>
                                <button className='btn btn-dark mt-2 mb-2'>Login</button>
                                <p>New to here? <Link to={'/register'}>Register here..</Link></p>
                            </div>
                         }
                         </div>
                         
                </form>
            </div>
        </div>
    </div>
  )
}

export default Auth