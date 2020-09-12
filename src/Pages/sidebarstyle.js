import { StyleSheet, Alert, Text, Image, TextInput, View, ScrollView, TouchableOpacity, KeyboardAvoidingView, TouchableHighlight } from 'react-native';


const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: window.height,
        backgroundColor: '#fff',
    },
    avatarContainer: {
        justifyContent:'center',
        alignItems:'center',
        // marginBottom: 20,
        // marginTop: 25,
        width: '100%',
    },
    avatar: {
        width:50,
        height:50,
        resizeMode:'cover',
        borderRadius:100,
        marginBottom:10,
        borderWidth:2,
        borderColor:'#fff',
        flex:0.2
    },
    iconImg:{height:20,
        opacity:0.8,
        width:20,
        resizeMode:"contain",},
    name: {
        textAlign:'center',
        marginTop:20,
        marginBottom:10,
        padding:10,
        width:250,
        backgroundColor:'#ed3338',

        color:'white'
    },
    menuhead:{
        marginLeft:22,flex:1,flexWrap:'wrap',letterSpacing:0.4,fontSize:16,color:'#333'
    },
    AvtarTitle:{
        marginBottom:4,
        fontSize:14,
        fontWeight:'bold',
        letterSpacing:1,
    },
    AvtarSubtitle:{
        fontSize:10,
        letterSpacing:2,
        fontStyle:'italic'
    },
    menuItem:{display:"flex", alignItems:'center',flexDirection:'row',paddingBottom:15,paddingTop:15,paddingLeft:30, borderBottomWidth:1,borderColor:'#F1F1F1',position:'relative'},
    menuImage:{
        flex:0.25,
        width:'100%',
        height:'100%',
        resizeMode:'contain'

    },
    contentoverlay:{position:'absolute',top:0,bottom:0,right:0,left:0,zIndex:999,alignItems:'center',justifyContent:'center'},
    pdtb:{
      paddingTop:10,
      paddingBottom:10
    },
    notiBadg:{
      height:20,
      width:20,
      borderRadius:50,
        backgroundColor:'#E98013',
      alignItems:'center',
      justifyContent:'center',
        marginRight:15
    },
    notiBadgTxt:{
      color:'#fff',
        fontSize:10,
        fontWeight:'bold'
    },
    item: {
        flex:1,
        fontSize: 14,
        fontWeight: '300',
    },
    leftNav:{
        flex:1,
        flexDirection:'column',
        height:'100%',
        width:'100%',

    },
    userProfileContainer:{
        padding:20,
        paddingTop:50,
        flex:0.50,
        backgroundColor:'#3c5995',
        justifyContent:'flex-start',
        position:'relative',
    },

    menuItemContainer:{
        // paddingRight:20,
        // paddingLeft:20,
        borderRightWidth:1,
        borderColor:"#f1f1f1",
        shadowColor:"#f1f1f1",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 3,

    },
    homesec:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:15,
        paddingBottom:15,
        // paddingRight:25,
        paddingRight:20,
        paddingLeft:20,
        width:'100%',
        flex:0.20,
        backgroundColor:'#fff',
        position:'relative',
        borderBottomWidth:1,
        borderColor:'#f1f1f1'
    },
    homesec1:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:15,
        paddingBottom:15,
        // paddingRight:25,
        paddingRight:20,
        paddingLeft:20,
        width:'100%',
        flex:0.20,
        backgroundColor:'#f1f1f1',
        position:'relative',
        borderBottomWidth:1,
        borderColor:'#000'
    },
    proImage:{
        height:'100%',
        width:'100%',
        resizeMode:'contain',
    },
    titleSec:{
        flex:5,
        flexDirection:'column'
    },
    username:{
        fontSize:16,
        color:'#333',
        marginBottom:3
    },
    menuIcon:{
        flex:1,
        height:'100%',
        width:'100%',
        marginRight:20,
        resizeMode:'cover',
        alignItems:'center',
        justifyContent:'center'
    },
    userContainer:{
        marginTop:15,
        flex:1,
        flexDirection:'row',
        alignItems:"center"
    },
    usernameText:{
        fontSize:16,
        color:'#fff',
        marginBottom:3
    },
    gobtn:{
        position:'absolute',
        top:20,
        right:0,
    },
    addfab:{
        height:50,
        width:50,
        position:'absolute',
        bottom:20,
        right:20,
        borderRadius:100,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 3,
    },
    addfabimg:{
        width:20,
        height:20,
        borderRadius:100
    },
    subText:{
        fontSize:14,
        color:'#6580b4',
    },
    container:{},
    Sidebarlogo:{
        width:'100%',
        height:35,
        resizeMode:"contain",
        marginBottom:30,
    },
    wlcomTxt:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        letterSpacing:0.4
    },
});

export { styles }