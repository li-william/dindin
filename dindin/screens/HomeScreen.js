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
import MyCarousel from '../components/Carousel'
import Event from '../components/Events'
//import CalendarList from '../components/CalendarList'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

    render() {
      return (
        <View style={styles.container}>

          <View style={styles.carousel}>
            <MyCarousel/>
          </View>

          <View style={styles.calendarList}>
            <Event
              date={"Sunday, June 4th"}
              name={"John Doe"}
              time={"8:00 AM"}
              imgurl={"https://scontent.fric1-2.fna.fbcdn.net/v/t1.0-9/49767902_2600475799981915_7818062036138459136_o.jpg?_nc_cat=111&_nc_ht=scontent.fric1-2.fna&oh=56da0bd4bcb34135757a9bbcea742b44&oe=5D0FBFA9"}
            />
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
