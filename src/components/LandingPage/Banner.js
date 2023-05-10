import React from 'react'
import banner1 from "../Asset/Images/banner1.png"
import banner2 from "../Asset/Images/contect2.png"
import bannersmallimg from "../Asset/Images/banner-small-img.png"

export default function Banner() {
    return (
        <div>
            <div className='banner'>
                <div className='container d-flex align-items-center pt-5'>
                    <div className='mt-5'>
                        <h5 className='text-light' style={{ letterSpacing: "3px" }}>Successful people come from <span style={{ color: "#B5B8B8", fontSize: "30px" }}> <b>Successful</b></span> teachers </h5>
                        <h2 className='display-3 fw-bold text-light py-3'>We only post
                            <span style={{ color: "#B5B8B8" }}> Good Courses</span>

                            <br />
                            &<span style={{ color: "#B5B8B8" }}> Nothing</span> else.

                            {/* 
                            We only post the best
                            <br />
                            quality courses & nothing */}
                        </h2>
                        <p className='text-light fs-5 ps-3 ' style={{ borderLeft: "3px solid #ffff" }}>To find out more about our courses, click the courses<br /> button on the top of the website.<br /> <span style={{ color: "#B5B8B8", fontSize: "30px" }}> <b>Happy Learning! </b></span></p>
                    </div>
                    <div className='position-relative '>
                        <div className='banner-girl-img'>
                            {/* <img src={banner1} /> */}
                        </div>
                        <div className='banner-right-img ps-5'>
                            {/* <img src={banner2} width="90px" height='90px' /> */}
                        </div>
                        <div className='banner-small-img'>
                            {/* <img src={bannersmallimg} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
