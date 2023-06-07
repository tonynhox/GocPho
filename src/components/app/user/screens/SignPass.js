import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { StackActions,NavigationActions } from '@react-navigation/native';
import AxiosInstance from '../../axiosClient/AxiosInstance';



// const createuser = async (username,fullname,password) => {
//   try {
//     const response = await fetch('https://sever-gocpho.herokuapp.com/user/register-username', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({username,fullname,password }),
//     });

//     if (!response.ok) {
//       throw new Error('Request failed with status: ' + response.status);
//     }

//     const data = await response.json();
//     console.log('changepass DATA:', data);
//     // Process the response data or update state as needed
//     // For example, you can return the response data from this function:
//     return data;
//   } catch (error) {
//     console.log('ERROR:',error);
//     // Handle the error as needed
//   }
// };

const createuser = async (username,fullname,password) => {
  try {
    const body={
      username,fullname,password
    }
      const response = await AxiosInstance().post('/user/register-username',body);
      console.log('register response',response)
      return true;
  } catch (error) {
      console.log("error: " + error);
  }
  return false;
}


const SignPass = (props) => {
  const { navigation } = props;

  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const name = props.route?.params?.name;
  const user = props.route?.params?.user;

  const handleLogout = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };
  
  
  const createusername=()=> pass===confirmPass?
  createuser(user,name,pass)
    .then(data => {
      // Handle the response data here
      console.log('Received data:', data);
      data?handleLogout():ToastAndroid.show('Fail create user!', ToastAndroid.SHORT);
      
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      ToastAndroid.show('Fail create user!', ToastAndroid.SHORT);
      console.error('Error:', error);
    }):
    ToastAndroid.show('Fail create user!', ToastAndroid.SHORT);


  return (
    <View style={styles.container}>


      {/* Main background image */}
      <Image
        source={require('../../../../media/images/SignPassPhoneEdited.png')}
      />

      {/* Enter the password */}
      <Text style={styles.enterVerificationCode}>Enter the password</Text>

      {/* For the security */}
      <Text style={styles.sentSMS} numberOfLines={2}>
        For the security & safety please choose a password
      </Text>

      {/* Password input */}
      <View style={styles.passwordContainer}>
        <TextInput
          onChangeText={text => setPass(text)}
          placeholder="Password"
          placeholderTextColor={'#AC8E71'}
          style={styles.inputPasswordConfirmPassword}
        />

        <Image
          style={styles.iconLock}
          source={require('../../../../media/images/IconLock.png')}
        />
        <Image
          style={styles.iconEye}
          source={require('../../../../media/images/IconEye.png')}
        />
      </View>

      {/* Confirm Password input */}
      <View style={styles.passwordContainer}>
        <TextInput
          onChangeText={text => setConfirmPass(text)}
          placeholder="Confirm Password"
          placeholderTextColor={'#AC8E71'}
          style={styles.inputPasswordConfirmPassword}
        />

        <Image
          style={styles.iconLock}
          source={require('../../../../media/images/IconLock.png')}
        />
        <Image
          style={styles.iconEye}
          source={require('../../../../media/images/IconEye.png')}
        />
      </View>

      <Pressable style={styles.btnSignUp} onPress={()=> createusername()
      }>
        <Text style={styles.signUpInsideButton}>Next</Text>
      </Pressable>
    </View>
  );
};

export default SignPass;

const styles = StyleSheet.create({
  iconEye: {
    position: 'absolute',
    top: '45%',
    left: '90%',
  },
  iconLock: {
    position: 'absolute',
    top: '45%',
    left: '5%',
  },
  iconLockEyeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    position: 'absolute',
  },
  passwordContainer: {
    position: 'relative',
  },
  inputPasswordConfirmPassword: {
    backgroundColor: '#F3F3F3',
    marginTop: 16,
    borderRadius: 6,
    paddingLeft: 50,
  },
  signUpInsideButton: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.41,
  },
  btnSignUp: {
    backgroundColor: '#FF5E00',
    marginTop: 40,
    height: '8%',
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 41,
    letterSpacing: 0.41,
    color: '#FF5E00',
  },
  sentSMS: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#7F4E1D',
    marginTop: 13,
  },
  enterVerificationCode: {
    marginTop: 25,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#7F4E1D',
  },
  imagePhone: {
    position: 'absolute',
    top: 35,
    alignItems: 'center',
  },
  mainImageContainer: {
    position: 'relative',
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    flex: 1,
  },
});
