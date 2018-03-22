import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Header, Left, Body, Right, Title, Item, Input, Icon, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

// import { Dropdown } from 'react-native-material-dropdown';
class UserLocation extends Component<> {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View style={{ backgroundColor: '#F8F9FE' }}>
                <ScrollView>
                    <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
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
        // getUserInfo: (data) => {
        //     dispatch(userInfo(data))
        // }
    })
}
const styles = StyleSheet.create({

})
AppRegistry.registerComponent('UserLocation', () => UserLocation);
export default connect(mapStateToProp, mapDispatchToProp)(UserLocation)