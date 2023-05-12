import { View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'

const NewsAddress = (props) => {
    const { navigation } = props;
    return (
        <View style={NewsAddressS.container}>

            <View style={NewsAddressS.v1}>
                <View style={NewsAddressS.txtProf}>
                    <TextInput placeholder='Address Title' placeholderTextColor='#AC8E71' style={NewsAddressS.txtContext}></TextInput>
                </View>
                <View style={NewsAddressS.txtProf}>
                    <TextInput placeholder='Name Surname' placeholderTextColor='#AC8E71' style={NewsAddressS.txtContext}></TextInput>
                </View>
                <View style={NewsAddressS.txtProf}>
                    <TextInput placeholder='City' placeholderTextColor='#AC8E71' style={NewsAddressS.txtContext}></TextInput>
                    <Image style={NewsAddressS.iconVt} source={require('../../../../media/images/AddressVector.png')} />
                </View>
                <View style={NewsAddressS.txtProf}>
                    <TextInput placeholder='Address' placeholderTextColor='#AC8E71' style={NewsAddressS.txtContext}></TextInput>
                </View>
            </View>

            <Pressable style={NewsAddressS.btAdd}>
                <Text style={NewsAddressS.txt}>Add</Text>
            </Pressable>
        </View>
    )
}

export default NewsAddress

const NewsAddressS = StyleSheet.create({

    txt: {
        color: '#FFFFFF',
        lineHeight: 24,
        fontSize: 16,
        fontWeight: '600'
    },
    btAdd: {
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