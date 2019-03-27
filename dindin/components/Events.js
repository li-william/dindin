import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

export default class Event extends React.Component {

    render() {
        props = this.props
        return (
            <View style={styles.container}>
                <Text>
                    {props.date}
                </Text>

                <View style={styles.details}>
                    <Image
                        style={{width: 60, height: 60, borderRadius: 30}}
                        source={{uri: props.imgurl}}
                    />
                    <View style={styles.text}>
                        <Text>
                            {props.name}
                        </Text>
                        <Text>
                            {props.time}
                        </Text>
                    </View>
                    <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/call.png')}
                    />
                    <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/email.png')}
                    />
                </View>
            </View>
        );
    }

}

styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 30,
        paddingTop: 30,
    },
    text: {
        flex: 1,
        flexDirection: 'column'
    }
});