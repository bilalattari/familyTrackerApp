import React, { Component } from 'react';
import { connect } from 'react-redux'   
import { Container, Header, Left, Body, Right, Title, Item, Input, Icon, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { userInfo } from '../Store/Action/action'
// import Camera from 'react-native-camera';
// import { Dropdown } from 'react-native-material-dropdown';
class SignUpPage extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = {
            
            userName: '',
            emailAddress: '',
            password: ''
        }
    }

    render() {
        const isInvalid =
            this.state.emailAddress ||
            this.state.password === '' ||
            this.state.userName === '' 
        return (
            <View style={{ backgroundColor: '#F8F9FE' }}>
                <ScrollView>

                    <Header style={{ backgroundColor: '#2196F5' }}>
                        <Body>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, color: '#fff' }}>CREATE AN ACCOUNT </Text>
                            </TouchableOpacity>
                        </Body>
                        <Right>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, color: 'yellow' }}>Sign In </Text>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    

                    <View style={styles.container}>
                     
                    </View>
                    <View style={styles.inputDiv}>
                        <Text style={styles.inputText}> Username</Text>
                        <Item style={styles.input}>
                            <Input
                                onChangeText={(text) => {
                                    console.log(text)
                                    this.setState({ userName: text })
                                }}
                                value={this.state.text}
                                placeholder="Username"
                                placeholderStyle={{ fontSize: 10 }}
                                placeholderTextColor="#b3b3b3"
                                style={{ marginLeft: "2%", fontSize: 15 }}
                            />

                        </Item>
                    </View>
                    <View style={styles.inputDiv}>
                        <Text style={styles.inputText}>Email Address</Text>
                        <Item style={styles.input}>
                            <Input
                                onChangeText={(text) => {
                                    console.log(text)
                                    this.setState({ emailAddress: text })
                                }}
                                value={this.state.text}
                                placeholder="Type Your Email"
                                placeholderStyle={{ fontSize: 10 }}
                                placeholderTextColor="#b3b3b3"
                                style={{ marginLeft: "2%", fontSize: 15 }}
                            />
                            {/* <Icon name='school' style={styl.icons} /> */}
                            
                        </Item>
                        <Item style={{
                            height: 50,
                            backgroundColor: '#ffffff',
                            borderColor: '#ffffff',
                            borderWidth: 2,
                            borderRadius: 30,
                            padding: 12,
                            elevation: 5,
                            marginTop: 18
                        }}>
                            <Input
                                onChangeText={(text) => {
                                    console.log(text)
                                    this.setState({ conEmailAddress: text })
                                }}
                                placeholder="Confirm Your Email"
                                placeholderStyle={{ fontSize: 10 }}
                                placeholderTextColor="#b3b3b3"
                                style={{ marginLeft: "2%", fontSize: 15 }}
                            />
                            {/* <Icon name='school' style={styl.icons} /> */}
                            
                        </Item>

                    </View>
                    <View style={styles.inputDiv}>
                        <Text style={styles.inputText}>Confirm Password</Text>
                        <Item style={styles.input}>
                            <Input
                                onChangeText={(text) => {
                                    console.log(text)
                                    this.setState({ password: text })
                                }}
                                secureTextEntry={true}
                                placeholder="Confirm Password"
                                placeholderStyle={{ fontSize: 10 }}
                                placeholderTextColor="#b3b3b3"
                                style={{ marginLeft: "2%", fontSize: 15 }}
                            />
                            {/* <Icon name='school' style={styl.icons} /> */}
                           
                        </Item>
                    </View>
                    <View style={styles.inputDiv}>
                        <TouchableOpacity
                            style={styles.signUpBtn}
                        >
                            <Text style={styles.signUpBtnTxt}
                                onPress={() => {
                                    this.props.getUserInfo(this.state)
                                    console.log(this.state)
                                }}
                            >JOIN MAGE </Text>
                        </TouchableOpacity>
                    </View> 
                </ScrollView>
            </View>
        )
    }
   
}
function mapStateToProp(state) {
    console.log(state, 'state')
    return ({

    })
}
function mapDispatchToProp(dispatch) {
    return ({
        getUserInfo: (data) => {
            dispatch(userInfo(data))
        }
    })
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 15,
        backgroundColor: '#5b85ef',
        height: 60,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
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
    imageStye: {
        alignItems: 'center',
        paddingTop: 15
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
    input: {
        height: 50,
        backgroundColor: '#FFFFFD',
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
        backgroundColor: '#2896ED',
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
AppRegistry.registerComponent('SignUpPage', () => SignUpPage);
export default connect(mapStateToProp, mapDispatchToProp)(SignUpPage)