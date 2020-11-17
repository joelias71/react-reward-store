import { connect } from 'react-redux'
import Header from '../components/Header'
import { cleanup } from '../actions/actions'
  
const mapDispatchToProps = dispatch => ({
    cleanup: () => dispatch(cleanup())
})
  
export default connect(
    null,
    mapDispatchToProps
)(Header)


