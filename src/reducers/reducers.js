let defaultState = {
    window: 'avatar'
}

const ART = 'ART'
const AVATARS = 'AVATARS'

function mainReducer (state = defaultState, action) {
    switch(action.type) {
        case ART:
            return {
                ...state,
                window: 'art'
            }
        case AVATARS:
            return {
                ...state,
                window: 'avatars'
            }
        default:
            return {
                ...state
            }
    }
}

export default mainReducer