import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

// GoogleSignin.configure({
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//   webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: '', // specifies a hosted domain restriction
//   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//   accountName: '', // [Android] specifies an account name on the device that should be used
//   iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//   googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
//   openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
//   profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
// });

const LogIn = props => {
  const [user, setUser] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      //  webClientId: 'ABC123',  // Replace with your Google web client ID
      // offlineAccess: true,
      // hostedDomain: '',
      // forceCodeForRefreshToken: true,
      // accountName: '',
    });

    const getCurrentUser = async () => {
      const currentUser = await GoogleSignin.getCurrentUser();

      if (currentUser) {
        setUser(currentUser);
      }
    };

    getCurrentUser();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo)
      console.log('User infor: ', userInfo)
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

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const {navigation} = props;
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <Image source={require('../../../../media/images/Arrow.png')}></Image>
      {/* SignUP */}
      <View style={styles.mainTitle}>
        <Text style={styles.signUp}>Sign In</Text>
      </View>
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
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor={'#AC8E71'}
          style={styles.inputPasswordConfirmPassword}
        />
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

      {/* <Pressable>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn()}
          // disabled={this.state.isSigninInProgress}
        />
      </Pressable> */}

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
        {user && (
          <View style={{marginTop: 20}}>
            <Text>Welcome {user.user.name}!</Text>
            <Pressable title="Sign Out" onPress={signOut} />
          </View>
        )}
      </View>

      <Pressable
        onPress={() => {
          signOut();
        }}>
        <Text style={{color: 'black'}}>Sign out</Text>
      </Pressable>

      <Pressable style={styles.btnSignUp} onPress={() => navigation.goBack()}>
        <Text style={styles.signUpInsideButton}>Sign In</Text>
      </Pressable>
      {/* Already have an account? Login */}
      <View style={styles.alreadyHaveAccount}>
        <Text style={[styles.already, {color: '#7F4E1D'}]}>
          Already have an account?{' '}
        </Text>
        <Text style={[styles.already, {color: '#FF5E00'}]}>Sign Up</Text>
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
  },
});
