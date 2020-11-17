import { combineReducers } from 'redux'
import { SET_DATA_FROM_SERVICE, SET_ERROR_FROM_SERVICE, ORDER_DATA_BY_DATE, ORDER_DATA_BY_LOW_PRICE, ORDER_DATA_BY_HIGH_PRICE, LOADING, CLEANUP, SET_USER, SET_USER_ERROR } from '../actions/actions'

const data = (data = { data: [], loading: false }, action) => {

    if(action.type === SET_DATA_FROM_SERVICE) {
        return { 
            data: action.data.data, 
            loading: false, 
            recentFilter: false,
            lowFilter: false,
            highFilter: false 
        }
    }

    if(action.type === ORDER_DATA_BY_DATE) {
        return { 
            data: action.data.sort((a, b) => new Date(b.createDate) - new Date(a.createDate)), 
            recentFilter: true
        }
    }

    if(action.type === ORDER_DATA_BY_HIGH_PRICE) {
        return { 
            data: action.data.sort((a, b) => b.cost - a.cost),
            highFilter: true
        }
    }

    if(action.type === ORDER_DATA_BY_LOW_PRICE) {
        return { 
            data: action.data.sort((a, b) => a.cost - b.cost),
            lowFilter: true
        }
    }

    if(action.type === SET_ERROR_FROM_SERVICE) {
        return { data:[], error: "Can't get the data from the server" }
    }

    if(action.type === LOADING) return { data: [], loading: true }

    if(action.type === CLEANUP) return { data: [] }

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