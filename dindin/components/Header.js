import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from './Invitation'

export default class Header extends React.Component {

    render() {
      return (
        <View style={styles.container}>
          <Card>
          </Card>
        </View>
      )
    }

}

styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  }
});