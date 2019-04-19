import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { WebBrowser, Constants} from 'expo';
import { Avatar, Button, Card, Title, Paragraph, Checkbox } from 'react-native-paper';
import SelectMultiple from 'react-native-select-multiple'


export default class ViewEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            event: this.props.event,
            selectedFriends:[],
            /*DATA : [
                {
                    name: "Helen Lin",
                    phone: "703-283-0193",
                    imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/28379635_1789696051093678_1971250718972312962_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=9d39fab20de090d194d815c55547717d&oe=5D17E785",
                    going: false,
                    pending: true
                },
                {
                    name: "Kelly Xie",
                    phone: "571-234-1924",
                    imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/25311079_10213772517779549_1373377826081783697_o.jpg?_nc_cat=104&_nc_ht=scontent-iad3-1.xx&oh=01f1fdb8bbef1b8036f62be0a4eafe4c&oe=5D0FE2DC",
                    going: false,
                    pending: true
                },
                {
                    name: "Cindy Lin",
                    phone: "703-125-0108",
                    imgurl: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/46412675_2508496152554310_2729200074474127360_o.jpg?_nc_cat=102&_nc_ht=scontent-iad3-1.xx&oh=854dfcb941ef314013c8cf227b51151e&oe=5D422635",
                    going: false,
                    pending: true                    
                },
                {
                    name: "William Li",
                    phone: "202-247-2346",
                    imgurl: "https://scontent.fric1-1.fna.fbcdn.net/v/t1.0-9/46413117_2426641707353285_2661525692130263040_o.jpg?_nc_cat=101&_nc_ht=scontent.fric1-1.fna&oh=bb9b11c45d4d5f7a1056fbc943b9588a&oe=5D35B68D",
                    going: false,
                    pending: true
                },
                {
                    name: "Jeffrey Xia",
                    phone: "585-737-3410",
                    imgurl: "https://scontent.fric1-1.fna.fbcdn.net/v/t1.0-9/21272108_892938267528825_3472270268164886941_n.jpg?_nc_cat=110&_nc_ht=scontent.fric1-1.fna&oh=b95a8b7a15a72a3368738ec8b0b3b627&oe=5D298ABE",
                    going: false,
                    pending: true                    
                },
                {
                    name: "Danny Wang",
                    phone: "202-543-3561",
                    imgurl: "https://scontent.fric1-2.fna.fbcdn.net/v/t1.0-9/49949263_10157114203402089_4840277741427228672_o.jpg?_nc_cat=103&_nc_ht=scontent.fric1-2.fna&oh=ce035b6037e270aa6033f4db1a4f2f17&oe=5D4540DD",
                    going: false,
                    pending: true
                }
            ]*/
            DATA: this.props.parent.state.invLIST
        }
    }

    render() {
      return (
        <View style={{flex: 1, paddingTop: Constants.statusBarHeight}}>
            <TouchableOpacity
                onPress={() => {console.log("pressed")
                    this.props.parent.setState({screen: "home"})
                }}>
                <Image
                    style={{width: 24, height: 20, margin: 5}}
                    source={require('../assets/images/back.png')}
                />
            </TouchableOpacity>
            <Card>
                <Card.Title title={this.props.parent.state.event.location} subtitle={this.props.parent.state.event.date + " " + this.props.parent.state.event.time} left={(props) => <Avatar.Icon {...props} icon="restaurant" />} />
            </Card>
            <Card>
                <Text style={{paddingLeft: 10, fontSize: 16, color: "#515853"}}>Going</Text>
                {this.state.DATA.filter(obj => obj.going==true).map(function(data, index) {
                    return (
                        <View key={index}>
                            <Card.Title title={data.name} subtitle={data.phone} left={(props) => <Image style={{padding: 10,width: 40, height: 40, borderRadius: 30}} source={{uri: data.imgurl}} />}/>
                        </View>
                    )
                }, this)}
            </Card>
            <Card>
                <Text style={{paddingLeft: 10, fontSize: 16, color: "#515853"}}>Can't Go</Text>
                {this.state.DATA.filter(obj => obj.going==false && obj.pending == false).map(function(data, index) {
                    return (
                        <View key={index}>
                            <Card.Title title={data.name} subtitle={data.phone} left={(props) => <Image style={{padding: 10,width: 40, height: 40, borderRadius: 30}} source={{uri: data.imgurl}} />}/>
                        </View>
                    )
                }, this)}
            </Card>
            <Card>
                <Text style={{paddingLeft: 10, fontSize: 16, color: "#515853"}}>Pending</Text>
                {this.state.DATA.map(function(data, index) {
                    return (
                        <View key={index}>
                            <Card.Title title={data.name} subtitle={data.phone} left={(props) => <Image style={{padding: 10,width: 40, height: 40, borderRadius: 30}} source={{uri: data.imgurl}} />}/>
                        </View>
                    )
                }, this)}
            </Card>
            <TouchableOpacity
                onPress={() => {console.log("pressed")
                    this.props.parent.setState({screen: "send-invites"})
                }}>
                <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert(
                        'Cancel?',
                        'Do you really want to cancel your event?',
                        [
                          {
                            text: 'No',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {text: 'Yes', onPress: () => {
                          DATA_copy = [...this.props.parent.state.contactList]
                          DATA_copy.forEach((obj) => {
                            obj.checked = false;
                          }) 
                            this.props.parent.setState({
                              screen: "home",
                              contactList: DATA_copy
                            })
                            },}
                        ],
                        {cancelable: false},
                    );
                }}>
                <Text>Cancel</Text>
            </TouchableOpacity>
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