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
import { WebBrowser, Constants } from 'expo';
import MyCarousel from '../components/Carousel'
import CalendarList from '../components/CalendarList'
import MonthCarousel from '../components/MonthCarousel'

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Nov','Dec']
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
            <MyCarousel
              parent={this.props.parent}
            />
          </View>
          <ScrollView style={{height: screenHeight}}>
            <CalendarList
              activeMonth={this.state.activeMonth}
              parent={this.props.parent}
            />
          </ScrollView>
        </View>
      )
    }

}

styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
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
