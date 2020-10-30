import React from 'react'
import {getTextDate} from '../util/format'

function HistoryCard({ product }) {

    /** Error in the API, the endpoint change for the images, 
     * but the owner of the API din't make the change for this 
     * endpoint. Temporaly fixed doing this replace */
    const imgUrl = product.img.url.replace('aerolab-challenge.now.sh','coding-challenge-api.aerolab.co')

    return (
        <div className='historyCard'>
            <img src={imgUrl} alt={product.name} />
            <div className='historyCard__info'>
                <p className='historyCard__info__name'>{product.name}</p>
                <p className='historyCard__info__category'>{product.category}</p>
                <p className='historyCard__info__date'>{`Buyed on : ${getTextDate(product.createDate)}`}</p>
            </div>
        </div>
    )
}

export default HistoryCard
