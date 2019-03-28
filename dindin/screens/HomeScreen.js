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
import MonthCarousel from '../components/MonthCarousel'
import { MonoText } from '../components/StyledText';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Nov','Dec']
export default class HomeScreen extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        activeMonth: 'Jun'
      }
    }

    handleActiveMonth = (monthIndex) => {
      this.setState({activeMonth: MONTHS[monthIndex]})
    }


    render() {
      const screenHeight = Dimensions.get('window').height
      return (
        <View style={styles.container}>
          <MonthCarousel
            onSelectActiveMonth={this.handleActiveMonth}
          />
          <View style={styles.carousel}>
            <MyCarousel/>
          </View>
        <View style={{height: screenHeight}}>
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
    //flex: 1
  }
});
