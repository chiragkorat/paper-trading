import React from 'react'
import logo1 from '../Asset/Images/l1.png'
import logo2 from '../Asset/Images/l2.png'
import logo3 from '../Asset/Images/l3.png'
import logo4 from '../Asset/Images/l4.png'
import logo5 from '../Asset/Images/l5.png'

export default function Logos() {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between py-5 my-5 logos-page'>
                <img src={logo1} />
                <img src={logo2} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo5} />
            </div>
        </div>
    )
}
