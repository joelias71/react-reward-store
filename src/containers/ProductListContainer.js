import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import { fetchData} from '../actions/actions'

const mapStateToProps = ({ data }) => {    
    return {
        products: data.data,
        loading: data.loading,
        error: data.error
    }
}
  
const mapDispatchToProps = dispatch => ({
    fetchData: uri => dispatch(fetchData(uri))
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)


