import { 
    SET_DATA_FROM_SERVICE, 
    SET_ERROR_FROM_SERVICE, 
    ORDER_DATA_BY_DATE, 
    ORDER_DATA_BY_LOW_PRICE, 
    ORDER_DATA_BY_HIGH_PRICE, 
    LOADING, 
    CLEANUP 
} from '../../actions/actions'

export const data = (data = { data: [], loading: false, page:'products' }, action) => {

    if(action.type === SET_DATA_FROM_SERVICE) {
        return { 
            data: action.data.data,
            page: action.data.config.url,
            prevState: data
        }
    }

    if(action.type === ORDER_DATA_BY_DATE) {
        return { 
            data: action.data.data.sort((a, b) => new Date(b.createDate) - new Date(a.createDate)), 
            recentFilter: true,
            page: action.data.page
        }
    }

    if(action.type === ORDER_DATA_BY_HIGH_PRICE) {
        return { 
            data: action.data.data.sort((a, b) => b.cost - a.cost),
            highFilter: true,
            page: action.data.page
        }
    }

    if(action.type === ORDER_DATA_BY_LOW_PRICE) {
        return { 
            data: action.data.data.sort((a, b) => a.cost - b.cost),
            lowFilter: true,
            page: action.data.page
        }
    }

    if(action.type === SET_ERROR_FROM_SERVICE) {
        return { data:[], error: "Can't get the data from the server" }
    }

    if(action.type === LOADING) {
        return { data: [], loading: true, page: data.page }
    }

    if(action.type === CLEANUP) return { data: [] }

    return data
}
