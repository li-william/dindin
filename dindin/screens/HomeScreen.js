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
import MyCarousel from '../components/Carousel'
import CalendarList from '../components/CalendarList'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

    render() {
      return (
        <View style={styles.container}>
          {/* <Header/> */}

          <View style={styles.carousel}>
            <MyCarousel/>
          </View>

          {/* <View style={styles.calendarList}>
            <CalendarList/>
          </View> */}
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
