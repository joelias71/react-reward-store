import React from 'react'

function Card({ product }) {

    console.log(product)

    return (
        <div className='card'>
            <div className='card__inner'>
                <div className='card__inner_normal'>
                    <img src={product.img.url} alt={product.name} />
                    <hr />
                    <p className='card__category' >{product.category}</p>
                    <p className='p.card__name' >{product.name}</p>
                </div>
                <div className='card__inner_hover'>
                    
                </div>
            </div>
        </div>
    )
}

export default Card
