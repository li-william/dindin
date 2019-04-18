import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser, Constants } from 'expo';
import Picker from 'react-native-picker-view';

export default class AddEvent extends React.Component {

    render() {
      return (

        <Picker
        values={["Kolkata","Delhi","Hydrabad","Banglore","Pune"]}
        //selected={this.state.index}
        style={{width:100,height:200}}
        enableInput={false}
        onSelect={(value,index) => {
            console.log('onSelect', value, index);
            //this.setState()
        }}
    />
      )
    }

}

styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
})