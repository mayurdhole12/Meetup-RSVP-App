import React from 'react';
import {
    Dimensions,
    StyleSheet,
    AsyncStorage,
    ScrollView,
    TouchableOpacity,
    View,
    Image, Alert, ImageBackground
} from 'react-native';
import {
    Container,
    Icon,
    Header
} from 'native-base';
import {withNavigation} from 'react-navigation';
// import Ripple from 'react-native-material-ripple';
import {Text, Drawer} from 'native-base';
import {styles} from '../sidebarstyle';


class SideBar extends React.Component {


    render() {
        return (


            <View style={{backgroundColor: '#fff', flex: 1}}>
                <View style={{position: 'relative'}}>
                    <Image style={{height: 180, width: "100%", resizeMode: 'cover'}}
                           source={require('../../../assets/login-banner.png')}/>
                    <View style={styles.contentoverlay}>
                        <Image style={styles.Sidebarlogo} source={require('../../../assets/logo.png')}/>
                        <Text style={styles.wlcomTxt}>Hi, Mayur</Text>
                    </View>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <View style={styles.pdtb}>
                        <TouchableOpacity style={styles.menuItem} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                            <Image style={styles.iconImg} source={require('../../../assets/icon/entypo-home.png')} />
                            <Text style={styles.menuhead}>Home Screen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={()=>this.props.navigation.navigate('RegisterScreen')}>
                            <Image style={styles.iconImg} source={require('../../../assets/icon/share.png')} />
                            <Text style={styles.menuhead}>Registration</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={()=>this.props.navigation.navigate('SearchScreen')}>
                            <Image style={styles.iconImg} source={require('../../../assets/icon/share.png')} />
                            <Text style={styles.menuhead}>Search Screen</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>


        );

    }

}

export default withNavigation(SideBar);





