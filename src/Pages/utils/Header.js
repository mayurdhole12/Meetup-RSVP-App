import React from 'react';
import { Image,Dimensions } from 'react-native';
import { Header,Icon } from 'react-native-elements';
import Ripple from 'react-native-material-ripple';
const Toolbar = props => {
    const {
        loading,
        headtext,
        leftcont,
        rightcont,
        ...attributes
        } = props;
    return (
        <Header
            statusBarProps={{ barStyle: 'light-content' }}
            barStyle="light-content" // or directly
            placement="left"
            leftComponent={leftcont}
            centerComponent={{ text: headtext, style: { color: '#fff' } }}
            rightComponent={rightcont}
            containerStyle={{
                backgroundColor: '#000',
                justifyContent: 'space-around',
            }}
            />
    )
}
export {Toolbar};