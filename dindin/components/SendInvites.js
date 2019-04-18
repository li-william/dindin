import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Constants} from 'expo';
import { Avatar, Button, Card, Title, Paragraph, Checkbox } from 'react-native-paper';
import SelectMultiple from 'react-native-select-multiple'


export default class SendInvites extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            event: this.props.event,
            selectedFriends:[],
            DATA : [
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
            ]
        }
    }

    render() {
      return (
        <View style={{flex: 1, paddingTop: Constants.statusBarHeight}}>
            <TouchableOpacity
                onPress={() => {console.log("pressed")
                    this.props.parent.setState({screen: "add-event"})
                }}>
                <Image
                    style={{width: 24, height: 20, margin: 5}}
                    source={require('../assets/images/back.png')}
                />
            </TouchableOpacity>
            <Card>
                <Card.Title title={this.state.event.location} subtitle={this.state.event.date + " " + this.state.event.time} left={(props) => <Avatar.Icon {...props} icon="restaurant" />} />
            </Card>
            
            <Card>
                <Text style={{paddingLeft: 10, fontSize: 16, fontColor: "#515853"}}>Invite Friends ({this.state.selectedFriends.length})</Text>
                {this.state.DATA.map(function(data, index) {
                    return (
                        <View key={index}>
                            <Card.Title title={data.name} subtitle={data.phone} left={(props) => <Image style={{padding: 10,width: 40, height: 40, borderRadius: 30}} source={{uri: data.imgurl}} />}/>
                            <Card.Content>
                                <Checkbox
                                    status={data.checked ? 'checked' : 'unchecked'}
                                    onPress={() => { 
                                        DATA_copy = [...this.state.DATA]
                                        DATA_copy[index].checked = !this.state.DATA[index].checked
                                        this.setState({
                                            DATA: DATA_copy,
                                            selectedFriends: DATA_copy.filter(obj => obj.checked === true)
                                        })
                                    }}
                                />
                            </Card.Content>
                        </View>
                    )
                }, this)}
            </Card>
            <View style={{justifyContent:"flex-end"}}>
                <TouchableOpacity
                                style={styles.button}
                                onPress={() => {console.log("pressed")
                                    this._navigateTo("xd")
                                }}>
                                <Text style={styles.buttonText}> Send Invitations</Text>
                </TouchableOpacity>
            </View>
        </View>
      )
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