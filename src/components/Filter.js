import React, { useState } from 'react'
import { Button } from '@material-ui/core'

function Filter({ data, products, page, perPage }) {

    const [recentFilter, setRecentFilter] = useState(false)
    const [lowFilter, setLowFilter] = useState(false)
    const [highFilter, setHighFilter] = useState(false)

    const productsPerPage = () => {
        if(products.length === 0) return 0
        if(data.maxPage === page) return products.length
        return perPage * page
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

    return (
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
    )
}

export default Filter
