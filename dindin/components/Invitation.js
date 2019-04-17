import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'


export default class Invitation extends React.Component {
  constructor(props) {
    super(props)
}
  showInvitationDetails() {
    this.props.parent.setState({
      screen: "invitation-details"
  });
  }

  render() {
    props = this.props
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => {showInvitationDetails()}}>
          <View style={styles.cardContent}>
              <Image
                style={{width: 60, height: 60, marginLeft: 15, borderRadius: 30}}
                source={{uri: props.imgurl}}
              />
              <View style={styles.text}>
                <Text style={styles.titleText}>{props.name}</Text>
                <Text style={styles.dateText}>{props.date}</Text>
              </View>
          </View>
        </TouchableWithoutFeedback>

        <View
          style={{
              borderBottomColor: '#8C8B8A',
              borderBottomWidth: 0.5,
          }}
        />
        <View style={styles.cardAction}>
          <TouchableOpacity
            style={styles.declineButton}
            onPress={() => {
              console.log("declined")
            }}>
            <Text style={styles.declineButtonText}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => {
              console.log("accepted");
            }}>
            <Text style={styles.acceptButtonText}>Accept</Text>  
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 30,
    borderWidth: 1,
    borderColor: '#d6d7da',
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
  },
  declineButton: {
    flex: 1,
    height: 45,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: 'green',
    fontSize: 18,
    letterSpacing: 0.38,
  },
  declineButtonText: {
    color: 'red',
    fontSize: 18,
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