import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions
} from 'react-native';
import { WebBrowser, Constants, MapView, Permissions } from 'expo';
import {
  Invitation
} from './Invitation'

export default class Details extends React.Component {
  
  constructor(props) {
    super(props)
    this.state={
      userregion: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      location: {
        latitude: 37.79825,
        longitude: -122.4524,
      }
    }
  }
  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
    }

    let userregion = await Location.getCurrentPositionAsync({});
    this.setState({ 
      locationResult: JSON.stringify(userregion),
      userregion: userregion});
  }

  render() {
    const window = Dimensions.get('window');
    const { width, height }  = window
    return (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: this.state.userregion.latitude,
            longitude: this.state.userregion.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MapView.Marker
            coordinate={this.state.location}
            title="Location"
            pinColor={"#31E758"}
            description="Location of your event"
          />
          <MapView.Marker
            coordinate={this.state.userregion}
            title="User"
            description="Your location"
          />
        </MapView>
    )
  }

}

styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },
  map: {
    flex: 1
  }
})