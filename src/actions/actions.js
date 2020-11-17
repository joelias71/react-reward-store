import axios from '../data/axios'

export const SET_ERROR_FROM_SERVICE = 'SET_ERROR_FROM_SERVICE'
export const SET_DATA_FROM_SERVICE = 'SET_DATA_FROM_SERVICE'
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

export const setDataFromService = data => {
    return {
        type: SET_DATA_FROM_SERVICE,
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