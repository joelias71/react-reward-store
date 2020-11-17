import React, { useState, useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import usePagination from './usePagination'
import Modal from './Modal'
import { Button } from '@material-ui/core'
import RedeemProduct from './RedeemProduct'
import ReactLoading from 'react-loading'

function ProductList({ CardComponent, endpoint, fetchData, products, loading, recentFilter, lowFilter, highFilter, orderDataByDate, orderDataByLowPrice, orderDataByHighPrice }) {

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

    const productsPerPage = () => {
        if(products.length === 0) return 0
        if(_DATA.maxPage === page) return products.length
        return PER_PAGE * page
    }

    useEffect(() => {
        fetchData(endpoint)
    },[fetchData, endpoint])

    const cardProductList = () => {
        if(loading) {
            return <ReactLoading type={'spin'} color={'#232f3e'} height={100} width={100} className={'custom_spinner'} />
        } else {
            return _DATA.currentData().map((prod,index) => {
                return <CardComponent 
                            key={index} 
                            product={prod} 
                            setRedeemProduct={setRedeemProduct}
                            redeemModal={() => setIsOpen(true)}/>
            })
        }
    }

    return (
        <>
            <div className='productListHeader' >
                <div className='productListHeader__filter' >
                    <p>{`${productsPerPage()} of ${products.length} products | Sort by : `}</p>
                    {endpoint==='user/history' && <Button className={recentFilter ? 'active' : ''} onClick={() => orderDataByDate(products)} >
                        Most recent
                    </Button>}
                    <Button className={lowFilter ? 'active' : ''} onClick={() => orderDataByLowPrice(products)} >
                        Lowest price
                    </Button>
                    <Button className={highFilter ? 'active' : ''} onClick={() => orderDataByHighPrice(products)} >
                        Highest price
                    </Button>
                </div>
                <hr/>
            </div>
            <div className='productListContainer' >
                { cardProductList() }
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
