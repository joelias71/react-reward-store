import React from 'react'
import Banner from '../components/Banner'
import ProductListContainer from '../containers/ProductListContainer'

function Main({ text, bgImage, CardComponent, endpoint }) {

    return (
        <main>
            <Banner text={text} bgImage={bgImage} />
            <ProductListContainer CardComponent={CardComponent} endpoint={endpoint} />
        </main>
    )
}

export default Main
