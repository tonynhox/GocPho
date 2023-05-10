import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Address = (props) => {
    const { navigation } = props;
    return (
        <View style={AddressS.container}>
            <Text style={AddressS.text1}>
                Addresses
            </Text>
            <Pressable style={[AddressS.item, AddressS.tt]}>
                <View style={AddressS.isItem}>
                    <Image style={{ marginRight: 6 }} source={require('../../../../media/images/AddressHome.png')} />
                    <View>
                        <Text style={AddressS.text2}>Home</Text>
                        <Text style={AddressS.text3}>Lungangen 6, 41722 </Text>
                    </View>
                </View>
                <Image source={require('../../../../media/images/AddressNext.png')} />
            </Pressable>
            <Pressable style={[AddressS.item2, AddressS.tt]}>
                <View style={AddressS.isItem}>
                    <Image style={{ marginRight: 6 }} source={require('../../../../media/images/AddressOffice.png')} />
                    <View>
                        <Text style={AddressS.text2}>Office</Text>
                        <Text style={AddressS.text3}>Lungangen 6, 41722 </Text>
                    </View>
                </View>
                <Image source={require('../../../../media/images/AddressNext.png')} />
            </Pressable>

            <Pressable
                style={AddressS.btnAdd}
                onPress={() => navigation.navigate('SignPass')}>
                <Text style={AddressS.add}>Add</Text>
            </Pressable>
        </View>
    )
}

export default Address

const AddressS = StyleSheet.create({
    btnAdd: {
        backgroundColor: '#FF5E00',
        marginTop: 300,
        height: '8%',
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
    add: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 22,
        letterSpacing: 0.41,
    },
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
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    }
})