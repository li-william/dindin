import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from './components/SplashScreen';
import FBScreen from './components/FBScreen';
import HomeScreen from './screens/HomeScreen';
import Details from './components/Details'
import AddEvent from './components/AddEvent'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    screen: "splash"
  };

  render() {

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      if (this.state.screen === "splash"){
        console.log("splash")
        return (
          <SplashScreen 
            parent={this}
          />
        );
      }
      else if (this.state.screen === "fb") {
        return (
          <FBScreen 
            parent={this}
          />
        )
      }
      else if (this.state.screen == 'invitation-details') {
        console.log(this.state.details)
        return (
          <Details
            parent={this}
            name={this.state.details.name}
            date={this.state.details.date}
            imgurl={this.state.details.imgurl}
            latitude={this.state.details.latitude}
            longitude={this.state.details.longitude}
          />
        )
      }
      else if (this.state.screen == 'add-event') {
        return (
          <AddEvent
            parent={this}
            date={"right now fucker"}
          />
        )
      }
      else {
        return (
          <HomeScreen
            parent={this}
          />
        );
      }
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
