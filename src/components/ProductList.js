import React, { useState, useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import usePagination from './usePagination'
import Modal from './Modal'
import Filter from './Filter'
import RedeemProduct from './RedeemProduct'

function ProductList({ CardComponent, endpoint, fetchData, products, loading, error }) {

    const [redeemProduct, setRedeemProduct] =useState({})
    const [page, setPage] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    const PER_PAGE = 12
    const count = Math.ceil(products.length / PER_PAGE)
    const _DATA = usePagination(products, PER_PAGE)

    const handleChange = (e, p) => {
        setPage(p)
        _DATA.jump(p)
    }

    useEffect(() => {
        fetchData(endpoint)
    },[fetchData, endpoint])

    const cardProductList = _DATA.currentData().map((prod,index) => {
        return <CardComponent 
                    key={index} 
                    product={prod} 
                    setRedeemProduct={setRedeemProduct}
                    redeemModal={() => setIsOpen(true)}/>
    })

    return (
        <>
            <div className='productListHeader' >
                <Filter data={_DATA} page={page} perPage={PER_PAGE} products={products} />
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
            <Modal 
                open={isOpen} 
                onClose={() => setIsOpen(false)}
                title='Redeem product'
                approvalBtnTxt='Redeem' >
                <RedeemProduct product={redeemProduct} />
            </Modal>
        </>
    )
}

export default ProductList
