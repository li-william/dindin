import React from 'react';
import { AsyncStorage, Platform, NativeModules, View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';
import { Constants, ScreenOrientation, Facebook } from 'expo'
import { Localization } from 'expo-localization';

import { NavigationActions, createStackNavigator } from 'react-navigation';

export default class FBScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            portrait: 1,
            lang: ''
        }
    }

    getOrientation() {
        if (Dimensions.get('window').width < Dimensions.get('window').height) {
            this.setState({ portrait: 1 });
            console.log('portrait')
        }
        else {
            this.setState({ portrait: 0 });
            console.log('landscape')
        }
    }

    getDefaultLanguage() {
        /*if (Platform.OS === 'ios') {
            this.setState({
                lang : NativeModules.SettingsManager.settings.AppleLocale
            });
        }
        else {
            //console.log( NativeModules.I18nManager.localeIdentifier)
            this.setState({
                lang : NativeModules.I18nManager.localeIdentifier
            });
        }*/

        this.setState({
            lang: Localization.locale.replace('-','_')
        });
        //console.log(Localization.locale)
    }

    componentDidMount() {
        //ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
        this.getOrientation();
        this.getDefaultLanguage();

        Dimensions.addEventListener('change', () => {
            this.getOrientation();
        })
    }
    
    async login() {
        try {
            const {
              type,
              token,
              expires,
              permissions,
              declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync('325829621612072', {
              permissions: ['public_profile'],
            });
            if (type === 'success') {
              // Get the user's name using Facebook's Graph API
              const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
              alert('Logged in!', `Hi ${(await response.json()).name}!`);
              this.props.parent.setState({
                  screen: "done"
              });
            } else {
              // type === 'cancel'
            }
          } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
          }
    }

    render() {
        return (
            <View style={vert.container}>
                <View style={vert.logoContainer}>
                        <Image style={vert.logo}
                            source={require('../assets/images/splash_icon.png')}
                        />
                    </View>
                    <View style={vert.titleContainer}>
                        <Text style={vert.title}>DinDin</Text>
                        <Text style={vert.subtitle}>
                        {(this.state.lang === 'en_US') ? 'connecting food lovers' : 'توصيل عشاق الطعام'}
                        </Text>
                    </View>
                    <View style={vert.buttonContainer}>
                        <TouchableHighlight
                            style={vert.button}
                            onPress={() => {console.log("pressed")
                                this.login()
                            }}>
                            <Text style={vert.buttonText}> Login with Facebook </Text>
                        </TouchableHighlight>
                    </View>                
            </View>
        );
    }
}


const vert = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'space-between',
        },
        logoContainer: {
            paddingTop: Constants.statusBarHeight + 100,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            width: 315,
            height: 300
        },
        titleContainer: {
            marginTop: 50
        },
        title: {
            fontFamily: "space-mono",
            fontSize: 50,
            color: "#848484",
            letterSpacing: 0.38,
            textAlign: "center",
        },
        subtitle: {
            fontStyle: "italic",
            fontFamily: "space-mono",
            fontSize: 25,
            color: "#848484",
            letterSpacing: 0.38,
            textAlign: "center",
        },
        buttonContainer: {
            flex: 1,
            marginTop: 175,
            marginBottom: 70,
            marginLeft: 30,
            marginRight: 30
        },
        button: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#16A9FF',
            padding: 10,
            flexDirection: 'column',
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
});