import React from 'react'
import { amountFormat } from '../util/format'

function RedeemProduct({ product }) {
    
    return (
        <div className='redeem'>
            <p>Are you sure that you want to redeem this product ?</p>
            <div className='redeem__product'>
                <img src={product.img.url} alt={product.name} />
                <div className='redeem__product__info'>
                    <p>{`Product: ${product.name}`}</p>
                    <p>{`Price: $${amountFormat(product.cost)}`}</p>
                </div>
            </div>
        </div>
    )
}

export default RedeemProduct
