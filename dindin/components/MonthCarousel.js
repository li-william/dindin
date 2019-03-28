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
import Carousel from 'react-native-snap-carousel';
// import ENTRIES from '../assets/entries'
import { sliderWidth, itemWidth } from '../assets/SliderEntry.style';


const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Nov','Dec']

export default class MonthCarousel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      months: MONTHS,
      activeMonth: 5
    }
  }

    _renderItem ({item, index}) {
      return (
          <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize:18}}>{item}</Text>
          </View>
      );
    }

    render () {
      return (
        <View style={{marginVertical: 10}}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.months}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            firstItem={this.state.activeMonth}
            inactiveSlideScale={0.90}
            inactiveSlideOpacity={0.5}
            itemWidth={70}
            containerCustomStyle={{height: 50}}
            onSnapToItem={(index) => {
                this.setState({ activeMonth: index })
                this.props.onSelectActiveMonth(index)
            }}
          />
        </View>
      );
    }
}