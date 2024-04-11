import React from 'react'
import deve2 from '../assets/deve2.png'
import ProjectCard from '../Components/ProjectCard'


function Home() {
    return (
        <div>
            <div className="row">

                <div className="col-lg-6">
                    <h1 className='text-center mt-5'>Project Fair</h1>
                    <p style={{ textAlign: 'justify' }} className='mx-5 mt-5'>Project management is defined as the process of steering a project from the start through its lifecycle. The main objective of project management is to complete a project within the established goals of time, budget, and quality. Projects have life cycles since they aren’t intended to last forever.

                        A project management life cycle starts when the project is initiated and ends when the project is either completed or terminated in one way or another.

                    </p>
                    <div className='text-center'>
                        <a href="/login" className='btn btn-dark mb-5 mt-5 '>Get started</a>
                    </div>
                </div>
                <div className="col-lg-6  text-center">
                    <img src={deve2} alt="" width={'500px'} height={'715px'} />
                </div>
            </div>

            <div className="row">

                <div className="col-12  " style={{ height: '500px' }}>
                    <h1 className='text-center mt-2 '>Explore Our Projects</h1>

                    <marquee width="100%" direction="left" >
                        <div>
                            <ProjectCard />
                        </div>
                    </marquee>
                </div>
            </div>

            <div className="row mx-5">
                <h1 className='text-center'>Our Services</h1>
                <div className="col-lg-4">
                    <div className="card shadow p-5" style={{height:'470px' } }>
                        <h3 className=' text-center m-2'>Web Designing</h3>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum saepe error esse voluptates aperiam nihil cumque quo, laboriosam vitae? Omnis suscipit debitis ut at fugiat iste asperiores, aut minus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum saepe error esse voluptates aperiam nihil cumque quo, laboriosam vitae? Omnis suscipit debitis ut at fugiat iste asperiores, aut minus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum saepe error esse voluptates aperiam nihil cumque quo, laboriosam vitae? Omnis suscipit debitis ut at fugiat iste asperiores, aut minus!</p>
                     </div>
                </div>
                <div className="col-lg-4">
                <div className="card shadow p-5" style={{height:'470px' }}>
                        <h3 className=' text-center m-2'>Single Page Application</h3>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum saepe error esse voluptates aperiam nihil cumque quo, laboriosam vitae? Omnis suscipit debitis ut at fugiat iste asperiores, aut minus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum saepe error esse voluptates aperiam nihil cumque quo, laboriosam vitae? Omnis suscipit debitis ut at fugiat iste asperiores, aut minus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum saepe error esse voluptates aperiam nihil cumque quo, laboriosam vitae? Omnis suscipit debitis ut at fugiat iste asperiores, aut minus!</p>
                     </div>
                </div>
                <div className="col-lg-4">
                <div className="card shadow p-5" style={{height:'470px' } }>
                        <h3 className=' text-center m-2'>Backend Services</h3>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum saepe error esse voluptates aperiam nihil cumque quo, laboriosam vitae? Omnis suscipit debitis ut at fugiat iste asperiores, aut minus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum saepe error esse voluptates aperiam nihil cumque quo, laboriosam vitae? Omnis suscipit debitis ut at fugiat iste asperiores, aut minus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum saepe error esse voluptates aperiam nihil cumque quo, laboriosam vitae? Omnis suscipit debitis ut at fugiat iste asperiores, aut minus!</p>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Home