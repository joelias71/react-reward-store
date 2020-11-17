import { combineReducers } from 'redux'
import { user } from './user/user'
import { data } from './products/data'

export default combineReducers({
    user,
    data
})