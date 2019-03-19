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
import { WebBrowser } from 'expo';
import {
  Invitation
} from './Invitation'

export default class Header extends React.Component {

    render() {
      return (
        <Invitation
          imgurl="https://scontent.fric1-1.fna.fbcdn.net/v/t1.0-9/46413117_2426641707353285_2661525692130263040_o.jpg?_nc_cat=101&_nc_ht=scontent.fric1-1.fna&oh=d1c16950e1ab5c871b2c4661fb568335&oe=5D0E298D"
          name="William Li"
          date="Sunday 17 June - 8:00PM"
        ></Invitation>
      )
    }

}

styles = StyleSheet.create({
  title: {
    fontSize: 38,
  },
  button: {
    marginRight: 10
  }
});