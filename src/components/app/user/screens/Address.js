import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Address = (props) => {
    const { navigation } = props;
    return (
        <View style={AddressS.container}>
            <View style={AddressS.tt}>
                <Image style={AddressS.icontitle} source={require('../../../../media/images/Arrow.png')} />
                <Image style={AddressS.icontitle} source={require('../../../../media/images/AddressAdd.png')} />
            </View>
            <Text style={AddressS.text1}>
                Addresses
            </Text>
            <Pressable style={[AddressS.item, AddressS.tt]}>
                <View style={AddressS.isItem}>
                    <Image style={{marginRight:6}} source={require('../../../../media/images/AddressHome.png')} />
                    <View>
                        <Text style={AddressS.text2}>Home</Text>
                        <Text style={AddressS.text3}>Lungangen 6, 41722 </Text>
                    </View>
                </View>
                <Image source={require('../../../../media/images/AddressNext.png')} />
            </Pressable>
            <Pressable style={[AddressS.item2, AddressS.tt]}>
                <View style={AddressS.isItem}>
                    <Image style={{marginRight:6}} source={require('../../../../media/images/AddressOffice.png')} />
                    <View>
                        <Text style={AddressS.text2}>Office</Text>
                        <Text style={AddressS.text3}>Lungangen 6, 41722 </Text>
                    </View>
                </View>
                <Image source={require('../../../../media/images/AddressNext.png')} />
            </Pressable>
        </View>
    )
}

export default Address

const AddressS = StyleSheet.create({
    item2: {
        // position: 'absolute',
        width: '100%',
        height: 70,
        marginTop: 30,
    },
    text3: {
        position: 'absolute',
        width: 145,
        height: 19,
        marginTop: 18,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
    },
    text2: {
        // position: 'absolute',
        width: 50,
        height: 22,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 22,
        color: '#6D3805',
    },
    isItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20,
    },
    item: {
        // position: 'absolute',
        width: '100%',
        height: 70,
        marginTop: 68,
    },
    text1: {
        width: 119,
        height: 29,
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        color: '#FF5E00',
        alignSelf: 'center'
    },
    tt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icontitle: {

        width: 8.49,
        height: 14,
        background: '#FF5E00',
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    }
})