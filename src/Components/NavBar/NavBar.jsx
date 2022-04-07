import React, { useContext } from 'react';
import cartContext from '../../Context/cartContext'
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { BiCalendar } from "react-icons/bi";
import { GiPresent } from "react-icons/gi";

const NavBar = () => {

    const { calculateCantTotal } = useContext(cartContext)

    return (
        <main>
            <nav className="navbar navbar-expand-lg navbar-light nav-index">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>
                        <h3 className='logoWedding'>#FLU&MIYO</h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
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
