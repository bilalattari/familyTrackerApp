import React, { Component } from 'react';
import MakeCircle from './Component/MakeCircle'
import SignIn from './Component/SignIn'
import { Router, Scene } from 'react-native-router-flux';

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="MakeCircle"
                        hideNavBar={true}
                        component={MakeCircle}
                        title="MakeCircle"
                    />
                    <Scene key="SignIn"
                        hideNavBar={true}
                        component={SignIn}
                        title="SignIn"
                        initial
                    />

                </Scene>
            </Router>
        )
    }
}