import React, { useState, useEffect } from 'react'
import axios from '../data/axios'
import Card from './Card'

function ProductList() {

    const [ products, setProducts ] = useState([])

    useEffect(() => {
        axios.get('products')
            .then(response => {
                setProducts(response.data) 
            }).catch(error => console.log(error))
    },[])

    const cardProductList = products.map(prod => <Card key={prod._id} product={prod} />)

    return (
        <div className='productListContainer' >
            { cardProductList }
        </div>
    )
}

export default ProductList
