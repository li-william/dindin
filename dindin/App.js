import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from './components/SplashScreen';
import FBScreen from './components/FBScreen';
import HomeScreen from './screens/HomeScreen';
import Details from './components/Details';
import AddEvent from './components/AddEvent';
import SendInvites from './components/SendInvites';
import ViewEvent from './components/ViewEvent';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    screen: "splash",
    DATA: [
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
          empty: true,
          date: "Thursday, June 8th",
      },
  ],
  contactList:  [
    {
        name: "Helen Lin",
        phone: "703-283-0193",
        imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/28379635_1789696051093678_1971250718972312962_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=9d39fab20de090d194d815c55547717d&oe=5D17E785",
        checked: false
    },
    {
        name: "Kelly Xie",
        phone: "571-234-1924",
        imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/25311079_10213772517779549_1373377826081783697_o.jpg?_nc_cat=104&_nc_ht=scontent-iad3-1.xx&oh=01f1fdb8bbef1b8036f62be0a4eafe4c&oe=5D0FE2DC",
        checked: false
    },
    {
        name: "Cindy Lin",
        phone: "703-125-0108",
        imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/46412675_2508496152554310_2729200074474127360_o.jpg?_nc_cat=102&_nc_ht=scontent-iad3-1.xx&oh=854dfcb941ef314013c8cf227b51151e&oe=5D422635",
        checked: false                    
    },
    {
        name: "William Li",
        phone: "202-247-2346",
        imgurl: "https://scontent.fric1-1.fna.fbcdn.net/v/t1.0-9/46413117_2426641707353285_2661525692130263040_o.jpg?_nc_cat=101&_nc_ht=scontent.fric1-1.fna&oh=bb9b11c45d4d5f7a1056fbc943b9588a&oe=5D35B68D",
        checked: false
    },
    {
        name: "Jeffrey Xia",
        phone: "585-737-3410",
        imgurl: "https://scontent.fric1-1.fna.fbcdn.net/v/t1.0-9/21272108_892938267528825_3472270268164886941_n.jpg?_nc_cat=110&_nc_ht=scontent.fric1-1.fna&oh=b95a8b7a15a72a3368738ec8b0b3b627&oe=5D298ABE",
        checked: false                    
    },
    {
        name: "Danny Wang",
        phone: "202-543-3561",
        imgurl: "https://scontent.fric1-2.fna.fbcdn.net/v/t1.0-9/49949263_10157114203402089_4840277741427228672_o.jpg?_nc_cat=103&_nc_ht=scontent.fric1-2.fna&oh=ce035b6037e270aa6033f4db1a4f2f17&oe=5D4540DD",
        checked: false
    }
]
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
      else if (this.state.screen == "fb") {
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
            date={this.state.event.eventDate}
          />
        )
      }
      else if (this.state.screen == 'send-invites') {
        return (
          <SendInvites
            parent={this}
            event={this.state.event}
          />
        )
      }
      else if (this.state.screen == 'view-event') {
        return (
          <ViewEvent
            parent={this}
            event={this.state.event}
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
