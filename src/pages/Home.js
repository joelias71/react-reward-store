import React, { useEffect } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import axios from '../data/axios'

function Home() {
    
    useEffect(() => {
        axios.get('products')
            .then(response => console.log(response))
            .catch(error => console.log(error))
    })

    return (
        <main>
            <Header />
            <Banner />
            <Footer />
        </main>
    )
}

export default Home
