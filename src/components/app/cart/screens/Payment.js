import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'

const Payment = () => {
    return (
        <ScrollView style={[styles.container]}>

            <View style={[styles.location]}>
                <View style={[styles.locationTop]}>
                    <Text style={[styles.locationTextRight]}>Delivery Location</Text>
                    <Text style={[styles.locationTextLeft]}>Change</Text>
                </View>

                <View style={[styles.locationBottom]}>
                    <Image source={require('../../../../media/images/IconLocation.png')} style={[styles.imgLocation]} />
                    <Text style={[styles.locationTextBottom]}>1234 Main Street, New York, NY 10001</Text>
                </View>
            </View>

            <View style={[styles.PickDate]}>
                <Text style={[styles.PickDateText]}>Expected date & Time</Text>
                <Pressable style={[styles.PickDateButton]}>
                    <Text style={[styles.PickDateButtonText]}>Select Date</Text>
                </Pressable>
                
                <View style={[styles.PickTime]}>
                    <Pressable style={[styles.PickTimeButton]}>
                        <Text style={[styles.PickTimeButtonText]}>8 AM - 11 AM</Text>
                    </Pressable>

                    <Pressable style={[styles.PickTimeButton]}>
                        <Text style={[styles.PickTimeButtonText]}>11 AM - 13 PM</Text>
                    </Pressable>

                    <Pressable style={[styles.PickTimeButton]}>
                        <Text style={[styles.PickTimeButtonText]}>13 PM - 15 PM</Text>
                    </Pressable>

                    <Pressable style={[styles.PickTimeButton]}>
                        <Text style={[styles.PickTimeButtonText]}>15 PM - 17 PM</Text>
                    </Pressable>

                    <Pressable style={[styles.PickTimeButton]}>
                        <Text style={[styles.PickTimeButtonText]}>17 PM - 19 PM</Text>
                    </Pressable>

                    <Pressable style={[styles.PickTimeButton]}>
                        <Text style={[styles.PickTimeButtonText]}>19 PM - 21 PM</Text>
                    </Pressable>
                </View>
            </View>
            <View style={[styles.InStoryPickup]}>
                    <Text style={[styles.InStoryPickupText]}>In-Store Pickup</Text>
                    <Text style={[styles.InStoryPickupText]}>FREE</Text>
                    <Text style={[styles.InStoryPickupInfo]}>Some Stores May Be Temporarily Unavalable.</Text>
                    <Image source={require('../../../../media/images/IconArrowRight.png')} style={[styles.imgArrowRight]} />
            </View>
            <View style={[styles.SeeItemes]}>
                <View style={[styles.SeeItemesLeft]}>
                    <Image source={require('../../../../media/images/IconStore.png')} style={[styles.imgIconStore]} />
                    <Text style={[styles.SeeItemesText]}>See Items</Text>
                </View>
                <Image source={require('../../../../media/images/IconArrowRight.png')} style={[styles.imgArrowRightItem]} />
            </View>


            <Pressable style = {[styles.btnAccept]}>
                <Text style = {[styles.btnAcceptText]}>Track Order</Text>
            </Pressable>
        </ScrollView>
    )
}

export default Payment

const styles = StyleSheet.create({
    SeeItemesText:{
        fontFamily: 'Klarna Text',
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
        color: '#6D3805',
        padding: 39,
        paddingLeft: 10,
        alignItems: 'center',
    },
    SeeItemesLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    SeeItemes:{
        width: '100%',
        height: 100,
        backgroundColor: '#FFF4E9',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 40,
    },
    imgArrowRight:{
        marginTop: 26,
    },
    InStoryPickupInfo:{
        paddingTop: 12,
        fontFamily: 'Klarna Text',
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 22,
        color: '#6D3805',
    },
    InStoryPickupText:{
        fontFamily: 'Klarna Text',
        fontWeight: "700",
        fontSize: 22,
        lineHeight: 27,
        color: '#6D3805',
    },
    InStoryPickup:{
        width: '100%',
        height: 100,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 16,
    },
    PickTimeButton:{
        width: 94,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
    PickTime:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,

    } ,
    PickDateButtonText:{
        fontFamily: 'Klarna Text',
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 20,

    },
    PickDateButton:{
        paddingLeft: 15,
        paddingRight: 15,
        height: 48,
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
    },
    PickDateText:{
        fontFamily: 'Klarna Text',
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
        color: '#6D3805',
        marginTop: 16,
        marginLeft: 16,
    },
    PickDate: {
        width: '100%',
        height: 230,
        backgroundColor: '#FFF4E9',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFE6CC',
        marginTop: 20,
    },
    locationTextBottom: {
        fontFamily: 'Klarna Text',
        paddingLeft: 10,
        fontWeight: "400",
        width: 180,
        fontSize: 14,
        lineHeight: 17,
        color: '#6D3805',

    },
    imgLocation: {

    },
    locationBottom: {
        paddingLeft: 15,
        flexDirection: 'row',
    },
    locationTextLeft: {
        fontFamily: 'Klarna Text',
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: -0.17,
        color: '#FF5E00',
    },
    locationTextRight: {
        fontFamily: 'Klarna Text',
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: -0.17,
        color: '#6D3805',
    },
    locationTop: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    location: {
        width: '100%',
        height: 103,
        backgroundColor: '#FFF4E9',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFE6CC',
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
        width: '100%',
        height: 50,
        backgroundColor: '#FF5E00',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    container: {
        padding: 16,
        textAlign: 'center',
        backgroundColor: '#F5F5F5',
        
    },
})