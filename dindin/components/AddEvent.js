import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import { WebBrowser, Constants, MapView, Location, Permissions } from 'expo';
import Event from '../components/Events'
import Picker from 'react-native-picker-view';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyCjUtCTg15b5_aqIFnLlFrNN0OvqP3f07c');

const DATA = [
    {
        id: 0,
        name: "Helen Lin",
        imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/28379635_1789696051093678_1971250718972312962_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=9d39fab20de090d194d815c55547717d&oe=5D17E785"
    },
    {
        id: 1,
        name: "Kelly Xie",
        imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/25311079_10213772517779549_1373377826081783697_o.jpg?_nc_cat=104&_nc_ht=scontent-iad3-1.xx&oh=01f1fdb8bbef1b8036f62be0a4eafe4c&oe=5D0FE2DC"
    },
    {
        id: 2,
        name: "Cindy Lin",
        imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/46412675_2508496152554310_2729200074474127360_o.jpg?_nc_cat=102&_nc_ht=scontent-iad3-1.xx&oh=854dfcb941ef314013c8cf227b51151e&oe=5D422635"
    },
]

const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
const mins = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
export default class AddEvent extends React.Component {

    constructor(props) {
      super(props)
      var hr = new Date().getHours() + 1
      var min = new Date().getMinutes()
      this.state = {
        hourIndex: hr,
        minIndex: Math.floor(min / 5),
        hour: hr,
        min: Math.floor(min / 5) * 5,

        location: {
            latitude: 37.78825,
            longitude: -122.4324,
        },
        locationInput: "",
        showUserLocation: false,

        isLoading: true,

        eventDate: this.props.date,
        parent: this.props.parent,
      }
    }

    componentDidMount() {
        this._getLocationAsync();
    }

    setMarker(coordinates) {
        // Remove the following line after testing, its just to show coordinates as a warning in console.
        //console.warn(coordinates);
      
        this.setState({
          location: {
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
            },
            showUserLocation: true
        });

        this._fromLatLong(coordinates)
      }

    _fromLatLong(coords) {
        Geocoder.from(coords.latitude, coords.longitude)
        .then(json => {
        	var addressComponent = json.results[0].formatted_address;
            this.setState({
                locationInput: addressComponent
            })
        })
        .catch(error => console.warn(error));
    }

    _fromStreetAddress(addr) {
        Geocoder.from(addr)
        .then(json => {
            var location = json.results[0].geometry.location;
            this.setState({
                location: {
                    latitude: location.lat,
                    longitude: location.lng
                },
                showUserLocation: true
            })
        })
        .catch(error => console.warn(error));
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
            location: {
                latitude: userregion.coords.latitude,
                longitude: userregion.coords.longitude,
            },
            isLoading: false,
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{
                    flex: 1, 
                    alignItems: 'center',
                    justifyContent: 'center', }}>
                    <Text style={{fontSize: 20, color: "#515853"}}> Loading ...</Text>
                </View>
            )
        }
        else {
            return (
                <View style={{
                    paddingTop: Constants.statusBarHeight + 5,
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    }}>
                    <TouchableOpacity
                        onPress={() => {console.log("pressed")
                            this.props.parent.setState({screen: "home"})
                        }}>
                        <Image
                            style={{width: 24, height: 20, margin: 5}}
                            source={require('../assets/images/back.png')}
                        />
                    </TouchableOpacity>
                    <View style={{flex: 1, flexDirection: "row", justifyContent: "center",}}>
                        <Picker
                        values={hours}
                        selected={this.state.hourIndex}
                        style={{width:50,height:200}}
                        onSelect={(value,index) => {
                            this.setState({hourIndex: index})
                        }}
                        />
                        <Picker
                        values={mins}
                        selected={this.state.minIndex}
                        style={{width:100,height:200}}
                        onSelect={(value,index) => {
                            this.setState({minIndex: index})
                        }}
                        />
                    </View>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "#515853"}}>Choose a location</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity
                                onPress={() => {
                                this.setState({
                                    showUserLocation: true,
                                    location: {
                                        latitude: this.state.location.latitude,
                                        longitude: this.state.location.longitude,
                                    }
                                })
                                this._fromLatLong({
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude,
                                })
                            }}>
                                <Image
                                    style={{width: 18, height: 24, margin: 5}}
                                    source={require('../assets/images/location.png')}
                                />
                            </TouchableOpacity>
                            <TextInput
                                style={{height: 20, width: 300, borderColor: 'gray', borderWidth: .5}}
                                onChangeText={(text) => this.setState({locationInput: text})}
                                value={this.state.locationInput}
                                autoComplete="street-address"
                                onSubmitEditing={() => {
                                    this._fromStreetAddress(this.state.locationInput)
                                }}
                            />
                        </View>
                    </View>
                    <MapView
                        style={{height: 500}}
                        initialRegion={{
                            latitude: this.state.location.latitude,
                            longitude: this.state.location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        onPress={(e) => this.setMarker(e.nativeEvent.coordinate)}
                        onRegionChange={this._handleMapRegionChange}
                    >
                    {this.state.showUserLocation && 
                        <MapView.Marker
                            coordinate={this.state.location}
                            title="Your Event location"
                        description={this.state.locationInput}/> 
                    }
                    </MapView>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            if (this.state.locationInput === "")
                                console.warn("You need to pick a location first!")
                            else {
                                this.props.parent.setState({
                                    screen: "send-invites",
                                    event: {
                                        date: this.state.eventDate,
                                        time: "00:00",
                                        location: this.state.locationInput
                                    }
                                })
                        }
                        }}>
                        <Text style={styles.buttonText}> Send Invitations </Text>
                    </TouchableOpacity>
                </View>
                )
            }
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