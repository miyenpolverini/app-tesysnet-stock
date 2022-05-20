import React from 'react'
import './ItemIndex.scss'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const ItemIndex = () => {
    return (
        <div>

            <img className='img-inicio' alt='foto portada' src='https://res.cloudinary.com/dw94zgfgu/image/upload/v1648512794/WhatsApp_Image_2022-03-28_at_9.12.50_PM_kylitz.jpg'></img>
            <div className='img-fondo'></div>

            <div className='countdown-portada' uk-countdown="date: 2022-10-21T03:10:16+00:00">
                <div>
                    <div className="uk-countdown-number uk-countdown-days count-det"></div>
                </div>
                <span className='count-coma'>,</span>
                <div>
                    <div className="uk-countdown-number uk-countdown-hours count-det"></div>
                </div>
                <span className='count-puntos'>:</span>
                <div>
                    <div className="uk-countdown-number uk-countdown-minutes count-det"></div>
                </div>
                <span className='count-puntos'>:</span>
                <div>
                    <div className="uk-countdown-number uk-countdown-seconds count-det "></div>
                </div>
            </div>

            <h4 className='parrafo2-portada'>Te esperamos en la...</h4>
            <div className='parrafo2-div'>
                <div>
                    <h5 className='parrafo2-contenido'>CEREMONIA</h5>
                    <h6 className='parrafo2-contenido2'>....</h6>
                    <Link to={'/infoEvento'}>
                        <button className='botonLlegar'>
                            Como llegar<span className='btn-arrow'><IoIosArrowForward /></span>
                        </button>
                    </Link>
                </div>
                <div>
                    <h5 className='parrafo2-contenido'>FIESTA</h5>
                    <h6 className='parrafo2-contenido2'>JANOS HURLINGHAM</h6>
                    <Link to={'/infoEvento'}>
                        <button className='botonLlegar'>
                            Como llegar<span className='btn-arrow'><IoIosArrowForward /></span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='parrafo-portada'>
                <h6>Si queres regalarnos algo más que tu presencia en esta fecha...</h6>
                <Link to={'/regalos'}>
                    <button className='botonIrRegalo'>Hacé click acá</button>
                </Link>
            </div>
            <video className='video-portada' preload='auto' muted loop autoPlay src='https://video.wixstatic.com/video/11062b_7488edba38234bd69b0603ad498efdf5/720p/mp4/file.mp4'></video>
            <h5 className='tit-final'>¡Estamos muy contentos de poder compartir este día tan importante con ustedes!</h5>
            <img className='img-final' alt='foto final' src='https://res.cloudinary.com/dw94zgfgu/image/upload/v1648488802/Flu_miyo_na7vzr.png'></img>
        </div>
    )
}

export default ItemIndex
