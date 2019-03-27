import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight
} from 'react-native'


export default class Invitation extends React.Component {

  render() {
    props = this.props
    return (
      <View style={styles.container}>
        <View style={styles.cardContent}>
          <Image
            style={{width: 60, height: 60, padding: 10}}
            source={{uri: props.imgurl}}
          />
          <View style={styles.text}>
            <Text style={styles.titleText}>{props.name}</Text>
            <Text style={styles.dateText}>{props.date}</Text>
          </View>
        </View>

        <View style={styles.cardAction}>
          <TouchableHighlight
            style={styles.declineButton}
            onPress={() => {
              console.log("declined")
            }}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.acceptButton}
            onPress={() => {
              console.log("accepted");
            }}>
            <Text style={styles.buttonText}>Accept</Text>  
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 30,
    borderWidth: 1,
    borderColor: '#d6d7da'
  },
  cardImage: {
    flex: 1
  },
  cardTitle: {
    flex: 1,
    flexDirection: 'row',
    padding: 16
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 30,
  },
  cardAction: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    alignItems: 'center',
  },
  acceptButton: {
    flex: 1,
    height: 45,
    alignItems: 'center',
    backgroundColor: '#6CDE71',
  },
  declineButton: {
    flex: 1,
    height: 45,
    alignItems: 'center',
    backgroundColor: '#F33C20',
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFF",
    letterSpacing: 0.38,
  },
  text: {
    flex: 1,
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 20,
  },
  dateText: {
    fontSize: 14,
    color: "#676564"
  },
});