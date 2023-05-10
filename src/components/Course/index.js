import React, { useState } from 'react'
import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import downArrow from '../Asset/Images/downArrow.png';
import upArrow from '../Asset/Images/upArrow.png';
import youtube from '../Asset/Images/youtube.png';


const step = [
    {
        courseName: "Full Forex Course",
        data: [
            {
                lessonName: "Intoduction"
            },
            {
                lessonName: "Understanding how the market works, and what market psychology is.",
                time: "6:31 min"
            },
            {
                lessonName: "How to use what you've learned in lesson 2 to the",
                time: "3:04 min"
            },
        ]
    },


]

const Course = () => {
    const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = React.useState(0);

    // const handleClick = () => {
    //     setOpen(!open);
    // };

    return (
        <div>
            <Header />
            <div className=' p-5' style={{ display: 'flex', alignItems: 'center', marginTop: "-50px" }}>
                <div className='row'>
                    <div className='col-md-8'>
                        {isActive == 0 ?
                            <div className='course-content'>
                                Welcome to SIC’s course on Forex trading! This course is designed to teach you about Forex trading and provide you with the necessary skills to trade independently. You’re going to learn the fundamental principles of Forex trading, including market analysis, risk management, and technical analysis. The host Sultan is an experienced forex trader who’s going to guide you through the intricacies of the Forex market, explaining complex concepts in a simple and understandable way. Whether you're an aspiring trader looking to get started in Forex, or an experienced trader seeking to improve your skills, this course will provide you with the tools you need to succeed in the competitive world of foreign exchange trading. So, if you're ready to take the next step in your trading career, click the following courses and start your journey towards Forex trading success!
                            </div>
                            : ''}
                        {isActive == 1 ?
                            <div>
                                {/* <video controls loop src="https://media.istockphoto.com/id/1363030919/video/people-working-at-stock-exchange.mp4?s=mp4-640x640-is&k=20&c=eRBOjK1QGK0WVrpshDQbZlZaZC__txVp-IwBb6HDtD8=" width='900px' height='600px'  ></video> */}
                                {/* <iframe width='800px' height='480px' src="https://www.youtube.com/v/dGLmFZAI40M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                                <iframe width='800px' height='480px' src="https://www.youtube.com/embed/dGLmFZAI40M">
                                </iframe>
                                <h6 className='pt-4 lh-lg'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                </h6>
                            </div>
                            : ''
                        }
                        {isActive == 2 ?
                            <div style={{ marginLeft: "h6" }}>
                                {/* <video controls loop src="https://media.istockphoto.com/id/1294396594/video/businesssman-using-chart-and-graph-to-trading-in-stock-and-cryptocurrency-after-blobal.mp4?s=mp4-640x640-is&k=20&c=E0_lczgGPshOBHhuSzK6u0n0ql8IuPWR6Gbg-L4afXk=" width='8' height='600px'  ></video> */}
                                {/* <iframe width='800px' height='480px' src="https://www.youtube.com/watch?v=VdL0e6PPCC4&feature=youtu.be" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                <iframe width='800px' height='480px' src="https://www.youtube.com/embed/VdL0e6PPCC4">
                                </iframe>
                                <h6 className='pt-4 lh-lg'>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                                </h6>
                            </div>
                            : ''
                        }
                        {isActive == 3 ?
                            <div>
                                {/* <video controls loop src="https://media.istockphoto.com/id/896267334/video/stock-market-concept.mp4?s=mp4-640x640-is&k=20&c=JHRY8BMevpxjGuE4ny46cChYn24ht8GwPPdPFM6RooA=" width='900px' height='600px'  ></video> */}
                                <iframe width='900px' height='480px' src="https://www.youtube.com/embed/e9_B11RS_gc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h6 className='pt-4 lh-lg'>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </h6>
                            </div>
                            : ''
                        }
                        {isActive == 4 ?
                            <div>
                                {/* <video controls loop src="https://media.istockphoto.com/id/1316521847/video/trading-on-stock-exchange.mp4?s=mp4-640x640-is&k=20&c=PZOkyfMgNIOAw9j1_3hXV1i25hyRI1z2dGkO20lRWZg=" width='900px' height='480px'  ></video> */}
                                <iframe width='900px' height='480px' src="https://www.youtube.com/embed/hZUMOKzeq8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h6 className='pt-4 lh-lg'>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </h6>
                            </div>
                            : ''
                        }
                    </div>
                    <div className='col-md-4'>
                        <div className='border h-80'>
                            {step.map((item, i) => (
                                <div key={i} className='px-3 py-2'>
                                    <h5 className='border-bottom d-flex justify-content-between' onClick={() => setOpen(i)
                                    }>
                                        <p style={{ cursor: "pointer" }}>{item.courseName}  </p>
                                        <p>{open == i ? <img src={upArrow} width='25px' /> : <img src={downArrow} width='25px' />}</p>
                                    </h5>
                                    {open == i &&
                                        <div >
                                            {item.data.map((dataitem, index) =>
                                            (
                                                <div key={i} >
                                                    <div onClick={() => {
                                                        setIsActive(index)
                                                    }}>
                                                        <p style={{ cursor: "pointer" }}>{dataitem.lessonName}</p>
                                                        {index != 0 && <p><img src={youtube} width='25px' />  {dataitem.time}</p>}
                                                    </div>
                                                </div>
                                            )
                                            )}
                                        </div>
                                    }
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Course

