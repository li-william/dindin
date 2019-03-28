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
import Invitation from './Invitation'
// import ENTRIES from '../assets/entries'
import { sliderWidth, itemWidth } from '../assets/SliderEntry.style';

const ENTRIES = [
  {
      imgurl: "https://scontent.fric1-1.fna.fbcdn.net/v/t1.0-9/46413117_2426641707353285_2661525692130263040_o.jpg?_nc_cat=101&_nc_ht=scontent.fric1-1.fna&oh=d1c16950e1ab5c871b2c4661fb568335&oe=5D0E298D",
      name: 'William Li',
      date: 'Sunday, June 03 8:00 PM'
  },
  {
      imgurl: "https://scontent.fric1-2.fna.fbcdn.net/v/t1.0-9/40066115_1852168868230475_5119449563400241152_o.jpg?_nc_cat=104&_nc_ht=scontent.fric1-2.fna&oh=d2d64014de2037622bac62d657d9e0ab&oe=5D4D1EBA",
      name: 'Jerry Lu',
      date: 'Monday, June 04 4:00 PM'
  }
];

export default class MyCarousel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      entries: ENTRIES
    }
  }

    _renderItem ({item, index}) {
      return (
          <Invitation
            imgurl={item.imgurl}
            name={item.name}
            date={item.date}
          />
      );
    }

    render () {
      return (
        <View>
          <Text style={{marginLeft: 20, marginTop: 20}}> PENDING ({ENTRIES.length})</Text>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            loop={true}
            containerCustomStyle={{height: 200}}
          />
        </View>
      );
    }
}