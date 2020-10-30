import React from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import Card from '../components/Card'

function Home() {

    return (
        <main>
            <Banner text={'Electronics'} bgImage={'electronic'} />
            <ProductList CardComponent={Card} endpoint={'products'} />
        </main>
    )
}

export default Home
