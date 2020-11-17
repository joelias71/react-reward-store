import axios from '../data/axios'

export const SET_USER = 'SET_USER'
export const SET_USER_ERROR = 'SET_USER_ERROR'
export const SET_ERROR_FROM_SERVICE = 'SET_ERROR_FROM_SERVICE'
export const SET_DATA_FROM_SERVICE = 'SET_DATA_FROM_SERVICE'
export const ORDER_DATA_BY_DATE = 'ORDER_DATA_BY_DATE'
export const ORDER_DATA_BY_LOW_PRICE = 'ORDER_DATA_BY_LOW_PRICE'
export const ORDER_DATA_BY_HIGH_PRICE = 'ORDER_DATA_BY_HIGH_PRICE'
export const LOADING = 'LOADING'
export const CLEANUP = 'CLEANUP'

export const fetchData = uri => {
    return dispatch => {
        dispatch(loading())
        axios.get(uri)
        .then(response => dispatch(setDataFromService(response)))
        .catch(error => dispatch(setErrorFromService(error)))
    }
}

export const fetchUser = () => {
    return dispatch => {
        axios.get('user/me')
        .then(response => dispatch(setUser(response)))
        .catch(error => dispatch(setUserError(error)))
    }
}

export const setUser = user => {
    return {
        type: SET_USER,
        user
    }
}

export const setUserError = user => {
    return {
        type: SET_USER_ERROR,
        user
    }
}

export const setDataFromService = data => {
    return {
        type: SET_DATA_FROM_SERVICE,
        data
    }
}

export const orderDataByDate = data => {
    return {
        type: ORDER_DATA_BY_DATE,
        data
    }
}

export const orderDataByLowPrice = data => {
    return {
        type: ORDER_DATA_BY_LOW_PRICE,
        data
    }
}

export const orderDataByHighPrice = data => {
    return {
        type: ORDER_DATA_BY_HIGH_PRICE,
        data
    }
}

export const setErrorFromService = data => {
    return {
        type: SET_ERROR_FROM_SERVICE,
        data
    }
}

export const loading = data => {
    return {
        type: LOADING,
        data
    }
}

export const cleanup = () => {
    return {
        type: CLEANUP
    }
}