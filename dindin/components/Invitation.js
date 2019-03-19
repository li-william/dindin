import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native'

class Invitation extends Component {
  render() {
    props = this.props
    return (
      <View style={[styles.container, styles.card]}>
        <View style={styles.cardContent}>
          <Image
            style={{width: 60, height: 60}}
            source={{uri: props.imgurl}}
          />
          <View style={styles.text}>
            <Text style={styles.titleText}>{props.name}</Text>
            <Text style={styles.dateText}>{props.date}</Text>
          </View>
        </View>

        <View
          style={styles.separator}
        />

        <View style={styles.cardAction}>
          <Button
            style={styles.button}
            onPress={() => {}}
            title="Accept"
            color="#6CDE71"
            accessibilityLabel="Accept Invitation"
          />
          <Button
            style={styles.button}
            onPress={() => {}}
            title="Decline"
            color="#F33C20"
            accessibilityLabel="Decline Invitation"
          />
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
    margin: 5
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    }
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
  text: {
    flex: 1,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E9E9E9'
  }
});

export {
  Invitation
}