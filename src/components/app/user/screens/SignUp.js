import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';

const SignUp = props => {
  const {navigation} = props;
  const [countryCode, setCountryCode] = useState('VN');
  const [callingCode, setCallingCode] = useState('84');
  return (
    <View style={styles.container}>

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

      {/* For the security */}
      <Text style={styles.sentSMS} numberOfLines={2}>
        We need to verify you. We will send you a one time verification code.{' '}
      </Text>

      <Pressable
        style={styles.btnSignUp}
        onPress={() => navigation.navigate('SignPass')}>
        <Text style={styles.signUpInsideButton}>Next</Text>
      </Pressable>

      {/* Already have an account? */}
      <View style={styles.alreadyHaveAccount}>
        <Text style={[styles.already, {color: '#7F4E1D'}]}>
          Already have an account?{' '}
        </Text>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={[styles.already, {color: '#FF5E00'}]}>
          Login
        </Text>
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
    alignItems: 'center',
    flexDirection: 'row',
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
    flex: 1,
  },
});
