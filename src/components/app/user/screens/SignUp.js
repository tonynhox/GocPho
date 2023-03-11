import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';

const SignUp = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <Image source={require('../../../../media/images/Arrow.png')}></Image>

      {/* SignUP title*/}
      <View style={styles.mainTitle}>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>

      {/* Main background image */}
      <Image
        source={require('../../../../media/images/SignUpPhoneEdited.png')}
      />

      {/* Name input */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Name Surname"
          placeholderTextColor={'#AC8E71'}
          style={styles.inputPasswordConfirmPassword}
        />
      </View>

      {/* Name input */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor={'#AC8E71'}
          style={styles.inputPasswordConfirmPassword}
        />
      </View>

      {/* For the security */}
      <Text style={styles.sentSMS} numberOfLines={2}>
        We need to verify you. We will send you a one time verification code.{' '}
      </Text>

      <Pressable style={styles.btnSignUp} onPress={()=> navigation.navigate("SignPass")}>
        <Text style={styles.signUpInsideButton}>Next</Text>
      </Pressable>

      {/* Already have an account? */}
      <View style={styles.alreadyHaveAccount}>
        <Text style={[styles.already, {color:'#7F4E1D'}]}>Already have an account? </Text>
        <Text onPress={()=> navigation.navigate("Login")} style={[styles.already,{color:'#FF5E00'}]}>Login</Text>
      </View>
    </View>
  );
};

export default SignUp;

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
  inputPasswordConfirmPassword: {
    backgroundColor: '#F3F3F3',
    marginTop: 16,
    borderRadius: 6,
    paddingLeft: 30,
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
