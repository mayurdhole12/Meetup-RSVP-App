import React, {Component} from 'react';
import {
    Image,
    View,
    KeyboardAvoidingView,
    Dimensions,
    ScrollView,
    TextInput,
    ImageBackground,
    FlatList,
    Modal,
    TouchableOpacity, BackHandler,
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
    Right,
    Header,
    Left,
    Body,
    Title,
    CheckBox,
    Card, CardItem, Drawer, Footer, FooterTab, Badge,
} from 'native-base';
import {styles} from './HomeScreenStyle';
import Sidebar from '../utils/sidebar';
import MapView from 'react-native-maps';
const screenWidth = Dimensions.get("window").width;
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `#000`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};
export class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            DataArray:[
                {
                    name:'Mayur',
                    locality:'Mumbai',
                    age: 13,
                    profession:'Employed',
                    dob:'1993-09-03',
                    noOfGuest:2,
                    address:'Bangalore,Akshya Nagar 1st Block 1st Cross.',
                },{
                    name:'Siddhesh',
                    locality:'Pune',
                    age: 14,
                    profession:'Students',
                    dob:'1993-09-03',
                    noOfGuest:2,
                    address:'Bangalore,Akshya Nagar 1st Block 1st Cross.',
                },{
                    name:'Sumit',
                    locality:'Goa',
                    age: 19,
                    profession:'Employed',
                    noOfGuest:1,
                    address:'Akshya Nagar 1st ,Bangalore,Block 1st Cross.',
                },{
                    name:'Vikas',
                    locality:'Maharashtra',
                    age: 24,
                    profession:'Employed',
                    noOfGuest:1,
                    address:'Block 1st Cross,Bangalore,Akshya Nagar 1st .'
                },{
                    name:'Mayur',
                    locality:'Maharashtra',
                    age: 30,
                    profession:'Employed',
                    noOfGuest:2,
                    address:'Seven Bunglow Andheri west',
                },{
                    name:'Amit',
                    locality:'Pune',
                    age: 35,
                    profession:'Students',
                    noOfGuest:2,
                    address:'USA,Akshya Nagar 1st Block 1st Cross.',
                },{
                    name:'Chinmay',
                    locality:'Ahmdabad',
                    age: 15,
                    profession:'Students',
                    noOfGuest:1,
                    address:'Delhi,Akshya Nagar 1st Block 1st Cross.',
                }
            ],
            localityObject:null,
            AgeObject:null,
            attendEventsPeople:null,
            studentANDemployed:null
        };
    }

    componentWillMount() {

        ///////////Number of people by localities.
        var flags = [],set = [],  output = [], l = this.state.DataArray.length, i;
        for( i=0; i<l; i++) {
            if( flags[this.state.DataArray[i].locality]) continue;
            flags[this.state.DataArray[i].locality] = true;
            output.push(this.state.DataArray[i].locality);
        }
        for(i=0; i<output.length; i++){
            let count = this.state.DataArray.filter(item => item.locality === output[i]).length;
            set.push(count);
        }
        let array=[];
       let datasets = {
           data: set
       }
        array.push(datasets)
        let localityObject = {
            datasets:array,
            labels:output
        }

        ///////////Number of people in a given age range (13-18, 18-25 and 25+).

        let ageGroup = ['13-17','18-24','25 +'], forAgeGroup = [];
        let agecount13_17 = this.state.DataArray.filter(item => item.age >= 13 && item.age <= 17).length;
        forAgeGroup.push(agecount13_17);
        let agecount18_24 = this.state.DataArray.filter(item => item.age >= 18 && item.age <= 24).length;
        forAgeGroup.push(agecount13_17);
        let agecount25G = this.state.DataArray.filter(item => item.age > 25 ).length;
        forAgeGroup.push(agecount25G);
        let array1=[];
        let datasets1 = {
            data: forAgeGroup
        }
        array1.push(datasets1)
        let AgeObject = {
            datasets:array1,
            labels:ageGroup
        }

        ///////////Average group size of people attending the event (using guests count).
        let attendEventsPeople = [
            {
                name: "Participants to RSVP",
                population: 0,
                color: "rgba(131, 167, 234, 1)",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Guest of RSVP",
                population: 0,
                color: "#F00",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
        ];

        let firstArray = this.state.DataArray.reduce((accumulator, current) => accumulator + current.noOfGuest, 0);
        attendEventsPeople[0].population = this.state.DataArray.length;
        attendEventsPeople[1].population = firstArray;


        ///////////Professionals & students count.

        let student_count = this.state.DataArray.filter(item => item.profession === 'Students').length;
        let Employed_count = this.state.DataArray.filter(item => item.profession === 'Employed').length;
        let professionGroup = ['Students','Employed'], professionGroupCount = [];
        professionGroupCount.push(student_count);
        professionGroupCount.push(Employed_count);

        let array2=[];
        let datasets2 = {
            data: forAgeGroup
        }
        array2.push(datasets2)
        let studentANDemployed = {
            datasets:array2,
            labels:professionGroup
        }

        this.setState({localityObject,AgeObject,attendEventsPeople,studentANDemployed})
    }

    closeDrawer = () => {
        this.setState({openDrawer: false});
        this.drawer._root.close();
    };

    openDrawer = () => {
        this.setState({openDrawer: true});
        this.drawer._root.open();
    };



    render() {
        const data = {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    data: [20, 45, 28, 80, 99, 43]
                }
            ]
        };
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
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Image style={{width: 18, resizeMode: 'contain'}}
                                       source={require('../../../assets/icon/menu-icon.png')}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{color: '#fff', marginLeft: 10}}>Homescreen</Title>
                        </Body>
                        <Right style={{flexDirection: 'row', flex: 0.48}}>
                            {/*<Button style={{position: 'relative', borderRadius: 0}} transparent*/}
                            {/*        onPress={() => this.props.navigation.navigate('MyCartScreen')}>*/}
                            {/*    <Image style={{width: 22, resizeMode: 'contain'}}*/}
                            {/*           source={require('../../../assets/icon/loop.png')}/>*/}
                            {/*</Button>*/}
                        </Right>

                    </Header>

                    <View>
                        <ScrollView>
                            {
                                this.state.AgeObject != null ?
                                    <View style={{backgroundColor:'#f1f1f1',borderRadius:15,padding:10 ,marginTop:10,borderColor:'#e98013',borderWidth:1}}>
                                    <Text style={{color:'#00000085'}}>Number of people in a given age range.</Text>
                                    <BarChart
                                        style={{marginTop:20}}
                                        data={this.state.AgeObject}
                                        width={screenWidth}
                                        height={250}
                                        yAxisLabel="$"
                                        chartConfig={chartConfig}
                                        verticalLabelRotation={30}
                                    />
                                    </View>
                                    :null
                            }
                            {
                                this.state.localityObject != null ?
                                    <View style={{backgroundColor:'#f1f1f1',borderRadius:15,padding:10 ,marginTop:10,borderColor:'#e98013',borderWidth:1}}>
                                        <Text style={{color:'#00000085'}}>Number of people in a given age range.</Text>

                                        <BarChart
                                            style={{marginTop:20}}
                                        data={this.state.localityObject}
                                        width={screenWidth}
                                        height={300}
                                        yAxisLabel="$"
                                        chartConfig={chartConfig}
                                        verticalLabelRotation={30}
                                    />
                                    </View>
                                    :null
                            }
                            {
                                this.state.attendEventsPeople != null ?
                                    <View style={{backgroundColor:'#f1f1f1',borderRadius:15,padding:10 ,marginTop:10,borderColor:'#e98013',borderWidth:1}}>
                                        <Text style={{color:'#00000085'}}>Number of people in a given age range.</Text>

                                        <PieChart
                                            data={this.state.attendEventsPeople}
                                            width={screenWidth}
                                            height={220}
                                            chartConfig={chartConfig}
                                            accessor="population"
                                            backgroundColor="transparent"
                                            paddingLeft="15"
                                            absolute
                                        />
                                    </View>
                                    :null
                            }
                            {
                                this.state.studentANDemployed != null ?
                                    <View style={{backgroundColor:'#f1f1f1',borderRadius:15,padding:10 ,marginTop:10,borderColor:'#e98013',borderWidth:1,marginBottom:80}}>
                                        <Text style={{color:'#00000085'}}>Professionals & students count.</Text>

                                        <BarChart
                                            style={{marginTop:20}}
                                            data={this.state.studentANDemployed}
                                            width={screenWidth}
                                            height={280}
                                            yAxisLabel="$"
                                            chartConfig={chartConfig}
                                            verticalLabelRotation={30}
                                        />
                                    </View>
                                    :null
                            }
                        </ScrollView>



                    </View>

                </View>

                <Footer style={{backgroundColor: 'transparent'}}>
                    <FooterTab style={{
                        backgroundColor: '#fff',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        elevation: 25,
                        paddingHorizontal: 16,
                    }}>
                        <Button vertical>
                            {/*<Icon style={{color:'#999',fontSize:30}} type="MaterialCommunityIcons" name="home-outline" />*/}
                            <Image style={[styles.footerIcon, {opacity: 1}]}
                                   source={require('../../../assets/icon/home_icon.png')}/>

                        </Button>
                        <Button vertical>
                            <Image style={styles.footerIcon}
                                   source={require('../../../assets/icon/menu-grid_icon.png')}/>

                        </Button>

                        <Button vertical onPress={() => alert('SearchScreen')}>
                            <Image style={styles.footerIcon}
                                   source={require('../../../assets/icon/bx_bxs-search.png')}/>
                        </Button>
                        <Button vertical onPress={() => alert('OfferScreen')}>
                            <Image style={styles.footerIcon} source={require('../../../assets/icon/offer_icon.png')}/>
                        </Button>
                        <Button vertical onPress={() => alert('ProfileScreen')}>
                            <Image style={styles.footerIcon}
                                   source={require('../../../assets/icon/usercircle_icon.png')}/>

                        </Button>
                    </FooterTab>
                </Footer>

            </Drawer>
        );
    }
}
