import React from 'react'
import './PurchaseCompleted.scss'
import { useClipboard } from 'react-haiku';

const PurchaseCompleted = () => {

    const clipboard = useClipboard({ timeout: 1000 })
    const clipboard2 = useClipboard({ timeout: 1000 })

    return (
        <div className='container-compra'>
            <h4 className='detail-compra-tit'>¡Ya podés hacer la transferencia bancaria para concretar tu regalo!</h4>
            <h5 className='detail-compra mt-5'>Titular</h5>
            <h6 className='detail-compra-info'>Miyén Polverini/Florencia Palmieri</h6>
            <h5 className='detail-compra mt-3'>Banco</h5>
            <h6 className='detail-compra-info'>BBVA</h6>
            <h5 className='detail-compra mt-3'>Tipo de cuenta</h5>
            <h6 className='detail-compra-info'>Caja de Ahorro</h6>
            <h5 className='detail-compra mt-3'>DNI</h5>
            <h6 className='detail-compra-info'>33906065</h6>
            <h5 className='detail-compra mt-3'>CUIL/CUIT</h5>
            <h6 className='detail-compra-info'>20339060658</h6>
            <h5 className='detail-compra mt-3'>CBU</h5>
            <div className='container-clip' >
                <h6 className='detail-compra-cbu'>0170999940000027467835</h6>
                <button className='btn-copy' onClick={() => clipboard.copy('0170999940000027467835')}>
                    {clipboard.copied ? 'Copied' : 'Copy'}
                </button>
            </div>
            <h5 className='detail-compra mt-3'>Alias</h5>
            <div className='container-clip'>
                <h6 className='detail-compra-alias'>miyoflu</h6>
                <button className='btn-copy' onClick={() => clipboard2.copy('miyoflu')}>
                    {clipboard2.copied ? 'Copied' : 'Copy'}
                </button>
            </div>
        </div>
    )
}

export default PurchaseCompleted
