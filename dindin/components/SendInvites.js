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
import { WebBrowser, Constants} from 'expo';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default class SendInvites extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            event: this.props.event
        }
    }

    render() {
      return (
        <View style={{paddingTop: Constants.statusBarHeight}}>
            <TouchableOpacity
                onPress={() => {console.log("pressed")
                    this.props.parent.setState({screen: "add-event"})
                }}>
                <Image
                    style={{width: 24, height: 20, margin: 5}}
                    source={require('../assets/images/back.png')}
                />
            </TouchableOpacity>
            <Card>
                <Card.Title title={this.state.event.location} subtitle={this.state.event.date + " " + this.state.event.time} left={(props) => <Avatar.Icon {...props} icon="restaurant" />} />
            </Card>
        </View>
      )
    }

}

styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#16A9FF',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      buttonText: {
        flex: 1,
        fontFamily: "space-mono",
        fontWeight: "bold",
        fontSize: 18,
        color: "#FFF",
        letterSpacing: 0.38,
        textAlign: "center",
      }
})