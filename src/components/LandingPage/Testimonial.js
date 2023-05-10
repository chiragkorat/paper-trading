import React, { useEffect, useState } from 'react'
import t1 from '../Asset/Images/t1.jpg'
import t2 from '../Asset/Images/t2.jpg'
import t3 from '../Asset/Images/t3.jpg'
import t4 from '../Asset/Images/t4.jpg'
import img1 from '../Asset/Images/prafullbhai.jpg'
import img2 from '../Asset/Images/jigabhai.jpg'
import boxbg from '../Asset/Images/testimonial-small.png'

export default function Testimonial() {
    const [sliderCount, setSliderCount] = useState([
        {
            image1: img1,
            content1: "The instructor has a very unique and easy way of explaining things and this makes the course even more interesting.",
            name1: "Vaibhav Parmar",
            position1: "Full Stack Developer and Forex student",
            image2: img2,
            content2: "The course is very good. It contains a lot valueable and the instructor's explanation are easy to follow. I like thik course.",
            name2: "Jignesh Korat",
            position2: "Project Manager",
        }])
    const [currentSlide, setCurrentSlide] = useState(0)


    return (
        <div className='testimonial'>
            <div className="container py-5">
                <div className="company-title pt-5  text-center">
                    <p style={{ color: "#909090" }} className='fs-6'>NOTHING IS IMPOSSIBLE, THE WORD ITSELF SAYS 'I'M POSSIBLE'!</p>
                    <h2 className='fs-2'>Reviews are enough to<br /> <span style={{ color: "#B5B8B8" }}>convince</span> people for now.</h2>
                </div>
                {
                    sliderCount.map((slide, i) =>
                        <div className="row" style={{ display: currentSlide == i ? "inline-flex" : "none", }}>
                            <div className="col-md-6 col-sm-12">
                                <div className="company-content d-flex align-items-start position-relative">
                                    <img src={boxbg} width='100px' className='box-bg' />
                                    <div>
                                        <img src={slide.image1} width='100px' style={{ borderRadius: "50%", marginRight: "15px" }} />
                                    </div>
                                    <div>
                                        <p className='fs-6 lh-base'>{slide.content1}</p>

                                        <div className="company-customer  d-flex">
                                            <div className="company-img">
                                                <img src="images/about-company.jpg" alt="" />
                                            </div>
                                            <div>
                                                <p style={{ color: "#B5B8B8", marginBottom: "0" }} className='fs-6 fw-bold'>{slide.name1}</p>
                                                <p style={{ color: "#909090" }} > student</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="company-content d-flex align-items-start position-relative">
                                    <img src={boxbg} width='100px' className='box-bg' />
                                    <div>
                                        <img src={slide.image2} width='100px' style={{ borderRadius: "50%", marginRight: "15px" }} />
                                    </div>
                                    <div>
                                        <p className='fs-6 lh-base'>{slide.content2}</p>

                                        <div className="company-customer  d-flex">
                                            <div className="company-img">
                                                <img src="images/about-company.jpg" alt="" />
                                            </div>
                                            <div>
                                                <p style={{ color: "#B5B8B8", marginBottom: "0" }} className='fs-6 fw-bold'>{slide.name2}</p>
                                                <p style={{ color: "#909090" }} > Project Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                }
                {/* {
                    sliderCount.map((slide, i) =>
                      
                            <img src={i == currentSlide ? dot1 : dot2} width='15px' style={{margin:"0 5px"}} />
                       
                    )
                }                 */}
            </div>
        </div>
    )
}
