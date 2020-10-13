import React from 'react'

function Card({ product }) {

    console.log(product)

    return (
        <div className='card'>
            <img src={product.img.url} alt={product.name} />
            <hr />
            <p className='card__category' >{product.category}</p>
            <p className='p.card__name' >{product.name}</p>
        </div>
    )
}

export default Card
