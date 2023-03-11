import { View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'

const EditAddress = (props) => {
    const { navigation } = props;
    return (
        <View style={EditAddressS.container}>
            <View>
                <Image style={EditAddressS.icontitle} source={require('../../../../media/images/Arrow.png')} />
            </View>
            <Text style={EditAddressS.text1}>
                Edit Addresses
            </Text>
            <View style={EditAddressS.v1}>
                <View style={EditAddressS.txtProf}>
                    <TextInput placeholder='Home' placeholderTextColor='#AC8E71' style={EditAddressS.txtContext}></TextInput>
                    <Image style={EditAddressS.iconVt} source={require('../../../../media/images/AddressVector.png')} />
                </View>
                <View style={EditAddressS.txtProf}>
                    <TextInput placeholder='mati egh' placeholderTextColor='#AC8E71' style={EditAddressS.txtContext}></TextInput>
                </View>
                <View style={EditAddressS.txtProf}>
                    <TextInput placeholder='Goteborg' placeholderTextColor='#AC8E71' style={EditAddressS.txtContext}></TextInput>
                    <Image style={EditAddressS.iconVt} source={require('../../../../media/images/AddressVector.png')} />
                </View>
                <View style={EditAddressS.txtProf}>
                    <TextInput placeholder='Lugangen 6, 41722' placeholderTextColor='#AC8E71' style={EditAddressS.txtContext}></TextInput>
                </View>
            </View>

            <Pressable style={EditAddressS.btUD}>
                <Text style={EditAddressS.txt}>Update Address</Text>
            </Pressable>
        </View>
    )
}

export default EditAddress

const EditAddressS = StyleSheet.create({

    txt: {
        color: '#FFFFFF',
        lineHeight: 24,
        fontSize: 16,
        fontWeight: '600'
    },
    btUD: {
        backgroundColor: '#FF5E00',
        borderRadius: 30,
        width: '100%',
        paddingVertical: 13,
        paddingHorizontal: 24,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 212,
        height: 50,
        gap: 10
    },
    iconVt: {
        position: 'absolute',
        right: 10,
        top: 20,
        width: 7,
        height: 7
    },
    v1: {
        marginTop: 64,
    },
    txtProf: {
        marginTop: 16,
    },
    txtContext: {
        borderColor: '#4E4B66',
        borderRadius: 5,
        height: 48,
        width: '100%',
        backgroundColor: '#F3F3F3',

    },
    text1: {
        width: '100%',
        height: 29,
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        color: '#FF5E00',
        marginLeft: 100,
        position: 'relative',
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