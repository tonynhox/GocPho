import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import loginSlice, {
  changeStatusLogin,
  getUserInformationFromGoogle,
} from '../../../../redux-toolkit/reducer_slice/user_slice/loginSlice';
import {useDispatch} from 'react-redux';

import CountryPicker from 'react-native-country-picker-modal';

GoogleSignin.configure();

const LogIn = props => {
  const [user, setUser] = useState(null);

  const {navigation} = props;

  const [countryCode, setCountryCode] = useState('VN');
  const [callingCode, setCallingCode] = useState('84');

  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({});

    const getCurrentUser = async () => {
      const currentUser = await GoogleSignin.getCurrentUser();

      if (currentUser) {
        setUser(currentUser);
      }
    };

    getCurrentUser();
  }, []);

  // const getCurrentUser = useCallback(async () => {
  //   const currentUser = await GoogleSignin.getCurrentUser();

  //   if (currentUser) {
  //     setUser(currentUser);
  //   }
  // }, [setUser]);

  // useEffect(() => {
  //   GoogleSignin.configure({});
  //   getCurrentUser();
  // }, [getCurrentUser]);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      console.log('User infor: ', userInfo);

      dispatch(await getUserInformationFromGoogle(userInfo));
      dispatch(await changeStatusLogin(true));
      // console.log('User: ', user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('user cancelled the login flow ');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('play services not available or outdated');
      } else {
        console.log('some other error happened');
        // some other error happened
      }
    }
  };

  const handleLogin = async () => {
    console.log('User: ', user);
    dispatch(getUserInformationFromGoogle(user));
    dispatch(changeStatusLogin(true));
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <View style={styles.container}>

      {/* Main background image */}
      <Image
        source={require('../../../../media/images/LoginPhoneEdited.png')}
      />
      {/* For the security */}
      <Text style={styles.sentSMS} numberOfLines={2}>
        Enter your phone number and password to access your account{' '}
      </Text>
      {/* Phone Number input */}
      <View style={styles.passwordContainer}>
        <View style={styles.inputPasswordConfirmPassword}>
          <CountryPicker
            style={{alignItems: 'center'}}
            withFilter
            countryCode={countryCode}
            withFlag
            withAlphaFilter
            withEmoji={true}
            withCallingCode={false}
            withCurrencyButton={false}
            onSelect={country => {
              const {cca2, callingCode} = country;
              console.log('country: ', country);
              setCountryCode(cca2);
              setCallingCode(callingCode);
            }}
          />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={'#AC8E71'}
          />
        </View>
      </View>
      {/* Confirm Password input */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#AC8E71'}
          style={styles.inputPasswordConfirmPassword}
        />

        <Image
          style={styles.iconEye}
          source={require('../../../../media/images/IconEye.png')}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <View></View>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </View>

      <Pressable style={styles.btnSignUp} onPress={() => navigation.goBack()}>
        <Text style={styles.signUpInsideButton}>Sign In</Text>
      </Pressable>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      </View>
      {/* Already have an account? Login */}
      <View style={styles.alreadyHaveAccount}>
        <Text style={[styles.already, {color: '#7F4E1D'}]}>
          Don't have an account?{' '}
        </Text>
        <Text
          style={[styles.already, {color: '#FF5E00'}]}
          onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  already: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  alreadyHaveAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  forgotPassword: {
    color: '#FF5E00',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
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
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    marginTop: 16,
    borderRadius: 6,
    paddingLeft: 20,
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
    marginTop: 10,
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
