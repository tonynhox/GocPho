import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import loginSlice from '../../../../redux-toolkit/reducer_slice/user_slice/loginSlice';

const Avatar = ({navigation}) => {

const dataUser = useSelector(state => state.login.userInfo)
console.log("data user screen avt: ", dataUser)
const name = dataUser.user.name;
const photo = dataUser.user.photo

useEffect(() => {
  const timeout = setTimeout(() => {
    navigation.navigate('profile');
  }, 3000);

  return () => clearTimeout(timeout);
}, [])

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontWeight:'700', fontSize: 28, lineHeight:30, color: 'black'}}>Greeting</Text>
      <Image
        style={{width: 180, height: 180, resizeMode: 'contain', margin: 20, borderRadius: 90}}
        source={{
          uri: photo
        }}
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          adjustsFontSizeToFit
          style={{
            fontWeight: '600',
            fontSize: 28,
            lineHeight: 30,
            textAlign: 'center',
            color:'black'
          }}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
