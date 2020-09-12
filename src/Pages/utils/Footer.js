import React from 'react';
import {View, Image,Dimensions,Alert } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
alert1=()=>{
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
}
const Bottombar = props => {
    const {
        loading,
        buttontext,
        leftcont,
        rightcont,
        badgeicon,
        verticalicon,
        icontext,
        badgetext,
        href,
        ...attributes
        } = props;
        let buttontxt=[]
        let badge,vertical
        
        if(badgeicon == true){
           return badge
        }
        if(verticalicon == true){
            return vertical
        }
        for (var i=0;i<buttontext.length;i++){
            let navigated = href[i]
            buttontxt.push(<Button badge vertical style={{flex:1,backgroundColor:"#000000",color:"#fff"}} 
            // onPress={()=>this.props.navigation.navigate(navigated)}
            >
            {/* <Text>{navigated}</Text> */}
            <Badge><Text style={{color:"#fff"}}>{badgetext[i]}</Text></Badge>
            <Icon name={icontext[i]} style={{color:"#fff"}} type="MaterialCommunityIcons"/>
            <Text style={{color:"#fff"}}>{buttontext[i]}</Text>
          </Button>)
        }
    return (
        <Footer >
          <FooterTab>
            {buttontxt}
          </FooterTab>
        </Footer>
    )
}
export {Bottombar};