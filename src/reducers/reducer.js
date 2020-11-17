import { combineReducers } from 'redux'
import { SET_DATA_FROM_SERVICE, SET_ERROR_FROM_SERVICE, LOADING, CLEANUP, SET_USER, SET_USER_ERROR } from '../actions/actions'

const data = (data = { data: [], loading: false }, action) => {

    if(action.type === SET_DATA_FROM_SERVICE) {
        return { data: action.data.data, loading: false }
    }

    if(action.type === SET_ERROR_FROM_SERVICE) {
        return { data:[] , loading:false, error: "Can't get the data from the server" }
    }

    if(action.type === LOADING) return { data: [], loading: true }

    if(action.type === CLEANUP) return { data: [], loading: false }

    return data
}

const user = ( user = { name:'John Kite', points:0 }, action) => {

    if(action.type === SET_USER) {
        return { name: action.user.data.name, points: action.user.data.points }
    }

    if(action.type === SET_USER_ERROR) return user

    return user
}

export default combineReducers({
    data,
    user
})