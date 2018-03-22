import ActionTypes from '../Constant/constant';

const INITIAL_STATE = {
    userName: 'Bilal',
    userInfo : '',
    currentUser : [],
    allUsers : [],
    sendMessages : [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.USERNAME:
            return ({
                ...state,
                userName: action.payload
            })
        case ActionTypes.USERINFO:
            return ({
                ...state,
                userInfo: action.payload
            })
            case ActionTypes.ALLUSERS:
            return ({
                ...state,
                allUsers: action.payload
            })
            case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })
            case ActionTypes.USERSIGNIN:
            return ({
                ...state,
                userSignIn: action.payload
            })
             case ActionTypes.SENDMESSAGE:
            return ({
                ...state,
                sendMessages: action.payload 
            })
             case ActionTypes.UPDATEREQOBJ:
            state.sendMessages[action.payload] = action.updateVAl
            console.log(state.sendMessages[action.payload] , 'reducer after edit')
            return ({
                ...state,
                // sendMessages: action.payload 
            })
            case ActionTypes.NEWMESSAGE:
            return ({
                ...state,
                sendMessages: state.sendMessages.concat(action.payload)  
            })

        default:
            return state;
    }

}