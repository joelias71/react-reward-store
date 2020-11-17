import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import { fetchData, orderDataByDate, orderDataByLowPrice, orderDataByHighPrice } from '../actions/actions'

const mapStateToProps = ({ data }) => {    
    return {
        products: data.data,
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
    orderDataByHighPrice: data => dispatch(orderDataByHighPrice(data))
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)


