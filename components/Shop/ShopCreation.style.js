import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    avatarContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderWidth: 1,
        borderColor: "#000",
    },
    Btn1: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 35,
    },
    Btn2: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 35,
    },
    textBtn:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonsContainer:{
        flexDirection:'row',
        marginVertical:"4%",
        justifyContent:'space-around',
        alignItems:'center',
        width:"100%",
    },
    avatar: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        marginVertical: 20,
    },
    titleText: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignContent:'center',
        marginTop: 20,
        flexDirection:'row',
    },
    topScreenContainer: {
        width: "100%",
        position: "absolute",
        top: -150,
    },
    button: {
        width: "80%",
        height: 50,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ef762c",
        marginVertical: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
    picker: {
        width: "100%",
        height: 50,
        borderColor: "#000",
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    flatList: {
      width: "80%",
    },
    flatListContainer: {
      height: 50,
      minWidth: 100,
      marginHorizontal: 8,
      paddingHorizontal: 5,
      borderRadius: 35,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F2F2F2",
    },
    flatListText: {
      marginHorizontal: 8,
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
    colorPicker: {
        width: "70%",
        height: "100%",
    },
    
    scrollContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
      },
    createButton: {
        width: 45,
        height: 45,
        bottom : 25,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6E6B",
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        height: 60,
        alignItems: "center",
    },
    footerImage: {
        width: "100%",
        height: 50,
        position: "absolute",
        bottom: 0,
    },
    footerIcons: {
        position: "absolute",
        bottom: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    footerIcon: {
        width: 30,
        height: 30,
        opacity: 0.5,
    },
    selectedFooterIcon: {
        width: 30,
        height: 30,
    },
    sperator: {
        width: 20,
    },
    headerButtonImg: {
        width: 30,
        height: 30,
    },
    headerButton: {
        width: 40,
        height: 40,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    headerLogo: {
        width: 40,
        height: 40,
        marginHorizontal: 20,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    headerLogoImg: {
        width: 50,
        height: 50,
    },
    header: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        top: 10,
    },
    currentPointsContainer:{
        width: '90%',
        alignItems: 'flex-start',
        textAlign:'auto',
        marginLeft:'15%',
    },
    pointImage:{
        width:40,
        height:40,
    },
});

export default styles;
