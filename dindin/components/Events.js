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
        if (props.empty) {
            return (
                <View style={{paddingHorizontal: 40}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16, marginVertical: 20}}>
                        {props.date}
                    </Text>

                    <View style={styles.details}>
                        <Image
                            style={{width: 243, height: 52, alignSelf: 'center'}}
                            source={require('../assets/images/addevent.png')}
                        />
                    </View>
                </View>
            );
        }
        else {
            return (
                <View style={{paddingHorizontal: 40, paddingTop: 15}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16, marginVertical: 20}}>
                        {props.date}
                    </Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                style={{width: 60, height: 60, borderRadius: 30}}
                                source={{uri: props.imgurl}}
                            />
                            <View style={{marginLeft: 20}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 10, marginBottom: 3}}>
                                    {props.name}
                                </Text>
                                <Text>
                                    {props.time}
                                </Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <Image
                                style={{width: 60, height: 60, margin: 5}}
                                source={require('../assets/images/call.png')}
                            />
                            <Image
                                style={{width: 60, height: 60, margin: 5}}
                                source={require('../assets/images/email.png')}
                            />
                        </View>
                    </View>
                </View>
            );
        }
    }

}

styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 50
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 20
    }
});