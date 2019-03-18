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
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import CalendarList from '../components/CalendarList'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Header/>
          </View>

          <View style={styles.carousel}>
            <Carousel/>
          </View>

          <View style={styles.calendarList}>
            <CalendarList/>
          </View>
        </View>
      )
    }

}

styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
  header: {

  },
  carousel: {

  },
  calendarList: {

  }
});
