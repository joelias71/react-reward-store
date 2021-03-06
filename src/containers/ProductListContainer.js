import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import { fetchData, orderDataByDate, orderDataByLowPrice, orderDataByHighPrice, subtractUserPoints } from '../actions/actions'

const mapStateToProps = ({ data }, ownProps) => {   

    let prevState = (data.prevState)? data.prevState.data : []
    let products = (data.page === ownProps.endpoint || data.loading)? data.data : prevState

    return {
            products: products,
            loading: data.loading,
            error: data.error,
            recentFilter: data.recentFilter,
            lowFilter: data.lowFilter,
            highFilter: data.highFilter
    }
}
  
const mapDispatchToProps = dispatch => ({
    fetchData: uri => dispatch(fetchData(uri)),
    orderDataByDate: data => dispatch(orderDataByDate(data)),
    orderDataByLowPrice: data => dispatch(orderDataByLowPrice(data)),
    orderDataByHighPrice: data => dispatch(orderDataByHighPrice(data)),
    subtractUserPoints: points => dispatch(subtractUserPoints(points))
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)


