import { connect } from 'react-redux'
import AddCoins from '../pages/AddCoins'
import { addUserPoints } from '../actions/actions'
 
const mapDispatchToProps = dispatch => ({
    addUserPoints: points => dispatch(addUserPoints(points))
})
  
export default connect(
    null,
    mapDispatchToProps
)(AddCoins)