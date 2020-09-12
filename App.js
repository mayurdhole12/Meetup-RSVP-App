/**
 /**
 * Sample of RN Component
 *
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    AppRegistry,
    Animated,
    YellowBox,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Root} from 'native-base';
import {HomeScreen} from './src/Pages/HomeScreen/HomeScreen';
import {RegisterScreen} from "./src/Pages/RegisterScreen/RegisterScreen";
import {SearchScreen} from "./src/Pages/SearchScreen/SearchScreen";

const MyStackNavigator = createStackNavigator({


        HomeScreen: {
            screen: HomeScreen,
        },
        RegisterScreen: {
            screen: RegisterScreen,
        },
        SearchScreen: {
            screen: SearchScreen,
        },
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none',
    },
);


const MyApp = createAppContainer(MyStackNavigator);
console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning: ...']);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true, isLoadingComplete: false,
            splashAnimation: new Animated.Value(0),
            splashAnimationComplete: false,
            isLogin: false,
        };
        YellowBox.ignoreWarnings(['Warning: ...']);
        console.disableYellowBox = true;

    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <Root><MyApp/></Root>
                {this._maybeRenderLoadingImage()}
            </SafeAreaView>
        );
    }

    _maybeRenderLoadingImage = () => {
        if (this.state.splashAnimationComplete) {
            return null;
        }

        return (
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000',
                    opacity: this.state.splashAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                    }),
                }}>

                <Animated.Image
                    source={require('./assets/splash.png')}
                    style={{
                        width: undefined,
                        height: undefined,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        resizeMode: 'contain',
                        transform: [
                            {
                                scale: this.state.splashAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 4],
                                }),
                            },
                        ],
                    }}
                    onLoadEnd={this._animateOut}
                />
            </Animated.View>
        );
    };


    _animateOut = () => {
        // SplashScreen.hide();
        Animated.timing(this.state.splashAnimation, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
        }).start(() => {
            this.setState({splashAnimationComplete: true});
        });
    };

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/splash.png'),
            ]),
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
    };
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#93291E',
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },

    TextStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#999',
    },
    mainheading1: {
        width: '100%',
        borderRadius: 10,
        shadowColor: '#000',
        position: 'relative',
        paddingTop: 10,
        paddingRight: 8,
        paddingLeft: 8,
    },
    usernameTxt1: {
        fontSize: 13,
        color: '#999',
        marginBottom: 25,
    }, offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    offlineText: {
        color: '#fff',
    },
});

AppRegistry.registerComponent('myapp', () => myapp);
