import React, { useContext, useState } from 'react';
import cartContext from '../../Context/cartContext'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavBar.scss';
import { BiCalendar } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import { Fade as Hamburger } from 'hamburger-react'
import logo from '../../logotesys.png'

const NavBar = () => {

    const { calculateCantTotal } = useContext(cartContext)
    const [isOpen, setOpen] = useState(false)

    return (
        <main>
            <nav className="navbar navbar-expand-lg navbar-light nav-index">
                <div className="container-fluid">
                    <HashLink className="navbar-brand" to={'/home#'}>
                        <img src={logo} alt="logo principal" className="img-responsive" />
                    </HashLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <Hamburger rounded size={22} distance="lg" duration={0.8} toggled={isOpen} toggle={setOpen} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <Link className="active menu-boot" to={'/stock'}>
                                <div className='icon-calendar'>
                                    <FaBoxOpen />
                                </div>
                                <div>
                                    <p className='info'>STOCK</p>
                                </div>
                            </Link>
                            <Link className="active menu-boot" to={'/agregar-producto'}>
                                <div className='icon-calendar'>
                                    <MdAddToPhotos />
                                </div>
                                <div>
                                    <p className='info'>AGREGAR PRODUCTO</p>
                                </div>
                            </Link>
                            <Link className="active menu-boot" to={'/infoEvento'}>
                                <div className='icon-calendar'>
                                    <BiCalendar />
                                </div>
                                <div>
                                    <p className='info'>INFO DE EVENTOS</p>
                                </div>
                            </Link>
                            <Link className="active menu-boot" to={'/cart'}>
                                <div>
                                    <h5 className='cantCarrito'>{calculateCantTotal()}</h5>
                                </div>
                                <div>
                                    <p className='info'>MIS REGALOS</p>
                                </div>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </main>
    )
}

export default NavBar;
