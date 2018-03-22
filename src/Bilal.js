import React, { Component } from 'react';
import {Provider} from 'react-redux';
import SignUpPage from './Component/SignupPage'
import Screens from './Component/Nav'
import Routers from './Route'
import * as firebase from 'firebase'
// import ImagePick from './Component/ImagePick'
import store from './Store';

class Bilal extends Component {
  componentWillMount(){
    var config = {
    apiKey: "AIzaSyCV5YCRXD_4MP_HKPjKGJbymUoyurwTwE0",
    authDomain: "familytrackerapp-c8874.firebaseapp.com",
    databaseURL: "https://familytrackerapp-c8874.firebaseio.com",
    projectId: "familytrackerapp-c8874",
    storageBucket: "familytrackerapp-c8874.appspot.com",
    messagingSenderId: "377731893840"
  };
firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
          <Routers />
     </Provider>
    );
  }
}

export default Bilal;