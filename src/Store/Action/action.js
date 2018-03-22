import ActionTypes from '../Constant/constant';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

export function userInfo(user) {
    console.log(user, 'action ')
    return dispatch => {
        console.log('user', user.emailAddress, user.password);
        firebase.database().ref('/').child("hello")
        firebase.auth().createUserWithEmailAndPassword(user.emailAddress, user.password)
            .then(function (createdUser) {
                console.log('signed up successfully', createdUser.uid);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + createdUser.uid + '/').set(user)
                    .then(() => {
                        firebase.database().ref('users/').once('value')
                            .then((userData) => {
                                let allUsers = userData.val();
                                let allUsersArr = [];
                                for (var key in allUsers) {
                                    allUsersArr.push(allUsers[key]);
                                }
                                let currentUserInf = {
                                    id: firebase.auth().currentUser.uid,
                                    name: user.username
                                }

                                console.log(currentUserInf)
                                dispatch(NavigationActions.navigate({ routeName: 'Login' }))
                                dispatch({ type: ActionTypes.USERINFO, payload: allUsersArr })
                                dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserInf })
                            })

                    })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}


export function signInnAction(users) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(users.email, users.password)
            .then((signedinUser) => {
                console.log('you are sign in')
                firebase.database().ref('users/').once('value')
                    .then((userData) => {
                        console.log('user in signin', users);
                        console.log(userData)
                        let allUsers = userData.val();
                        let currentUserUid = firebase.auth().currentUser.uid;
                        let allUsersArr = [];
                        for (var key in allUsers) {
                            allUsersArr.push(allUsers[key]);
                        }
                        console.log(allUsersArr , 'allUsersArray')
                        let userInfo = ''
                        allUsersArr.map((userId , ind)=>{
                            if( userId.uid === currentUserUid){
                                userInfo = userId
                            } 
                            console.log(userInfo , 'userInfo')
                        })
                        dispatch({ type: ActionTypes.USERINFO, payload: currentUserUid })
                        dispatch({ type: ActionTypes.USERNAME, payload: userInfo.userName })
                        firebase.database().ref('Messages/').once('value')
                            .then((allMsgsData) => {
                                let allMsgs = allMsgsData.val();
                                console.log(Object.keys(allMsgs), 'userSignInAction')
                                let allMsgsArr = [];
                                for (var key in allMsgs) {
                                    const oneMsg = allMsgs[key]
                                    oneMsg.id = key
                                    // console.log(oneMsg)
                                    // console.log(allMsgs[key] , 'oneMsgArr')
                                    allMsgsArr.push(oneMsg);
                                }
                               
                                // console.log(userInf, 'userInfo')
                                // console.log(allMsgsArr , 'action array')
                                dispatch({ type: ActionTypes.ALLUSERS, payload: allUsersArr })
                                dispatch({ type: ActionTypes.SENDMESSAGE, payload: allMsgsArr })
                                Actions.MakeCircle()
                            })
                    })
            })


    }
}
export function authWithFBorGoogle(credential) {
    return dispatch => {
        console.log(credential, 'credential');
        firebase.auth().signInWithCredential(credential).then(function (user) {
            console.log("Sign In Success", user);
        })
    }
}

export function sendRequest(obj) {
    return dispatch => {
        firebase.database().ref('Messages/').push(obj)
            .then(() => {
                firebase.database().ref('Messages/').limitToLast(1).on('child_added',
                    (data) => {
                        let msgObj = data.val();
                        msgObj.id = data.key;
                        console.log(msgObj, 'actionmsg')
                        dispatch({ type: ActionTypes.NEWMESSAGE, payload: msgObj })
                    })

            })
    }
}
export function updateReqObject(reqObj, senderObj) {
    return dispatch => {
        firebase.database().ref('Messages/').child(reqObj.id).set(reqObj)
        dispatch({ type: ActionTypes.UPDATEREQOBJ, payload: reqObj.ind, updateVAl: reqObj })
        firebase.database().ref('users/' + senderObj.uid + '/').set(senderObj)
            .then(() => {
                firebase.database().ref('users/').once('value')
                    .then((userData) => {
                        let allUsers = userData.val();
                        let allUsersArr = [];
                        for (var key in allUsers) {
                            allUsersArr.push(allUsers[key]);
                        }
                        let currentUserInf = {
                            id: firebase.auth().currentUser.uid,
                        }
                        dispatch({ type: ActionTypes.USERINFO, payload: allUsersArr })
                    })
            })
    }
}

