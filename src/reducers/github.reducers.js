import {GITHUB_PROFILES} from '../actions/github.actions'

let initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case GITHUB_PROFILES:
            return [...state, ...action.payload]
        default:
            return state
    }
}