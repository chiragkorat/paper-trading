import React from 'react'
import counter from '../Asset/Images/counter.png'

export default function Counter() {
    return (
        <div className='counter'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='pt-4'>
                            <h2>People don't only use a coach when there is a problem with technique; they understand that no matter how good their technique is, there is always room for <span style={{ color: "#2658ce" }}>improvement</span></h2>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='d-flex align-items-center'>
                                        <h2 style={{color:"#2aaa94"}} className='fw-bold display-3 pe-2'>420</h2>
                                        <p>SETISFIED <br/> CUSTOMERS</p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='d-flex align-items-center'>
                                        <h2 style={{color:"#2aaa94"}} className='fw-bold display-3 pe-2'>77</h2>
                                        <p>PROJECT <br/> FINISHED</p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='d-flex align-items-center'>
                                        <h2 style={{color:"#2aaa94"}} className='fw-bold display-3 pe-2'>55</h2>
                                        <p>AWARDS <br/> WINNING</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='counter-img'>
                            <img src={counter} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
