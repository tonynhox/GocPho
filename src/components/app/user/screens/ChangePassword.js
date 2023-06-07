import { StyleSheet, Text, View, Pressable, TextInput,Image, ToastAndroid } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AxiosInstance from '../../axiosClient/AxiosInstance';


const changepass = async (_id,oldpassword, newpassword) => {
    try {
        const body = {
            _id,oldpassword, newpassword
        }
        return await AxiosInstance().post('user/change-password', body);
        // console.log("---------",response);
        // if (!response.ok) {
        //     throw new Error('Request failed with status: ' + response.status);
        //   }
      
        //   // Process the response data or update state as needed
        //   // For example, you can return the response data from this function:
        // return true;

    } catch (error) {
        console.log('ERROR:',error);
        return false;

    }}


const ChangePassword = (props) => {
    const { navigation } = props;

    const idUser = useSelector(state => state.login.userInfo.user._id);
    const [passold, setPassOld] = useState('');
    const [passNew, setPassNew] = useState('');
    const [passNewConfirm, setPassNewConfirm] = useState('');

    const changePassword=()=> passNew===passNewConfirm?
    changepass(idUser,passold, passNew)
    .then(data => {
      // Handle the response data here
      console.log('Received data:', data);
      data?
      navigation.goBack():ToastAndroid.show('Fail Change password!', ToastAndroid.SHORT);
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    }):
    ToastAndroid.show('Fail Change password!', ToastAndroid.SHORT);

    return (
        <View style={styles.container}>
            <View style={styles.vector1}>
                <TextInput style={styles.oldpassword}
                    onChangeText={text => setPassOld(text)}
                    placeholder='Old Password :' />
                <Image style={styles.image} source={require('../../../../media/images/vector.png')}/>
            </View>
            <View style={styles.vector2}>
                <TextInput style={styles.newpassword}
                    onChangeText={text => setPassNew(text)}
                    placeholder='New password :' />
                <Image style={styles.image} source={require('../../../../media/images/vector.png')}/>
            </View>
            <View style={styles.vector3}>
                <TextInput style={styles.confirmpassword}
                    onChangeText={text => setPassNewConfirm(text)}
                    placeholder='Confirm password :' />
                <Image style={styles.image3} source={require('../../../../media/images/vector.png')}/>
            </View>
            <Pressable style={styles.confirm1}
                onPress={()=> changePassword()}
                title='Update Profile' >
                <Text style={styles.updateText}>Confirm</Text>
            </Pressable>
            <Pressable style={styles.confirm2}
                title='Update Profile' >
                <Text style={styles.updateText}>Back To Sign In</Text>
            </Pressable>
        </View>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    vector3:{
        position: 'relative',
        width: '100%',
        marginTop:5
    },
    image3: {
        position: 'absolute',
        top: 160,
    },
    vector2:{
        position: 'relative',
        width: '100%',
        marginTop:40    
    },
    image: {
        position: 'absolute',
        top: 145,
    },
    vector1:{
        position: 'relative',
        width: '100%',
        marginTop:5
    },
    image: {
        position: 'absolute',
        top: 145,
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
        width:250,
        height:50,
        top:74,
        alignItems:'center',
        letterSpacing:-0.408,
    },
    oldpassword: {
        backgroundColor:'#F3F3F3',
        paddingLeft:10,
        width: 348,
        height: 40,
        left: 13,
        top: 130,
        background: '#F3F3F3',
        borderRadius:5,
    },
    newpassword: {
        backgroundColor:'#F3F3F3',
        width: 343,
        height: 40,
        left: 13,
        top: 138,
        background: '#F3F3F3',
        borderRadius:5,
    },
    confirmpassword: {
        backgroundColor:'#F3F3F3',
        width: 343,
        height: 40,
        left: 13,
        top: 148,
        background: '#F3F3F3',
        borderRadius:5,
    },
    confirm1: {
        position: 'absolute',
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#FF5E00',
        marginTop: 555,
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
    confirm2: {
        position: 'absolute',
        width: '100%',
        height: 50,
        borderRadius: 30,
        marginTop: 615,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5E00',

    },
})