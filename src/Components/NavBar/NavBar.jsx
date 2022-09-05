import React, { useContext, useState } from 'react';
import cartContext from '../../Context/cartContext'
import { Link } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './NavBar.scss';
import { BiCalendar } from "react-icons/bi";
import { GiPresent, GiConfirmed } from "react-icons/gi";
import { Fade as Hamburger } from 'hamburger-react'

const NavBar = () => {

    const { calculateCantTotal } = useContext(cartContext)
    const [isOpen, setOpen] = useState(false)

    return (
        <main>
            <nav className="navbar navbar-expand-lg navbar-light nav-index">
                <div className="container-fluid">
                    <HashLink className="navbar-brand" to={'/home#'}>
                        <h3 className='logoWedding'>#FLÚ & MIYO</h3>
                    </HashLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <Hamburger rounded size={22} distance="lg" duration={0.8} toggled={isOpen} toggle={setOpen} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <NavHashLink className="active menu-boot" to='/home#formulario-asistencia'>
                                <div className='icon-calendar'>
                                    <GiConfirmed />
                                </div>
                                <div>
                                    <p className='info'>ASISTENCIA</p>
                                </div>
                            </NavHashLink>
                            <Link className="active menu-boot" to={'/regalos'}>
                                <div className='icon-calendar'>
                                    <GiPresent />
                                </div>
                                <div>
                                    <p className='info'>REGALOS</p>
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
