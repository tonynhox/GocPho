import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'

const OrderFailed = (props) => {
    const { navigation } = props;
  return (
    <View style={[styles.container]}>
            <Image source={require('../../../../media/images/OrderFailed.png')} style={[styles.imgOrderAccepted]}/>
            <Text style = {[styles.orderAccepted]}>Oops! Order Failed!</Text>
            <Text style = {[styles.orderToast]}>Something went terribly wrong</Text>
            <Pressable style = {[styles.btnAccept]}>
                <Text style = {[styles.btnAcceptText]}>Track Order</Text>
            </Pressable>
            <Pressable style = {[styles.btnCancel]}>
                <Text style = {[styles.btnCancelText]}>Back Home</Text>
            </Pressable>
        </View>
  )
}

export default OrderFailed

const styles = StyleSheet.create({
    btnCancelText:{
        fontFamily: 'Klarna Text',
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: -0.17,
        color: '#FF5E00',
    },
    btnCancel: {
        width: "100%",
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1, 
        borderSolid: 'solid',
        borderColor: '#FF5E00' ,
        marginTop: 20,
    },
    btnAcceptText: {
        fontFamily: 'Klarna Text',
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: -0.17,
        color: '#FFFFFF',
    },
    btnAccept: {
        width: "100%",
        height: 50,
        backgroundColor: '#FF5E00',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    orderToast: {
        paddingTop : 12,
        textAlign: 'center',
        fontFamily: 'Klarna Text',
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 21,
        color: '#6D3805',
        width: 300,
        height: 60,
    },
    orderAccepted: {
        paddingTop : 60,
        textAlign: 'center',
        fontFamily: 'Klarna Text',
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 24,
        color: '#6D3805',
    },
    imgOrderAccepted: {

    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
        alignItems: 'center',
    },
})