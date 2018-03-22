import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Item, Input, Icon, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
// import { Dropdown } from 'react-native-material-dropdown';
class Result extends Component<{}> {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{}}>
                <ScrollView>

                    <View style={{
                        margin: 7
                    }} >
                        <View style={{marginTop : 12}}>
                            <View style={{
                                alignSelf: 'flex-end', position: 'absolute', borderBottomColor: '#eaedf2',
                                borderBottomWidth: 2, height: '50%', width: '72%', marginLeft: 5,
                                marginBottom: 8
                            }} />
                            <Text style={{
                                paddingRight: 4, color: '#2a60ba', marginLeft: 5,
                                marginBottom: 3 , fontWeight : 'bold'
                            }}>GAME STATS</Text>
                        </View>
                        {/* <Text style={{
                            marginLeft: 5,
                            marginBottom: 8
                        }}>Game Stats  </Text> */}
                        <View style={{
                            flexDirection: 'row', marginTop: 12, paddingVertical: 8,
                            justifyContent: 'space-around'
                        }}>
                            <View>
                                <Text style={{
                                    marginLeft: 5,
                                    marginBottom: 8,
                                    color: '#000'
                                }}>Games Played</Text>
                                <View style={{
                                    height: 130, width: 160, borderColor: '#fff', borderWidth: 3,
                                    backgroundColor: '#1C9CF8', justifyContent: 'center', alignItems: 'center',
                                    borderRadius: 10
                                }}>
                                    <Text style={{
                                        color: '#fff', fontSize: 36
                                    }}>89</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    marginLeft: 5,
                                    marginBottom: 8,
                                    color: '#000'
                                }}>Gmaes Won</Text>
                                <View style={{
                                    height: 130, width: 160, borderColor: '#fff', borderWidth: 3,
                                    backgroundColor: '#1C9CF8', justifyContent: 'center', alignItems: 'center',
                                    borderRadius: 10
                                }}>
                                    <Text style={{
                                        color: '#fff', fontSize: 36
                                    }}>89</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row', marginTop: 3, paddingVertical: 8,
                            justifyContent: 'space-around'
                        }}>
                            <View>
                                <Text style={{
                                    marginLeft: 5,
                                    marginBottom: 8,
                                    color: '#000'
                                }}>Gmaes Played</Text>
                                <View style={{
                                    height: 130, width: 160, borderColor: '#fff', borderWidth: 3,
                                    backgroundColor: '#1C9CF8', justifyContent: 'center', alignItems: 'center',
                                    borderRadius: 10
                                }}>
                                    <Text style={{
                                        color: '#fff', fontSize: 36,
                                    }}>89</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    marginLeft: 5,
                                    marginBottom: 8,
                                    color: '#000'
                                }}>Questions Answerd</Text>
                                <View style={{
                                    height: 130, width: 160, borderColor: '#fff', borderWidth: 3,
                                    backgroundColor: '#1C9CF8', justifyContent: 'center', alignItems: 'center',
                                    borderRadius: 10
                                }}>
                                    <Text style={{
                                        color: '#fff', fontSize: 36
                                    }}>89</Text>
                                </View>
                            </View>

                        </View>
                        <View>
                           <View style={{marginTop : 12}}>
                            <View style={{
                                alignSelf: 'flex-end', position: 'absolute', borderBottomColor: '#eaedf2',
                                borderBottomWidth: 2, height: '50%', width: '68%', marginLeft: 5,
                                marginBottom: 8, 
                            }} />
                            <Text style={{
                                paddingRight: 4, color: '#000', marginLeft: 5,
                                marginBottom: 3 , fontWeight : 'bold' 
                            }}>Correct Answers
                            </Text>
                        </View>
                            <View style={{
                                flexDirection: 'row', marginTop: 3, paddingVertical: 8,
                                justifyContent: 'space-around'
                            }}>
                                <View>
                                    <View
                                        style={{
                                            height: 130, width: 160, borderColor: '#fff', borderWidth: 3,
                                            backgroundColor: '#1C9CF8', justifyContent: 'center', alignItems: 'center',
                                            borderRadius: 10
                                        }}>
                                        {/* <Image
                                            source={require('../Images/game_stat_picture.png')}
                                        /> */}
                                    </View>
                                </View>
                                <View>
                                    <View style={{
                                        height: 130, width: 160, borderColor: '#fff', borderWidth: 3,
                                        backgroundColor: '#1C9CF8', justifyContent: 'center', alignItems: 'center',
                                        borderRadius: 10
                                    }}>
                                        {/* <Image
                                            source={require('../Images/game_stat_picture.png')}
                                        /> */}
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    resultBox: {

    }
})


export default Result