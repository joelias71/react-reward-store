import React, { useState, useEffect } from 'react'
import axios from '../data/axios'
import Pagination from '@material-ui/lab/Pagination'
import usePagination from './usePagination'
import { Button } from '@material-ui/core'

function ProductList({ CardComponent, endpoint }) {

    const [ products, setProducts ] = useState([])
    const [page, setPage] = useState(1)
    const [recentFilter, setRecentFilter] = useState(false)
    const [lowFilter, setLowFilter] = useState(false)
    const [highFilter, setHighFilter] = useState(false)
    const PER_PAGE = 12
    const count = Math.ceil(products.length / PER_PAGE)
    const _DATA = usePagination(products, PER_PAGE)

    const handleChange = (e, p) => {
        setPage(p)
        _DATA.jump(p)
    }

    const productsPerPage = () => {
        if(products.length === 0) return 0
        if(_DATA.maxPage === page) return products.length
        return PER_PAGE * page
    }

    const setFilters = (recent, low, high) => {
        setRecentFilter(recent)
        setLowFilter(low)
        setHighFilter(high)
    }

    const filterListBy = value => {
        if(value === 'recent') {
            setFilters(true, false, false)
        } else if(value === 'low') {
            setFilters(false, true, false)
        } else if(value === 'high') {
            setFilters(false, false, true)
        }
    }

    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                setProducts(response.data) 
            }).catch(error => console.log(error))
    },[endpoint])

    const cardProductList = _DATA.currentData().map((prod,index) => <CardComponent key={index} product={prod} />)

    return (
        <>
            <div className='productListHeader' >
                <div className='productListHeader__filter' >
                    <p>{`${productsPerPage()} of ${products.length} products | Sort by : `}</p>
                    <Button className={recentFilter ? 'active' : ''} onClick={() => filterListBy('recent')} >
                        Most recent
                    </Button>
                    <Button className={lowFilter ? 'active' : ''} onClick={() => filterListBy('low')} >
                        Lowest price
                    </Button>
                    <Button className={highFilter ? 'active' : ''} onClick={() => filterListBy('high')} >
                        Highest price
                    </Button>
                </div>
                <hr/>
            </div>
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
