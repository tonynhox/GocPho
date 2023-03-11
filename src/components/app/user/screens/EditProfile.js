import { Button, StyleSheet, Text, TextInput, View, Pressable,Image } from 'react-native'
import React from 'react'

const EditProfile = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>
            <TextInput style={styles.name}
                placeholder='mati egh :' />
            <View style={styles.hinh}> 
                <TextInput style={styles.phone}
                placeholder='+09139999290' />
                <Image style={styles.image} source={ require('../../../../media/images/flag.png')} />
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
    hinh:{
        position:'relative',
        width:'100%',
        marginTop:10
    },
    image:{
        position:'absolute',
        top: 10,
    },

    container: {
        padding: 16,
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: '#FF5E00',
        fontSize: 28,
        fontWeight: '700',
    },
    name: {
        marginTop:123,
        width: '100%',
        height: 48,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
    },
    phone: {
        paddingLeft:40,
        width: '100%',
        height: 48,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
    },
    update: {
        position: 'absolute',
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor:'#FF5E00',
        marginTop:615,
        alignItems: 'center',
        justifyContent: 'center',
    },
    updateText:{
        height: 22,
        fontWeight:'700',
        fontSize :18,
        lineHeight: 22,
        letterSpacing:-0.165,
        color:'#fff'

    },
})