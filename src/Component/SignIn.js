import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signInnAction  } from '../Store/Action/action'
import { Container, Header, Left, Body, Right, Title, Item, Input, Icon, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, View, Image, Text, Alert, TextInput, Button, ScrollView, TouchableOpacity , AppRegistry } from 'react-native';
// import { Dropdown } from 'react-native-material-dropdown';
class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
        render() {

        return (
            <View style={{ backgroundColor: '#F8F9FE', height: '100%', }}>
                <ScrollView>

                    <Header style={{ backgroundColor: '#2196F3' }}>
                        <Body>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, color: '#FFF' }}>SIGN IN </Text>
                            </TouchableOpacity>
                        </Body>
                        <Right>
                            <TouchableOpacity onPress={
                                () => {
                                    console.log('go to login page')
                                    this.props.navigation.navigate('signUp')
                                }
                            }>
                                <Text style={{ fontSize: 12, color: 'yellow' }}>CREATE AN ACCOUNT </Text>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <View style={styles.imageStye}>
                        {/* <Image
                            source={require('../Images/mage_splash_logo.png')}
                        /> */}
                    </View >
                    <View style={{ alignItems: 'center', margin: 18 }}>

                        <View style={styles.progressBar}>
                            <View style={styles.bar} />
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                        <Text>SIGN IN WITH YOUR MAGE ACCOUNT</Text>
                    </View>
                    <View style={styles.inputDiv}>
                        {/* <Text style={styles.inputText}>Email Address</Text> */}
                        <Item style={styles.input}>
                            <Input
                                onChangeText={(text) => {
                                    console.log(text)
                                    this.setState({ email: text })
                                }}
                                value={this.state.text}
                                placeholder="Email"
                                placeholderStyle={{ fontSize: 10 }}
                                placeholderTextColor="#B2B2B2"
                                style={{ marginLeft: "2%", fontSize: 15 }}
                            />
                            {/* <Icon name='school' style={styl.icons} /> */}
                            {/* <Image style={{ width: 24, height: 20, marginRight: '4%' }}
                                source={require('../Images/email_blue.png')}
                            /> */}
                        </Item>

                    </View>
                    <View style={styles.inputDiv}>
                        {/* <Text style={styles.inputText}>Confirm Password</Text> */}
                        <Item style={styles.input}>
                            <Input
                                onChangeText={(text) => {
                                    console.log(text)
                                    this.setState({ password: text })
                                }}
                                secureTextEntry={true}
                                value={this.state.text}
                                placeholder="Password"
                                placeholderStyle={{ fontSize: 10 }}
                                placeholderTextColor="#B2B2B2"
                                style={{ marginLeft: "2%", fontSize: 15 }}
                            />
                            {/* <Icon name='school' style={styl.icons} /> */}
                            {/* <Image style={{ width: 17, height: 26, marginRight: '4%' }}
                                source={require('../Images/lock_blueios.png')}
                            /> */}
                        </Item>
                    </View>
                    <View style={styles.inputDiv}>
                        <TouchableOpacity
                            style={styles.signUpBtn}
                            onPress={
                                    () => {
                                        this.props.getUserSignIn(this.state)
                                    }
                                }
                        >
                            <Text style={styles.signUpBtnTxt}
                                >SIGN IN </Text>
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
        getUserSignIn: (data) => {
            dispatch(signInnAction(data))
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

AppRegistry.registerComponent('SignIn', () => SignIn);
export default connect(mapStateToProp, mapDispatchToProp)(SignIn)