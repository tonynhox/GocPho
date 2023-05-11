import { StyleSheet, Text, View, Image, Alert, Pressable } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusLogin } from '../../../../redux-toolkit/reducer_slice/user_slice/loginSlice';
import { getUserInformationFromGoogle } from '../../../../redux-toolkit/reducer_slice/user_slice/loginSlice';
import { useNavigation } from '@react-navigation/native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const ProfileScreen = props => {
  const { navigation } = props;
  const clearNavigation = useNavigation()

  const infor = useSelector(state => state.login.userInfo);

  console.log('User info: ', infor);
  const dispatch = useDispatch();

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      dispatch(await getUserInformationFromGoogle(null));
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const askForLogout = () => {
    Alert.alert(
      'Logout?',
      'Are you sure you want to Logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => handleLogout() },
      ],
      { cancelable: false }
    )
  }

  const handleLogout = async () => {
    signOut();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Shop' }],
    });
    await dispatch(changeStatusLogin(false));
  };

  return (
    <View style={styles.container}>

      <View style={styles.body}>
        {/* Avatar form google */}
        {/* <View style={styles.bodyAccount}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              borderRadius: 40,
            }}
            source={{uri: infor.user.photo}}
          />
        </View> */}

        <View style={styles.bodyAccountGoogle}>
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
              borderRadius: 25,
            }}
            source={{ uri: infor.user.photo }}
          />
          <View >
            <Text style={styles.textAccountGoogle}>{infor.user.name}</Text>
            <Pressable onPress={() => props.navigation.navigate('EditProfile')} >
              <Text style={[styles.textAccountGoogle, { fontWeight: '450' }]}>Edit Profile</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          onPress={() => props.navigation.navigate('ChangePassword')}
          style={styles.bodyAccount}>
          <Image
            source={require('../../../../media/images/iconKey.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.textAccount}>Change Password</Text>
        </Pressable>

        <Pressable
          onPress={() => props.navigation.navigate('Mycards')}
          style={styles.bodyAccount}>
          <Image
            source={require('../../../../media/images/iconCard.png')}
            style={{ width: 24, height: 21 }}
          />
          <Text style={styles.textAccount}>My Cards</Text>
        </Pressable>

        <Text style={styles.textBody}>App Settings</Text>

        <View style={styles.bodyAccount}>
          <Image
            source={require('../../../../media/images/iconNotification.png')}
            style={{ width: 20, height: 24 }}
          />
          <Text style={styles.textAccount}>Notifications</Text>
        </View>

        <View style={styles.bodyAccount}>
          <Image
            source={require('../../../../media/images/iconLanguage.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.textAccount}>Language</Text>
        </View>

        <Pressable style={styles.bodyAccount} onPress={askForLogout}>
          <Image
            source={require('../../../../media/images/iconLogout.png')}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.textAccount}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  textBody: {
    fontWeight: '700',
    fontSize: 22,
    color: '#FF5E00',
    marginBottom: 25,
  },
  textAccount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6D3805',
    marginLeft: 27,
  },

  textAccountGoogle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6D3805',
    marginLeft: 15,
  },
  bodyAccount: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  bodyAccountGoogle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  body: {},
  textHeader: {
    marginBottom: 21,
    fontWeight: '700',
    fontSize: 24,
    color: '#FF5E00',
  },
  header: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 28,
    flexDirection: 'column',
  },
});
