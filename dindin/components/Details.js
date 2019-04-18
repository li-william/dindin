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
import { WebBrowser, Constants, MapView, Permissions, Location } from 'expo';
import {
  Invitation
} from './Invitation'

export default class Details extends React.Component {
  
  constructor(props) {
    super(props)
    this.state={
      userregion: {
        latitude: 38.0271194,
        longitude: -78.5316125,
      },
      location: null,
    }
  }
  componentWillMount() {
    this._getLocationAsync();
    this.setState({
      location: {
        latitude: this.props.latitude,
        longitude: this.props.longitude
      }
    })
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
      userregion: {
        latitude: userregion.coords.latitude,
        longitude: userregion.coords.longitude
      }
    });
  }

  render() {
    return (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: this.state.userregion.latitude,
            longitude: this.state.userregion.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onRegionChange={this._handleMapRegionChange}
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