import React from 'react';
import { Platform, NativeModules, View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';
import { Constants, ScreenOrientation } from 'expo'
import { Localization } from 'expo-localization';
import { i18n } from 'i18n-js'

import { NavigationActions, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

export default class SplashScreen extends React.Component {
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

    _navigateTo = (routeName) => {
        this.props.parent.setState({
            started: true
        });
    }

    componentDidMount() {
        //ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
        this.getOrientation();
        this.getDefaultLanguage();

        Dimensions.addEventListener('change', () => {
            this.getOrientation();
        })
    }
    
    render() {

        if (this.state.portrait) {
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
                                this._navigateTo("HomeScreen")
                            }}>
                            <Text style={vert.buttonText}> Get Started </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            );
        }
        else {
            return (
                <View style={horiz.container}>
                    <View style={horiz.logoContainer}>
                        <Image style={horiz.logo}
                            source={require('../assets/images/splash_icon.png')}
                        />
                    </View>
                    <View>
                        <View style={horiz.titleContainer}>
                            <Text style={horiz.title}>DinDin</Text>
                            <Text style={horiz.subtitle}>
                            {(this.state.lang === 'en_US') ? 'connecting food lovers' : 'توصيل عشاق الطعام'}
                            </Text>
                        </View>
                        <View style={horiz.buttonContainer}>
                            <TouchableHighlight
                                style={horiz.button}
                                onPress={() => {console.log("pressed")
                                this._navigateTo("HomeScreen")
                                }}
                                >
                                <Text style={horiz.buttonText}> Get Started </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            );  
        }
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
            
        },
        button: {
            flex: 1,
            height: 60,
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
})

const horiz = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 315,
        height: 300
    },
    titleContainer: {
        marginTop: 130,
        margin: 50
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
        margin: 20,
        marginBottom: 60
    },
    button: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#16A9FF',
        padding: 5,
        justifyContent: 'center'
    },
    buttonText: {
        flex: 1,
        fontFamily: "space-mono",
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFF",
        letterSpacing: 0.38,
        textAlign: "center",
    }
})