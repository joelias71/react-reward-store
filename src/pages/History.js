import React from 'react'
import ProductList from '../components/ProductList'
import HistoryCard from '../components/HistoryCard'
import Banner from '../components/Banner'

function History() {

    return (
        <main>
            <Banner text={'History'} bgImage={'shop'} />
            <ProductList CardComponent={HistoryCard} endpoint={'user/history'} />
        </main>
    )
}

export default History
