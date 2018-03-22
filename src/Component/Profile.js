import React, { Component } from 'react';
import Result from './Result'
import { Container, Header, Left, Body, Right, Title, Item, Input, Icon, Picker, Form, Item as FormItem, List, ListItem, Tab, Tabs, TabHeading } from 'native-base';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
// import { Dropdown } from 'react-native-material-dropdown';
class Profile extends Component<{}> {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{ backgroundColor: '#F8F9FE', }}>
                <ScrollView>

                    <Header 
                    style={{ backgroundColor: '#2196F3' , elevation : 0 }}>
                        <Body>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, color: '#FFF', marginLeft: 12 }}>Profile </Text>
                            </TouchableOpacity>
                        </Body>
                        <Right>
                            <TouchableOpacity>
                                {/* <Image style={{ width: 36, height: 36, marginRight: 8 }}
                                    source={require('../Images/Setting_BTN.png')}
                                /> */}
                                {/* <Text style={{ fontSize: 12, color: 'yellow' }}>CREATE AN ACCOUNT </Text> */}
                            </TouchableOpacity>
                        </Right>
                        
                    </Header>

                    <Tabs >
                        <Tab heading={<TabHeading style={{ backgroundColor: '#2196F3' }}>
                            <Text style = {{color : '#fff'}}>Results</Text></TabHeading>}>
                            <View>
                              <Result />
                            </View>
                        </Tab>
                        <Tab heading={<TabHeading style={{ backgroundColor: '#2196F3' }}>
                            <Text style = {{color : '#fff'}}>Circles</Text></TabHeading>}>
                            <View>
                                <View>
                                    <Text style={{
                                        fontSize: 16, marginLeft: 24 , paddingVertical : 12
                                    }} >Circle Members</Text>
                                </View>
                                <List>
                                    <ListItem avatar style = {styles.listStyle}>
                                        <Left>
                                            {/* <Image style={{ width: 36, height: 36, marginLeft: 15}}
                                                source={require('../Images/Setting_BTN.png')}
                                            /> */}
                                        </Left>
                                        <Body>
                                            <Text>Kumar Pratik</Text>
                                            {/* <Text note>Doing what you like will always keep you happy . .</Text> */}
                                        </Body>
                                        <Right>
                                            <Text note>3:43 pm</Text>
                                        </Right>
                                    </ListItem>

                                    <ListItem avatar style = {styles.listStyle}>
                                        <Left>
                                            
                                        </Left>
                                        <Body>
                                            <Text>Kumar Pratik</Text>
                                            {/* <Text note>Doing what you like will always keep you happy . .</Text> */}
                                        </Body>
                                        <Right>
                                            <Text note>3:43 pm</Text>
                                        </Right>
                                    </ListItem>
                                    <ListItem avatar style = {styles.listStyle}>
                                        <Left>
                                            {/* <Image style={{ width: 36, height: 36, marginLeft: 15 }}
                                                source={require('../Images/Setting_BTN.png')}
                                            /> */}
                                        </Left>
                                        <Body>
                                            <Text>Kumar Pratik</Text>
                                            {/* <Text note>Doing what you like will always keep you happy . .</Text> */}
                                        </Body>
                                        <Right>
                                            <Text note>3:43 pm</Text>
                                        </Right>
                                    </ListItem>
                                    <ListItem avatar style = {styles.listStyle}>
                                        <Left>
                                            {/* <Image style={{ width: 36, height: 36, marginLeft: 15 }}
                                                source={require('../Images/Setting_BTN.png')}
                                            /> */}
                                        </Left>
                                        <Body>
                                            <Text>Kumar Pratik</Text>
                                            {/* <Text note>Doing what you like will always keep you happy . .</Text> */}
                                        </Body>
                                        <Right>
                                            <Text note>3:43 pm</Text>
                                        </Right>
                                    </ListItem>
                                </List>
                            </View>
                        </Tab>
                        <Tab heading={<TabHeading style={{ backgroundColor: '#2196F3' }}>
                            <Text style = {{color : '#fff'}} >Favourites</Text></TabHeading>}>
                            <View>
                                <Text>Bilal Attari</Text>
                            </View>
                        </Tab>
                    </Tabs>

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
listStyle :{
    marginLeft : 11,
    marginRight : 11,
    borderWidth : 2,
    borderColor : '#F2F3F5',
    padding : 5,
    elevation : 2,
    borderRadius : 7,
    marginBottom : 5,


}
})


export default Profile