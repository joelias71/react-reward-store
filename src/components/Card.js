import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Button } from '@material-ui/core'
import { amountFormat } from '../util/format'

function Card({ product }) {

    const total = 500
    console.log(product)

    const validateMsg = () => {
        if(total < product.cost) {
            return( <div className='card__inner_normal__missing'>
                        <label>{`Te faltan ${amountFormat(product.cost-total)}`}</label>
                        <AttachMoneyIcon />
                    </div> )
        } else {
            return(
                <div className='card__inner_normal__shop'>
                    <LocalMallIcon />
                </div>
            )
        }
    }

    return (
        <div className='card'>
            <div className='card__inner'>
                <div className='card__inner_normal'>
                    { validateMsg() }
                    <img src={product.img.url} alt={product.name} />
                    <hr />
                    <p className='card__category' >{product.category}</p>
                    <p className='p.card__name' >{product.name}</p>
                </div>
                <div className='card__inner_hover'>
                    <div className='card__inner_hover__price' >
                        <p>{amountFormat(product.cost)}</p>
                        <AttachMoneyIcon />
                    </div>
                    { (total >= product.cost) && <Button>Agregar al carrito</Button> }
                </div>
            </div>
        </div>
    )
}

export default Card
