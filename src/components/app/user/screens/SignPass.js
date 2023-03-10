import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';

const SignPass = () => {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <Image source={require('../../../../media/images/Arrow.png')}></Image>

      {/* SignUP title */}
      <View style={styles.mainTitle}>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>

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

      <Pressable style={styles.btnSignUp}>
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
  },
});
