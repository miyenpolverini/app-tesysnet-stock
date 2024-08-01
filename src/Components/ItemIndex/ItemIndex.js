import React, { useEffect } from 'react'
import './ItemIndex.scss'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { IoIosArrowForward } from "react-icons/io";
import Aos from 'aos';
/* import videoInvitacion from '../video/videoInvitacion.mp4'; */

const ItemIndex = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <div className='tit-stock'>
            CONTROL DE STOCK
        </div>
    )
}

export default ItemIndex
