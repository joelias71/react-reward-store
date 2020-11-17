import { SET_USER, SET_USER_ERROR, ADD_USER_POINTS, SUBTRACT_USER_POINTS } from '../../actions/actions'

export const user = ( user = { name:'John Kite', points:0 }, action) => {

    if(action.type === SET_USER) {
        return { name: action.user.data.name, points: action.user.data.points }
    }

    if(action.type === ADD_USER_POINTS) {
        console.log(user, action)
        console.log({ name: user.name, points: user.points - action.user})
        return { name: user.name, points: user.points + action.user }
    }

    if(action.type === SUBTRACT_USER_POINTS) {
        return { name: user.name, points: user.points - action.user }
    }

    if(action.type === SET_USER_ERROR) return user

    return user
}