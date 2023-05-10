import React from 'react'
import msg from '../Asset/Images/msg.png'

export default function Leadership() {
    return (
        <div className='container py-5 my-5'>
            <div className='text-center '>
                <p style={{ color: "#909090" }} className='fs-6'> WHAT I PROVIDE FOR STUDENTS </p>
                <h2 className='fs-2'><span style={{ color: "#2658ce" }}>Leadership</span> and learning are<br /> indispensable to each other.</h2>
            </div>
            <div className='row pt-5'>
                <div className='col-md-4 col-sm-12'>
                    <div className='leader-box text-center'>
                        <img src={msg} width="100px" />
                        <h5> Seamless Scheduling</h5>
                        <p>We offer a range of training packages in a range of subject areas and can offer blended learning opportunities.</p>
                        <a href='/' className='text-decoration-none book-link'>Book A Session</a>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className='leader-box text-center'>
                        <img src={msg} width="100px" />
                        <h5> Seamless Scheduling</h5>
                        <p>We offer a range of training packages in a range of subject areas and can offer blended learning opportunities.</p>
                        <a href='/' className='text-decoration-none book-link'>Book A Session</a>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className='leader-box text-center'>
                        <img src={msg} width="100px" />
                        <h5> Seamless Scheduling</h5>
                        <p>We offer a range of training packages in a range of subject areas and can offer blended learning opportunities.</p>
                        <a href='/' className='text-decoration-none book-link'>Book A Session</a>
                    </div>
                </div>


            </div>
        </div>
    )
}
