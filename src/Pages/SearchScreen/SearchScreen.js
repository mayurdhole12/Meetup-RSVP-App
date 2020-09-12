import React, {Component} from 'react';
import {
    Image,
    View,
    KeyboardAvoidingView,
    Dimensions,
    ScrollView,
    TextInput,
    ImageBackground,
    TouchableWithoutFeedback,
    BackHandler,
    Platform,
    AsyncStorage,
    Picker, TouchableOpacity, FlatList,
} from 'react-native';
import {
    Icon,
    Button,
    Text,
    Thumbnail,
    Form,
    Item,
    Input,
    Label,
    CheckBox,
    Drawer,
    Header,
    Left,
    Body, Title, Right,
} from 'native-base';
import {styles} from './SearchStyle';
import Toast from 'react-native-simple-toast';

import DatePicker from 'react-native-datepicker';
import Sidebar from '../utils/sidebar';
import MapView from 'react-native-maps';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = BannerWidth - 20;

export class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            DataArray:[
                {
                    name:'Mayur',
                    locality:'Mumbai',
                    age: 21,
                    profession:'Employed',
                    dob:'1993-09-03',
                    noOfGuest:2,
                    address:'Bangalore,Akshya Nagar 1st Block 1st Cross.',
                },{
                    name:'Siddhesh',
                    locality:'Pune',
                    age: 22,
                    profession:'Employed',
                    dob:'1993-09-03',
                    noOfGuest:2,
                    address:'Bangalore,Akshya Nagar 1st Block 1st Cross.',
                },{
                    name:'Sumit',
                    locality:'Goa',
                    age: 21,
                    profession:'Employed',
                    dob:'1993-09-03',
                    noOfGuest:2,
                    address:'Akshya Nagar 1st ,Bangalore,Block 1st Cross.',
                },{
                    name:'Vikas',
                    locality:'Gujrat',
                    age: 21,
                    profession:'Employed',
                    dob:'1996-05-03',
                    noOfGuest:1,
                    address:'Block 1st Cross,Bangalore,Akshya Nagar 1st .'
                },{
                    name:'Mayur',
                    locality:'Maharashtra',
                    age: 21,
                    profession:'Employed',
                    dob:'1993-09-03',
                    noOfGuest:2,
                    address:'Seven Bunglow Andheri west',
                },{
                    name:'Amit',
                    locality:'Chennai',
                    age: 21,
                    profession:'Employed',
                    dob:'1997-04-03',
                    noOfGuest:2,
                    address:'USA,Akshya Nagar 1st Block 1st Cross.',
                },{
                    name:'Chinmay',
                    locality:'Ahmdabad',
                    age: 21,
                    profession:'Employed',
                    dob:'2002-09-04',
                    noOfGuest:1,
                    address:'Delhi,Akshya Nagar 1st Block 1st Cross.',
                }
            ],
            SearchArray:[],
            searchword:''
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    // Toast.show('This is a toast.');
    // Toast.show('This is a long toast.', Toast.LONG);
    //
    // Toast.showWithGravity('This is a long toast at the top.', Toast.LONG, Toast.TOP);

    componentWillMount() {
        let SearchArray = this.state.DataArray;
        this.setState({SearchArray});
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    backPress = () => {
        this.props.navigation.goBack(null);
    };

    closeDrawer = () => {
        this.setState({openDrawer: false});
        this.drawer._root.close();
    };

    openDrawer = () => {
        this.setState({openDrawer: true});
        this.drawer._root.open();
    };

    updateSearch = (search1) => {
        // console.log("Data ", search1)
        this.setState({searchword: search1})

        const newData = this.state.DataArray.filter(item => {

            const itemData = `${item.name}   
      ${item.locality} `;
            // console.log("itemData ", itemData)

            const textData = search1;

            return itemData.indexOf(textData) > -1;
        });
        this.setState({SearchArray: newData});
    };



    render() {
        return (
            <Drawer

                ref={ref => {
                    this.drawer = ref;
                }}
                content={<Sidebar/>}
                tapToClose={true}
                // side="right"
                openDrawerOffset={0.27}
                panCloseMask={0.3}
                onClose={() => this.closeDrawer()}

            >
                <View style={styles.container}>

                    <Header style={{backgroundColor: '#e98013', position: 'relative'}}>
                        <Left>
                            <Button transparent onPress={() => this.backPress()}>
                                <Image style={{width: 18, resizeMode: 'contain'}}
                                       source={require('../../../assets/icon/leftarrow.png')}/>
                                {/*<Text>Back</Text>*/}
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{color: '#fff', marginLeft: 10}}>Search Screen</Title>
                        </Body>

                    </Header>
                    <View style={{flex:1}}>

                        <View style={[styles.inputContainer, {}]}>
                            <Image style={styles.inputIcon}
                                   source={require('../../../assets/img/search_icon.png')}/>
                            <TextInput style={styles.InputStyle}
                                       value={this.state.username}
                                       placeholderTextColor="#999"
                                       placeholder={'Search for RSVP\'d users'}
                                       onChangeText={value => this.updateSearch(value)}
                            ></TextInput>
                        </View>
                        <View style={[styles.empty_array_container]}>

                            <FlatList
                                data={this.state.SearchArray}
                                renderItem={({item}) =>
                                    <View  style={{width:'100%',backgroundColor:'#f4f4f4',borderRadius:25,marginTop:5,padding:10}}>
                                        <Text style={styles.mainTitleText}>Name : <Text style={styles.mainTitleTextChild}>{item.name}</Text></Text>
                                        <Text style={styles.mainTitleText}>Locality : <Text style={styles.mainTitleTextChild}>{item.locality}</Text></Text>
                                        <Text style={styles.mainTitleText}>Age : <Text style={styles.mainTitleTextChild}>{item.age}</Text></Text>
                                        <Text style={styles.mainTitleText}>Profession : <Text style={styles.mainTitleTextChild}>{item.profession}</Text></Text>
                                        <Text style={styles.mainTitleText}>Date Of Birth : <Text style={styles.mainTitleTextChild}>{item.dob}</Text></Text>
                                        <Text style={styles.mainTitleText}>Number Of Guest : <Text style={styles.mainTitleTextChild}>{item.noOfGuest}</Text></Text>
                                        <Text style={styles.mainTitleText}>Address : <Text style={styles.mainTitleTextChild}>{item.address}</Text></Text>
                                    </View>
                                }

                            />

                        </View>
                    </View>




                </View>

            </Drawer>
        );
    }
}
