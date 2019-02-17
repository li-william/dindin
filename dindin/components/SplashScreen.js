import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Constants } from 'expo'


export default class SplashScreen extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('../assets/images/splash_icon.png')}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>DinDin</Text>
                    <Text style={styles.subtitle}>connecting food lovers</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {console.log("pressed")}}
                        >
                        <Text style={styles.buttonText}> Get Started </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'space-between'
        },
        logoContainer: {
            paddingTop: Constants.statusBarHeight + 100,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            width: 300,
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
