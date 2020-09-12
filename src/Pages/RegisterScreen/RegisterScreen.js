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
import {styles} from './RegisterStyle';
import Toast from 'react-native-simple-toast';

import DatePicker from 'react-native-datepicker';
import Sidebar from '../utils/sidebar';
import MapView from 'react-native-maps';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = BannerWidth - 20;

export class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.toggleSwitch1 = this.toggleSwitch1.bind(this);
        this.state = {

            backbuttonPress: 0,
            loading: false,
            age: '0',
            name: '',
            nameError: '',
            professionArray: [
                {
                    itemName: 'Employed',
                },
                {
                    itemName: 'Student',
                },
            ],
            profession: 'Employed',
            professionError: false,
            date: new Date(),
            dateError: false,
            localityError: false,
            locality: null,
            addressError: false,
            address: null,
            guest: null,
            guestError: false,
            AddressMsg: 'Enter address field',
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    // Toast.show('This is a toast.');
    // Toast.show('This is a long toast.', Toast.LONG);
    //
    // Toast.showWithGravity('This is a long toast at the top.', Toast.LONG, Toast.TOP);

    componentWillMount() {
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

    PasswordValidation = (password) => {
        if (password.length < 8) {
            this.setState({password, passwordError: true});
        } else {
            this.setState({password, passwordError: false});
        }

        if (password != this.state.cnfpassword && this.state.cnfpassword != '') {
            this.setState({cnfmPasswordError: true});
        } else {
            this.setState({cnfmPasswordError: false});
        }
    };


    ConfmPasswordValidation = (cnfpassword) => {
        if (cnfpassword != this.state.password) {
            this.setState({cnfpassword, cnfmPasswordError: true});
        } else {
            this.setState({cnfpassword, cnfmPasswordError: false});
        }
    };

    toggleSwitch() {
        this.setState({showPassword: !this.state.showPassword});
    }

    toggleSwitch1() {
        this.setState({showCnfmPassword: !this.state.showCnfmPassword});
    }

    MobileValidation = (mobileNumber) => {
        if (mobileNumber.length != 10) {
            this.setState({mobileNumber: mobileNumber, mobileError: true});
        } else {
            this.setState({mobileNumber: mobileNumber, mobileError: false});
        }
    };

    emailValidation = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if (expression.test(String(email).toLowerCase())) {
            this.setState({email, emailError: false});
        } else {
            this.setState({email, emailError: true});
        }
    };
    NameValidation = (name) => {
        if (name.length > 2) {
            this.setState({name, nameError: false});
        } else {
            this.setState({name, nameError: true});
        }
    };
    localityValidation = (locality) => {
        if (locality.length > 2) {
            this.setState({locality, localityError: false});
        } else {
            this.setState({locality, localityError: true});
        }
    };

    GuestValidation = (guest) => {
        guest = parseInt(guest);
        if (guest > 2) {
            this.setState({guest, guestError: false});
        } else {
            this.setState({guest, guestError: true});
        }
    };

    setDateValidation = (date) => {
        let age = this.calculate_age(date);
        if (age > 0) {
            this.setState({date: date, dateError: false, age: '' + age});
        } else {
            this.setState({date: date, dateError: true, age: '' + age});
        }
    };

    calculate_age = (dob1) => {
        var today = new Date();
        var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--;
        }
        console.log(age_now);
        return age_now;
    };

    async onValueChangeCat(value) {
        this.setState({profession: value});
    }

    addressValidation = (address) => {
        if (address.length != 0 && address.length < 50) {
            this.setState({address, addressError: false});
        } else {
            if (address.length > 50) {
                this.setState({address, addressError: true, AddressMsg: 'input upto 50 characters only'});
            } else {
                this.setState({address, addressError: true, AddressMsg: 'Enter address field'});
            }
        }
    };

    valid = () => {
        let curr = this.state;
        let valid = true;

        if (curr.name.length < 2) {
            this.setState({nameError: true});
            valid = false;
        }
        let age = parseInt(curr.age);
        if (age <= 0) {
            this.setState({dateError: true});
            valid = false;
        }
        if (curr.locality == null || curr.locality.length < 2) {
            this.setState({localityError: true});
            valid = false;
        }
        let guest = parseInt(curr.guest);
        if (curr.guest == null || guest > 2) {
            this.setState({guestError: true});
            valid = false;
        }
        if (curr.address == null || curr.address.length == 0 || curr.address.length > 50) {
            if (curr.address != null  && curr.address.length > 50) {
                this.setState({addressError: true, AddressMsg: 'input upto 50 characters only'});
            } else {
                this.setState({addressError: true, AddressMsg: 'Enter address field'});
            }
        }
        return valid;
    };

    Register = async () => {
        if (this.valid()) {
            Toast.showWithGravity('Registration Successfully.', Toast.LONG, Toast.BOTTOM);

        } else {
            Toast.showWithGravity('Please Enter Correct Details.', Toast.LONG, Toast.BOTTOM);
        }
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
                            <Title style={{color: '#fff', marginLeft: 10}}>Registration</Title>
                        </Body>

                    </Header>

                    <View style={[styles.container]}>
                        <KeyboardAvoidingView style={{width: '100%'}} enabled>
                            <ScrollView style={{width: '100%'}}>
                                <View style={{paddingTop: 50, paddingBottom: 50}}>
                                    <View style={styles.intro_banner}>
                                        <View style={styles.intro_info}>
                                            <Text style={styles.info_head}>Sign up</Text>
                                            <Text style={styles.welcm_subtxt}>Please fill the below details.</Text>
                                        </View>
                                    </View>
                                </View>


                                <View style={{padding: 30}}>
                                    <Text style={styles.inputHead}>Name</Text>
                                    <View
                                        style={[this.state.nameError ? styles.inputContainer123 : styles.inputContainer, {borderColor: this.state.nameError ? '#FF0000' : '#e1e1e1'}]}>
                                        <Image style={styles.inputIcon}
                                               source={require('../../../assets/img/user_icon.png')}/>
                                        <TextInput style={styles.InputStyle}
                                                   value={this.state.name}
                                                   placeholderTextColor="#000"
                                                   onChangeText={value => this.NameValidation(value)}
                                        ></TextInput>
                                    </View>
                                    {
                                        this.state.nameError ?
                                            <View style={{alignItems: 'center'}}>
                                                <Text style={styles.errorMsgs}>(Enter Correct Name)</Text>
                                            </View> : null
                                    }

                                    <Text style={styles.inputHead}>Date of Birth</Text>
                                    <View
                                        style={[this.state.dateError ? styles.inputContainer123 : styles.inputContainer, {borderColor: this.state.dateError ? '#FF0000' : '#e1e1e1'}]}>
                                        <Image style={styles.inputIcon}
                                               source={require('../../../assets/img/email_icon.png')}/>
                                        <DatePicker
                                            style={styles.InputStyle}
                                            date={this.state.date}
                                            mode="date"
                                            placeholder="select date"
                                            format="YYYY-MM-DD"
                                            maxDate={this.state.date}
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: -500,
                                                    top: 4,
                                                    marginLeft: 0,
                                                },
                                                dateInput: {
                                                    width: 10,
                                                    marginRight: 200,
                                                    borderColor: '#f1f1f1',
                                                    textAlign: 'left',
                                                },
                                                // ... You can check the source to find the other keys.
                                            }}
                                            onDateChange={(date) => {
                                                this.setDateValidation(date);
                                            }}
                                        />
                                    </View>
                                    {
                                        this.state.dateError ?
                                            <View style={{alignItems: 'center'}}>
                                                <Text style={styles.errorMsgs}>(Enter Correct Date)</Text>
                                            </View> : null
                                    }
                                    <Text style={styles.inputHead}>Age</Text>
                                    <View style={[styles.inputContainer, {borderColor: '#e1e1e1'}]}>
                                        <Image style={styles.inputIcon}
                                               source={require('../../../assets/img/mobile_icon.png')}/>
                                        <TextInput style={styles.InputStyle}
                                                   placeholderTextColor="#000"
                                                   value={this.state.age}
                                                   keyboardType={'numeric'}
                                                   editable={false}
                                        ></TextInput>
                                    </View>
                                    <Text style={styles.inputHead}>Profession</Text>
                                    <View
                                        style={[this.state.professionError ? styles.inputContainer123 : styles.inputContainer, {borderColor: this.state.professionError ? '#FF0000' : '#e1e1e1'}]}>
                                        <Image style={styles.inputIcon}
                                               source={require('../../../assets/img/email_icon.png')}/>
                                        <Picker
                                            itemStyle={styles.itemStyle}
                                            mode="dropdown"
                                            style={styles.InputStyle}
                                            selectedValue={this.state.profession}
                                            onValueChange={this.onValueChangeCat.bind(this)}
                                        >
                                            {this.state.professionArray.map((item, index) => (
                                                <Picker.Item
                                                    color="#000"
                                                    label={item.itemName}
                                                    value={item.itemName}
                                                    index={index}
                                                />
                                            ))}
                                        </Picker>
                                    </View>
                                    {
                                        this.state.professionError ?
                                            <View style={{alignItems: 'center'}}>
                                                <Text style={styles.errorMsgs}>(Select proper Profession)</Text>
                                            </View> : null
                                    }

                                    <Text style={styles.inputHead}>Locality</Text>
                                    <View
                                        style={[this.state.localityError ? styles.inputContainer123 : styles.inputContainer, {borderColor: this.state.localityError ? '#FF0000' : '#e1e1e1'}]}>
                                        <Image style={styles.inputIcon}
                                               source={require('../../../assets/img/email_icon.png')}/>
                                        <TextInput style={styles.InputStyle}
                                            // placeholder='jennifer.m@gmail.com'
                                                   placeholderTextColor="#000"
                                                   value={this.state.locality}
                                                   onChangeText={value => this.localityValidation(value)}
                                        ></TextInput>
                                    </View>
                                    {
                                        this.state.localityError ?
                                            <View style={{alignItems: 'center'}}>
                                                <Text style={styles.errorMsgs}>(Enter Correct Locality)</Text>
                                            </View> : null
                                    }
                                    <Text style={styles.inputHead}>Number of Guest</Text>
                                    <View
                                        style={[styles.inputContainer, {borderColor: this.state.guestError ? '#FF0000' : '#e1e1e1'}]}>
                                        <Image style={styles.inputIcon}
                                               source={require('../../../assets/img/mobile_icon.png')}/>
                                        <TextInput style={styles.InputStyle}
                                            // placeholder='1234567890'
                                                   placeholderTextColor="#000"
                                                   value={this.state.guest}
                                                   onChangeText={value => this.GuestValidation(value)}
                                                   keyboardType={'numeric'}
                                        ></TextInput>
                                    </View>
                                    {
                                        this.state.guestError ?
                                            <View style={{alignItems: 'center'}}>
                                                <Text style={styles.errorMsgs}>(Enter Correct Guest Number)</Text>
                                            </View> : null
                                    }

                                    <Text style={styles.inputHead}>Address</Text>
                                    <View
                                        style={[this.state.addressError ? [styles.inputContainer123, {height: 150}] : [styles.inputContainer, {height: 150}], {borderColor: this.state.addressError ? '#FF0000' : '#e1e1e1'}]}>
                                        <TextInput style={styles.InputStyle1}
                                            // placeholder='jennifer.m@gmail.com'
                                                   placeholderTextColor="#000"
                                                   value={this.state.address}
                                                   multiline={true}
                                                   numberOfLines={40}
                                                   onChangeText={value => this.addressValidation(value)}
                                        ></TextInput>

                                    </View>
                                    {
                                        this.state.addressError ?
                                            <View style={{alignItems: 'center'}}>
                                                <Text style={styles.errorMsgs}>({this.state.AddressMsg})</Text>
                                            </View> : null
                                    }

                                    <View style={styles.btn_grp2}>

                                        <TouchableWithoutFeedback onPress={() => this.Register()}>
                                            <View style={styles.green_btn}>
                                                <Text style={styles.text_2}>Sign Up</Text>
                                            </View>
                                        </TouchableWithoutFeedback>

                                    </View>


                                </View>
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </View>

                </View>

            </Drawer>
        );
    }
}
