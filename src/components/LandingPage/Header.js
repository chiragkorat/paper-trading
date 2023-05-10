
import React from 'react';
import logo from '../Asset/Images/logo.png'
import search from '../Asset/Images/search.png'
import shoppingcart from '../Asset/Images/shopping-cart.png'
import user from '../Asset/Images/user.png'


const Header = () => {

    return (
        <div >
            <div className="container">
                <nav>
                    <div className="menu d-flex justify-content-between align-items-center py-3">
                        <img src={logo} width="120px" className='logo' />
                        <ul className="d-flex list-unstyled me-5 pe-5">
                            <li><a href="/" className="text-decoration-none"
                                onClick={() => window.open('/')}>Home</a></li>
                            <li><a href="/dashboard" className="text-decoration-none"
                                onClick={() => window.open('/chart')}>Chart</a>
                            </li>
                            <li className="dropdown">
                                <a className="text-decoration-none"
                                    onClick={() => window.open('/course')}>Course</a>
                            </li>
                            <li className="dropdown  me-5">
                                <a href="#blog" className="text-decoration-none me-5">Blog</a>
                            </li>
                            {/* <li className="dropdown">
                                <a href="/" className="text-decoration-none"></a> */}
                            {/* <div className="dropdown-menu ">
                                    <ul className='list-unstyled'>
                                        <li><a href="/" className="text-decoration-none list-unstyled">Events Grid</a></li>
                                        <li><a href="/" className="text-decoration-none list-unstyled">Events List</a></li>
                                        <li><a href="/" className="text-decoration-none list-unstyled">Events Mesonary</a></li>
                                        <li><a href="/" className="text-decoration-none list-unstyled">Events Minimal</a></li>
                                        <li><a href="/" className="text-decoration-none list-unstyled">Events Singla</a></li>
                                    </ul>
                                </div> */}
                            {/* </li> */}
                        </ul>
                        <div className="cart d-flex" >
                            {/* <span className="call">
                                <a href='/'><img src={shoppingcart} width="30px" className='me-3' /></a>
                                <a href='/'><img src={user} width="30px" className='me-3' /></a>
                                <a href='/'><img src={search} width="30px" className='me-3' /></a>
                            </span> */}
                        </div>
                    </div>
                </nav>
            </div >
        </div >

    );
}
export default Header