import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

export default class Event extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parent : this.props.parent
        }
    }

    render() {
        props = this.props
        console.log(props.date)
        if (props.empty) {
            return (
                <View style={{flex: 1, paddingHorizontal: 40}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16, marginVertical: 10}}>
                        {props.date}
                    </Text>
                    <View
                        style={{
                            borderBottomColor: '#8C8B8A',
                            borderBottomWidth: 0.5,
                        }}
                    />

                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
                        <TouchableOpacity
                            onPress={() => {
                                this.state.parent.setState({screen: "add-event", 
                                event: {
                                    eventDate: props.date
                                }
                                })
                            }}>
                            <Image
                                style={{width: 243, height: 52, alignSelf: 'center'}}
                                source={require('../assets/images/addevent.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        else {
            return (
                <View style={{flex: 1, paddingHorizontal: 40}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16, marginVertical: 10}}>
                        {props.date}
                    </Text>
                        <View
                            style={{
                                borderBottomColor: '#8C8B8A',
                                borderBottomWidth: 0.5,
                            }}
                        />
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
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
                            <TouchableOpacity
                                onPress={() => {
                                console.log("call");
                            }}>
                                <Image
                                    style={{width: 60, height: 60, margin: 5}}
                                    source={require('../assets/images/call.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                console.log("email");
                            }}>
                                <Image
                                    style={{width: 60, height: 60, margin: 5}}
                                    source={require('../assets/images/email.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            marginVertical: 5,
                            borderBottomColor: '#8C8B8A',
                            borderBottomWidth: 0.5,
                        }}
                    />
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
        marginTop: 10,
    },
    text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 20
    }
});