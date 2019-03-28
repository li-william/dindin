import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import MyCarousel from '../components/Carousel'
import Event from '../components/Events'
import CalendarList from '../components/CalendarList'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

    render() {
      return (
        <View style={styles.container}>

          <View style={styles.carousel}>
            <MyCarousel/>
          </View>

          <CalendarList/>
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
    //flex: 1
  }
});
