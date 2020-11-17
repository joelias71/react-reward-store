import { connect } from 'react-redux'
import Header from '../components/Header'
import { cleanup, fetchUser } from '../actions/actions'

const mapStateToProps = ({ user }) => {
    return {
        name: user.name,
        points: user.points
    }
}

const mapDispatchToProps = dispatch => ({
    cleanup: () => dispatch(cleanup()),
    fetchUser: () => dispatch(fetchUser())
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)


