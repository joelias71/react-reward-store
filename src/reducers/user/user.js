import { SET_USER, SET_USER_ERROR } from '../../actions/actions'

export const user = ( user = { name:'John Kite', points:0 }, action) => {

    if(action.type === SET_USER) {
        return { name: action.user.data.name, points: action.user.data.points }
    }

    if(action.type === SET_USER_ERROR) return user

    return user
}