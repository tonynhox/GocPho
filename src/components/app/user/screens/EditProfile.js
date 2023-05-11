import { Button, StyleSheet, Text, TextInput, View, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal'

const EditProfile = (props) => {
    const { navigation } = props;
    const [countryCode, setCountryCode] = useState('VN');
    const [callingCode, setCallingCode] = useState('84');
    console.log(countryCode, callingCode);
    return (
        <View style={styles.container}>
            <TextInput style={styles.name}
                placeholder='mati egh :' />
            <View style={styles.hinh}>
                <View style={styles.phone}>
                    <CountryPicker
                        style={{alignItems:'center'}}
                        withFilter
                        countryCode={countryCode}
                        withFlag
                        withAlphaFilter
                        withEmoji={true}
                        withCallingCode={false}
                        withCurrencyButton={false}
                        onSelect={(country) => {
                            const { cca2, callingCode } = country;
                            console.log('country: ', country);
                            setCountryCode(cca2);
                            setCallingCode(callingCode);
                        }}
                    />
                    <TextInput
                        placeholder='+09139999290' />
                </View>


            </View>

            <Pressable style={styles.update}
                title='Update Profile' >
                <Text style={styles.updateText}>Update Profile</Text>
            </Pressable>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    hinh: {
        width: '100%',
        marginTop: 10
    },
    image: {
        top: 10,
    },

    container: {
        padding: 16,
        alignItems: 'center',
        flex:1
    },
    title: {
        color: '#FF5E00',
        fontSize: 28,
        fontWeight: '700',
    },
    name: {
        marginTop: 123,
        width: '100%',
        height: 48,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
    },
    phone: {
        flexDirection:'row',
        width: '100%',
        height: 48,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        alignItems:'center'
    },
    update: {
        position: 'absolute',
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#FF5E00',
        marginTop: 615,
        alignItems: 'center',
        justifyContent: 'center',
    },
    updateText: {
        height: 22,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: -0.165,
        color: '#fff'

    },
})