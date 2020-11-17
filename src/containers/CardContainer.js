import { connect } from 'react-redux'
import Card from '../components/Card'

const mapStateToProps = ({ user }) => {
    return {
        total: user.points
    }
}
export default connect(
    mapStateToProps,
)(Card)


