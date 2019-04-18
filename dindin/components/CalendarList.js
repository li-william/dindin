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
import Event from '../components/Events'

const DATA = [
    {
        id: 0,
        empty: false,
        date: "Sunday, June 4th",
        name: "Helen Lin",
        time: "8:00 AM",
        imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/28379635_1789696051093678_1971250718972312962_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=9d39fab20de090d194d815c55547717d&oe=5D17E785"
    },
    {
        id: 1,
        empty: false,
        date: "Monday, June 5th",
        name: "Kelly Xie",
        time: "12:00 PM",
        imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/25311079_10213772517779549_1373377826081783697_o.jpg?_nc_cat=104&_nc_ht=scontent-iad3-1.xx&oh=01f1fdb8bbef1b8036f62be0a4eafe4c&oe=5D0FE2DC"
    },
    {
        id: 2,
        empty: true,
        date: "Tuesday, June 6th"
    },
    {
        id: 3,
        empty: false,
        date: "Wednesday, June 7th",
        name: "Cindy Lin",
        time: "12:00 PM",
        imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/46412675_2508496152554310_2729200074474127360_o.jpg?_nc_cat=102&_nc_ht=scontent-iad3-1.xx&oh=854dfcb941ef314013c8cf227b51151e&oe=5D422635"
    },
    {
        id: 4,
        empty: false,
        date: "Thursday, June 8th",
        name: "Helen Lin",
        time: "2:00 PM",
        imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/28379635_1789696051093678_1971250718972312962_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=9d39fab20de090d194d815c55547717d&oe=5D17E785"
    },
]

export default class CalendarList extends React.Component {
    _compareObj(a,b) {
      return parseInt(a.date.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2')) - parseInt(b.date.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2'));
    }

    render() {
      const filteredDATA = DATA.filter(obj => obj.date.includes(this.props.activeMonth))
      const sortedDATA = [...filteredDATA].sort(this._compareObj)
      const parent = this.props.parent
      console.log(parent)
      if(sortedDATA.length === 0) {
        return (
          <View>
            <Text style={{alignSelf: 'center', color:'gray', fontSize:18}}>There's nothing here yet.</Text>
            <Event key={-1}
              empty={true}
              parent={this.props.parent}
            />
          </View>
        );
      }
      return (
          <ScrollView style={{flex: 1}}>
              {
                  sortedDATA.map((item, index) => (
                      <Event key={item.id}
                        empty={item.empty}
                        date={item.date}
                        name={item.name}
                        time={item.time}
                        imgurl={item.imgurl}
                        parent={parent}
                      />
                  ))
              }
          </ScrollView>
      );
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