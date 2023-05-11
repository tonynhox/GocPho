import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';

const SignCode = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>


      {/* Main background image */}
      <Image
        style={{}}
        source={require('../../../../media/images/SignCodePhoneEdited.png')}
      />

      {/* Enter code */}
      <Text style={styles.enterVerificationCode}>Enter Verification code</Text>

      {/* Send SMS */}
      <Text style={styles.sentSMS} numberOfLines={2}>
        We have sent SMS to:{' '}
      </Text>
      <Text style={styles.sentSMS}>046 XXX XX XX</Text>

      {/* 4 lines and number import code */}
      <View style={styles.fourLines}>
        <View style={styles.numberCode}>
          <TextInput />
          <Image source={require('../../../../media/images/SmallLine.png')} />
        </View>

        <View style={styles.numberCode}>
          <TextInput />
          <Image source={require('../../../../media/images/SmallLine.png')} />
        </View>

        <View style={styles.numberCode}>
          <TextInput />
          <Image source={require('../../../../media/images/SmallLine.png')} />
        </View>

        <View style={styles.numberCode}>
          <TextInput />
          <Image source={require('../../../../media/images/SmallLine.png')} />
        </View>
      </View>

      <Pressable style={styles.btnSignUp} onPress={()=> navigation.navigate("Login")}>
        <Text style={styles.signUpInsideButton}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignCode;

const styles = StyleSheet.create({
  signUpInsideButton: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.41,
  },
  btnSignUp: {
    backgroundColor: '#FF5E00',
    marginTop: 70,
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
  numberCode: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fourLines: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
