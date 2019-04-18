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
[...Array(5).keys()]
export default class AddEvent extends React.Component {

    render() {
      return (
        <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
            <Picker
            values={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}
            //selected={this.state.index}
            style={{width:100,height:200}}
            enableInput={false}
            onSelect={(value,index) => {
                console.log('onSelect', value, index);
                //this.setState()
                }}
            />
            <Picker
            values={[...Array(60).keys()]}
            //selected={this.state.index}
            style={{width:100,height:200}}
            enableInput={false}
            onSelect={(value,index) => {
                console.log('onSelect', value, index);
                //this.setState()
                }}
            />
        </View>
      )
    }

}

styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
})