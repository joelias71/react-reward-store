import React, { useState, useEffect } from 'react'
import axios from '../data/axios'
import Card from './Card'
import Pagination from '@material-ui/lab/Pagination'
import usePagination from './usePagination'

function ProductList() {

    const [ products, setProducts ] = useState([])
    const [page, setPage] = useState(1)
    const PER_PAGE = 12

    const count = Math.ceil(products.length / PER_PAGE)
    const _DATA = usePagination(products, PER_PAGE)

    const handleChange = (e, p) => {
        setPage(p)
        _DATA.jump(p)
    }


    useEffect(() => {
        axios.get('products')
            .then(response => {
                setProducts(response.data) 
            }).catch(error => console.log(error))
    },[])

    const cardProductList = _DATA.currentData().map(prod => <Card key={prod._id} product={prod} />)

    return (
        <>
            <div className='productListContainer' >
                { cardProductList }
            </div>
            <div className='productPagination' >
                <Pagination 
                    count={count}
                    size="large" 
                    page={page}
                    shape="rounded"
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default ProductList
