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



export default class CalendarList extends React.Component {
  DATA = this.props.parent.state.DATA

  constructor(props) {
    super(props);
    this.state = {
      parent: this.props.parent
    }
  }
    _compareObj(a,b) {
      return parseInt(a.date.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2')) - parseInt(b.date.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2'));
    }

    render() {
      const filteredDATA = this.DATA.filter(obj => obj.date.includes(this.props.activeMonth))
      const sortedDATA = [...filteredDATA].sort(this._compareObj)
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
                  sortedDATA.map(function(item, index) {
                    return (
                      <Event key={item.id}
                        empty={item.empty}
                        date={item.date}
                        name={item.name}
                        time={item.time}
                        imgurl={item.imgurl}
                        parent={this.state.parent}
                      />
                    )
                  }, this)
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