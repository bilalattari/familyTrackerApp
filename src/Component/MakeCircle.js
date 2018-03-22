import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Header, Left, Body, List, ListItem, Thumbnail, Right, Title, Item, Input, Icon, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { sendRequest, updateReqObject } from '../Store/Action/action'
class MakeCircle extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            requestObj: '',
            senderObj: '',
            modalVisible: false,
            sendRequest: false
        }
    }
    componentDidMount() {
        this.props.allMsgs.map((msgs, key) => {
            if (msgs.receiever === this.props.userInfo.uid) {
                const msgObj = msgs
                msgObj.ind = key
                console.log(msgObj)
                this.props.allUsers.map((user, key) => {
                    if (user.uid === msgObj.senderUid) {

                        this.setState({
                            modalVisible: true,
                            requestObj: msgObj,
                            senderObj: user
                        })
                        console.log(this.state, 'makeCircleaction')
                    }
                })
            }
        })
    }
    sendRequest(uid, reecNam) {
        console.log(this.props.userInfo, 'send')
        // console.log(uid, 'uid')
        console.log(this.props.userInfo, 'senderuid')
        const reqObj = {
            senderUid: this.props.userInfo,
            receiever: uid,
            receiverName: reecNam,
            senderName: this.props.userName,
            receiveMsg: false
        }

        this.props.sendUsersRequest(reqObj)


    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.allMsgs, 'willReceiveProps')
        nextProps.allMsgs.map((msgs, key) => {
            if (msgs.receiever === this.props.userInfo.uid) {
                const msgObj = msgs
                msgObj.ind = key
                console.log(msgObj)
                this.props.allUsers.map((user, key) => {
                    if (user.uid === msgObj.receiever) {

                        this.setState({
                            modalVisible: true,
                            requestObj: msgObj,
                            senderObj: user
                        })
                    }
                })
            }
        })
    }
    requestAccepted() {
        const updRequestObj = this.state.requestObj
        updRequestObj.receiveMsg = true
        console.log(updRequestObj, 'updReqObj')
        this.props.updateReqObject(updRequestObj , this.state.senderObj)
        
        this.setState({
            modalVisible: false
        })
    }
    requestDenied() {

    }


    render() {
        // console.log(this.props.allUsers , 'allUsers')
        // console.log(this.props.allMsgs , 'sadhasdkjhdsakjhdasjkhkj')
        return (
            <View style={{ backgroundColor: '#F8F9FE', height: '100%', }}>
                <ScrollView>

                    <Header style={{ backgroundColor: '#2196F3' }}>
                        <Body>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 18, color: '#FFF' }}>All Users </Text>
                            </TouchableOpacity>
                        </Body>
                        <Right>
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center', alignItems: 'center',
                                    height: 40, backgroundColor: '#fff', width: 80,
                                    borderRadius: 6
                                }}
                                onPress={
                                    () => {
                                        console.log('go to login page')
                                        this.props.navigation.navigate('signUp')
                                    }
                                }>
                                <Text style=
                                    {{
                                        fontSize: 14, color: 'black',
                                    }}>
                                    Circle </Text>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            alert('Modal has been closed.');
                        }}
                        style={styles.modal} >
                        <View style={{ marginTop: 22 }}>
                            <View Style={{
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 24,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '50%',
                                    marginRight: 29,
                                    marginLeft: 29
                                }}>{this.state.requestObj.senderName} wants to include you in his Circle
                                </Text>

                                <TouchableOpacity
                                    style={{
                                        marginTop: 20,
                                        paddingTop: '5%',
                                        paddingBottom: 20,
                                        backgroundColor: '#2896ED',
                                        borderRadius: 30,
                                        borderWidth: 1,
                                        width: '20%',
                                        borderColor: '#fff',
                                        marginHorizontal: 25
                                    }}
                                    onPress={this.requestAccepted.bind(this)}>
                                    <Text style={{
                                        textAlign: 'center',
                                        color: 'black',
                                        fontWeight: 'bold'

                                    }}>Join Circle</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        marginTop: 20,
                                        paddingTop: '5%',
                                        paddingBottom: 20,
                                        backgroundColor: '#2896ED',
                                        borderRadius: 30,
                                        borderWidth: 1,
                                        width: '20%',
                                        borderColor: '#fff',
                                        marginHorizontal: 25
                                    }}
                                    onPress={this.requestDenied.bind(this)}>
                                    <Text style={{
                                        textAlign: 'center',
                                        color: 'black',
                                        fontWeight: 'bold'

                                    }}>Join Circle</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <List>
                        {
                            this.props.allUsers.map((data, index) => {
                                return (


                                    <ListItem key={index}>
                                        <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
                                        <Body>
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 16,
                                                color: '#525354'
                                            }}>{data.userName}</Text>
                                            <Text note>Its time to build a difference . .</Text>
                                        </Body>
                                        <Right>


                                            <TouchableOpacity style={{
                                                backgroundColor: '#475770',
                                                height: 35,
                                                width: 58,
                                                borderRadius: 6,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                                onPress={this.sendRequest.bind(this, data.uid, data.userName)}
                                            >
                                                <Text style={{ color: '#fff' }}>
                                                    Add
                                                    </Text>
                                            </TouchableOpacity>

                                        </Right>
                                    </ListItem>

                                )
                            })
                        }

                    </List>
                </ScrollView>
            </View>
        )
    }
}
function mapStateToProp(state) {
    console.log(state, 'state')
    return ({
        allUsers: state.root.allUsers,
        userInfo: state.root.userInfo,
        allMsgs: state.root.sendMessages,
        userName : state.root.userName
    })
}
function mapDispatchToProp(dispatch) {
    return ({

        sendUsersRequest: (data) => {
            dispatch(sendRequest(data))
        },
        updateReqObject: (reqObj, senderObj) => {
            dispatch(updateReqObject(reqObj, senderObj))
        }

    })
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 15,
        backgroundColor: '#5b85ef',
        height: 60,
    },
    headerSignIn: {
        color: '#fff',
        fontSize: 14,
        color: 'blue',
        textAlign: 'right',
        marginRight: 16,
        fontWeight: 'bold'

    },
    headerCreateAcc: {
        color: '#fff',
        fontSize: 14,
        color: 'blue',
        textAlign: 'right',
        marginLeft: 16,
        fontWeight: 'bold'
    },
    bar: {
        width: 112,
        height: 8,
        backgroundColor: "#2a79f9",
        borderRadius: 4
        // marginTop: 20,
    },
    progressBar: {
        width: 112,
        height: 8,
        backgroundColor: "lightgray",
        borderRadius: 4,
        marginTop: 20
    },
    imageStye: {
        alignItems: 'center',
        marginTop: '10%',
    },
    inputText: {
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 5,
    },
    inputDiv: {
        margin: 8,
        padding: 2,
        marginRight: 28,
        marginLeft: 28,
    },
    modal: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        backgroundColor: '#FFFFFF',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 30,
        padding: 12,
        elevation: 7,

    },
    signUpBtn: {
        // marginRight: 40,
        // marginLeft: 40,
        // marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#2394F3',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff'
    },
    signUpBtnTxt: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
})

// AppRegistry.registerComponent('SignIn', () => SignIn);
export default connect(mapStateToProp, mapDispatchToProp)(MakeCircle)