
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:'#fff'
    },
    offer_banner:{
        width:'100%',marginTop:15,height:180
    },
    login_img: {width:'100%',marginTop:22,height:235},
        intro_banner:{
            position:'relative'
        },
        intro_info:{
            position:'absolute',
            top:0,
            left:30,
            width:'100%',zIndex:999,
        },
        info_head:{
            fontSize:28,
            color:'#999',
            textTransform:'uppercase',
            letterSpacing:1
        },
    InputStyle:{
      flex:1,
        fontSize:16,paddingVertical:5
    },
    InputStyle1:{
        width:'100%',
        height: 150,
        textAlign: "left",
        paddingHorizontal: 15
    },
    otpContainer:{
      flexDirection:'row',
        justifyContent:'space-between'
    },
    empty_array_container:{
        alignItems:'center',
        backgroundColor:'#fff',paddingVertical:30,marginHorizontal:16,borderRadius:15,marginBottom:10,

        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.32,
        // shadowRadius: 5.46,
        // elevation: 5
    },

    categories:{
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderWidth: 1,
        marginTop:15,
        // borderColor: '#FF0000',
        // borderColor: '#e1e1e1',
        height: 45,
        marginBottom:0,
        borderRadius:30,
        paddingLeft:8,

        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 8,
    },
    itemStyle: {
        fontFamily: "Roboto-Regular",
        color: "#999",
        fontSize:8,
    },
    inputContainer123:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderWidth: 1,
        // borderColor: '#FF0000',
        // borderColor: '#e1e1e1',
        height: 45,
        borderRadius:30,
        paddingLeft:8,

        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 8,
    },
    inputIcon:{
        padding: 10,
        margin: 5,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    inputHead:{
        fontSize:13,
        color:'#666',
        textTransform:'uppercase',
        marginBottom:10,
        marginLeft:12,
        letterSpacing:1
    },

    errorMsgs:{
        fontSize:10,
        color:'red',
        textTransform:'uppercase',
        marginBottom:25,
        marginLeft:12,
        letterSpacing:1
    },

    welcm_txt:
    {   fontSize:20,
        color:'#242424',
        marginBottom:5
    },
    logo:{width:280,height:60},
    welcm_img:{resizeMode:'contain',width:'100%',height:400},
    welcm_subtxt:{fontSize:14,color:'#242424',marginTop:5,fontWeight:'bold',lineHeight:20},
    yellow_btn:{shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,backgroundColor:'#FCDB04',borderRadius:30,height:45,alignItems:'center',justifyContent:'center',width:'48%'},
    green_btn:{shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,backgroundColor:'#5ABB52',borderRadius:30,height:45,alignItems:'center',justifyContent:'center',width:'48%'},
    white_btn2:{backgroundColor:'#fff',borderRadius:30,height:45,alignItems:'center',justifyContent:'center',width:'48%'},
    white_btn:{borderRadius:30,height:45,alignItems:'center',justifyContent:'center',marginTop:10},
    text_1:{fontSize:13,fontWeight:'bold',textTransform:'uppercase',letterSpacing:0.5,color:'#242424'},
    text_2:{fontSize:13,fontWeight:'bold',textTransform:'uppercase',letterSpacing:0.5,color:'#fff'},
    text_3:{fontSize:13,fontWeight:'bold',textTransform:'uppercase',letterSpacing:0.5,color:'#ccc'},
    btn_grp:{flexDirection:'row',width:'100%',flexWrap:'wrap',justifyContent: 'space-between'},
    btn_grp2:{alignItems:'center'},



    wrap: {
        borderWidth: 0,
        borderColor: "rgba(0, 0, 0, 0.2)",
        position: "relative",
        flexDirection: "row",

    },

    input: {
        position: "absolute",
        fontSize: 24,
        textAlign: "center",
        backgroundColor: "transparent",
        width: 44,
        left:0,
        right:0,
        top: 0,
        bottom: 0,
    },
    display: {
        borderBottomWidth: 1,
        borderBottomColor: "#777",
        width: 44   ,
        height: 47,
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
        margin:5
    },
    text: {
        fontSize: 24,
    },
    noBorder: {
        borderRightWidth: 0,
    },

    mainTitleText:{
        fontWeight: 'bold'
    },
    mainTitleTextChild:{
        fontWeight: 'normal'
    },

});

export { styles }
